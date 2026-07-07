import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the EmailJS SDK so no network request is made.
vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn() },
  EmailJSResponseStatus: class {},
}));

import emailjs from '@emailjs/browser';
import { sendEmail } from './emailService';

const mockedSend = vi.mocked(emailjs.send);

describe('sendEmail', () => {
  beforeEach(() => {
    mockedSend.mockReset();
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('forwards the form data to emailjs.send and returns success', async () => {
    mockedSend.mockResolvedValue({ status: 200, text: 'OK' });

    const result = await sendEmail({
      name: 'Ada',
      email: 'ada@example.com',
      message: 'Hello there',
    });

    expect(result.success).toBe(true);
    expect(mockedSend).toHaveBeenCalledTimes(1);
    // send(serviceId, templateId, params, publicKey) — assert the params payload
    // (service/public keys are env-derived and undefined in the test env).
    const params = mockedSend.mock.lastCall?.[2];
    expect(params).toMatchObject({
      name: 'Ada',
      email: 'ada@example.com',
      message: 'Hello there',
      to_name: 'Aleksandar Trenchevski',
    });
  });

  it('returns a failure result when emailjs.send rejects', async () => {
    mockedSend.mockRejectedValue(new Error('network down'));

    const result = await sendEmail({
      name: 'Ada',
      email: 'ada@example.com',
      message: 'Hello there',
    });

    expect(result).toEqual({ success: false, error: 'network down' });
  });
});
