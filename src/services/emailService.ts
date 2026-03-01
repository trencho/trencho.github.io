import { config, validateConfig } from '@/config/environment';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

// Validate configuration on import
validateConfig();

export const emailServiceConfig = {
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

export const sendEmail = async (
  formData: EmailFormData,
): Promise<EmailResult> => {
  try {
    const result = await emailjs.send(
      emailServiceConfig.serviceId,
      emailServiceConfig.templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_name: 'Aleksandar Trenchevski',
        to_email: config.contact.email,
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
