import React, { useRef, useState } from 'react';
import type ReCAPTCHA from 'react-google-recaptcha';
import { sendEmail } from '@/services/emailService';
import { showError, showSuccess } from '@/shared/utils/toastUtils';

/**
 * All of the contact form's state and behaviour: field values, validation,
 * captcha lifecycle and submission.
 *
 * Contact.tsx was 408 lines carrying this, its own field component and the whole
 * form markup. Splitting the logic out means the validation rules and the
 * captcha handling can be read - and reasoned about - without scrolling past a
 * page of Tailwind classes.
 *
 * `darkMode` is a parameter rather than a `useTheme()` call inside the hook,
 * because the only thing it feeds is the toast colour.
 */
export const useContactForm = (darkMode: boolean) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  // Held so a spent token can be cleared from the widget itself, not just from React state.
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const MIN_NAME_LENGTH = 2;
    const MIN_MESSAGE_LENGTH = 10;
    const MAX_MESSAGE_LENGTH = 5000;

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // Name validation
    if (!trimmedName) {
      newErrors.name = 'Name is required';
    } else if (trimmedName.length < MIN_NAME_LENGTH) {
      newErrors.name = `Name must be at least ${MIN_NAME_LENGTH} characters`;
    }

    // Email validation
    if (!trimmedEmail) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) ||
      trimmedEmail.length > 254
    ) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!trimmedMessage) {
      newErrors.message = 'Message is required';
    } else if (trimmedMessage.length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters`;
    } else if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  // The reset and the state clear must travel together: a site doing one without the other
  // leaves a spent token in state, which is the defect #35 fixed. Three call sites repeated the
  // pair verbatim, so one of them forgetting the second line was a live possibility.
  const clearCaptcha = () => {
    recaptchaRef.current?.reset();
    setCaptchaValue(null);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    clearCaptcha();
    setSubmitted(false);
    setShowMessage(false);
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      showError('Please fix the form errors before submitting.', darkMode);
      return;
    }

    if (!captchaValue) {
      showError('Please complete the CAPTCHA to proceed.', darkMode);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData, captchaValue);

      if (result.success) {
        setSubmitted(true);
        setShowMessage(true);
        showSuccess(
          "Message sent successfully! I'll get back to you soon.",
          darkMode,
        );
      } else {
        // A reCAPTCHA token is single-use and short-lived. On a failure the form stays mounted, so
        // without clearing this the next attempt would resubmit a token the server has already
        // seen -- which fails verification and looks like the send is broken rather than the token
        // being spent. Clearing it forces a fresh challenge, which is what the retry needs.
        clearCaptcha();
        showError(
          `Failed to send message: ${result.error}. Please try again or contact me directly.`,
          darkMode,
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      clearCaptcha();
      showError('An unexpected error occurred. Please try again.', darkMode);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    submitted,
    showMessage,
    isSubmitting,
    recaptchaRef,
    handleInputChange,
    handleCaptchaChange,
    handleSubmit,
    handleReset,
  };
};
