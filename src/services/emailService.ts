import { config, validateConfig } from '@/config/environment';
import emailjs from '@emailjs/browser';

// Validate configuration on import
validateConfig();

export const emailServiceConfig = {
  serviceId: config.emailjs.serviceId,
  templateId: config.emailjs.templateId,
  publicKey: config.emailjs.publicKey,
};

export const sendEmail = async (formData: { name: string; email: string; message: string }) => {
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
      emailServiceConfig.publicKey
    );

    return { success: true, data: result };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
};
