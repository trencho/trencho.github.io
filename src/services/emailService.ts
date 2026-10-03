import { config, validateConfig } from '@/config/environment';
import type { EmailJSResponseStatus } from '@emailjs/browser';
import { PROFILE } from '@/shared/utils/constants';

// Validate configuration on import
validateConfig();

const emailServiceConfig = {
  serviceId: config.emailjs.serviceId,
  templateId: config.emailjs.templateId,
  publicKey: config.emailjs.publicKey,
};

export interface EmailFormData {
  name: string;
  email: string;
  message: string;
}

export type EmailResult =
  | { success: true; data: EmailJSResponseStatus }
  | { success: false; error: string };

/**
 * Sends the contact form through EmailJS.
 *
 * `captchaToken` is forwarded as `g-recaptcha-response`, the field name EmailJS looks for when
 * reCAPTCHA verification is enabled on the template. Without it the challenge is decorative: the
 * service id, template id and public key are all inlined into this bundle at build time (Vite
 * exposes every VITE_ var to the client), so anyone can read them off the published site and call
 * the API directly, never loading the form. Verifying the token server-side is what makes solving
 * the challenge actually necessary.
 *
 * Enabling verification is a dashboard setting on the EmailJS template; passing the token here is
 * the half that lives in code.
 */
export const sendEmail = async (
  formData: EmailFormData,
  captchaToken: string,
): Promise<EmailResult> => {
  try {
    // Loaded on the first send: most visitors never submit the form.
    const { default: emailjs } = await import('@emailjs/browser');
    const result = await emailjs.send(
      emailServiceConfig.serviceId,
      emailServiceConfig.templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_name: PROFILE.name,
        to_email: config.contact.email,
        'g-recaptcha-response': captchaToken,
      },
      emailServiceConfig.publicKey,
    );

    return { success: true, data: result };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to send email';
    console.error('Email send error:', error);
    return { success: false, error: errorMessage };
  }
};
