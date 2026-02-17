// Environment configuration
// Create a .env.local file in your project root with these variables:

export const config = {
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
  recaptcha: {
    siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  },
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL,
  },
};

// Validation function to check if required environment variables are set
export const validateConfig = () => {
  const requiredVars = [
    'VITE_CONTACT_EMAIL',
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY',
    'VITE_RECAPTCHA_SITE_KEY',
  ];

  const missingVars = requiredVars.filter((varName) => !import.meta.env[varName]);

  if (missingVars.length > 0) {
    console.warn('Missing environment variables:', missingVars);
  }

  return missingVars.length === 0;
};
