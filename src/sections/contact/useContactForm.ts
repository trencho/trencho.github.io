import type React from 'react';
import { useRef, useState } from 'react';
import type ReCAPTCHA from 'react-google-recaptcha';
import { sendEmail } from '@/services/emailService';
import { showError, showSuccess } from '@/shared/utils/toastUtils';

export const MAX_MESSAGE_LENGTH = 5000;
const MIN_NAME_LENGTH = 2;
const MIN_MESSAGE_LENGTH = 10;
const MAX_EMAIL_LENGTH = 254;

type Field = 'name' | 'email' | 'message';
type FormData = Record<Field, string>;
type FormErrors = Partial<Record<Field, string>>;

const EMPTY_FORM: FormData = { name: '', email: '', message: '' };

const validate = ({ name, email, message }: FormData): FormErrors => {
  const errors: FormErrors = {};
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName) {
    errors.name = 'Name is required';
  } else if (trimmedName.length < MIN_NAME_LENGTH) {
    errors.name = `Name must be at least ${MIN_NAME_LENGTH} characters`;
  }

  if (!trimmedEmail) {
    errors.email = 'Email is required';
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) ||
    trimmedEmail.length > MAX_EMAIL_LENGTH
  ) {
    errors.email = 'Please enter a valid email address';
  }

  if (!trimmedMessage) {
    errors.message = 'Message is required';
  } else if (trimmedMessage.length < MIN_MESSAGE_LENGTH) {
    errors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters`;
  } else if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`;
  }

  return errors;
};

/** The contact form's state and behaviour: values, validation, captcha and sending. */
export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  // Held so a spent token can be cleared from the widget itself, not just from React state.
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name = e.target.name as Field;
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // A reCAPTCHA token is single-use. The widget reset and the state clear travel
  // together, so no caller can do one and forget the other.
  const clearCaptcha = () => {
    recaptchaRef.current?.reset();
    setCaptchaValue(null);
  };

  const handleReset = () => {
    setFormData(EMPTY_FORM);
    setErrors({});
    clearCaptcha();
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      showError('Please fix the form errors before submitting.');
      return;
    }

    if (!captchaValue) {
      showError('Please complete the CAPTCHA to proceed.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData, captchaValue);

      if (result.success) {
        setSubmitted(true);
        showSuccess("Message sent successfully! I'll get back to you soon.");
      } else {
        // The form stays mounted for a retry, and a retry with the spent token
        // fails verification, so the visitor has to solve a fresh challenge.
        clearCaptcha();
        showError(
          `Failed to send message: ${result.error}. Please try again later, or reach me on LinkedIn.`,
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      clearCaptcha();
      showError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    submitted,
    isSubmitting,
    recaptchaRef,
    handleInputChange,
    handleCaptchaChange: setCaptchaValue,
    handleSubmit,
    handleReset,
  };
};
