// Environment configuration
// Create a .env file in your project root with these variables:

export const config = {
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
  },
  recaptcha: { siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY as string },
  contact: { email: import.meta.env.VITE_CONTACT_EMAIL as string },
};

// Validation function to check if required environment variables are set
export const validateConfig = (): void => {
  const requiredVars = [
    'VITE_CONTACT_EMAIL',
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY',
    'VITE_RECAPTCHA_SITE_KEY',
  ];

  const missingVars = requiredVars.filter(
    (varName) => !import.meta.env[varName],
  );

  if (missingVars.length > 0) {
    const errorMessage = `Missing required environment variables: ${missingVars.join(', ')}. Please check your .env file.`;
    if (import.meta.env.MODE === 'production') {
      throw new Error(errorMessage);
    } else {
      console.warn(errorMessage);
    }
  }
};
