import type React from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/shared/utils/animationVariants';
import { bodyText, inputField } from '@/shared/theme/tokens';

interface ContactFieldProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  type: string;
  value: string;
  error: string | undefined;
  darkMode: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// The name and email inputs share the same label + control + error structure and a11y
// wiring; extracting them keeps that contract in one place. The message textarea stays
// inline in the form — its error row shares space with a character counter, so it is a
// genuinely different layout, not the same block.
const ContactField = ({
  id,
  label,
  icon,
  type,
  value,
  error,
  darkMode,
  onChange,
}: ContactFieldProps) => (
  <motion.div className='mb-4 sm:mb-6' variants={fadeInUp}>
    <label
      htmlFor={id}
      className={`block text-sm sm:text-base font-semibold mb-2 ${bodyText(darkMode)}`}
    >
      {icon}
      {label}
    </label>
    <input
      id={id}
      type={type}
      name={id}
      value={value}
      onChange={onChange}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${inputField(darkMode, Boolean(error))}`}
      required
    />
    {error && (
      <p id={`${id}-error`} className='text-red-500 text-sm mt-1' role='alert'>
        {error}
      </p>
    )}
  </motion.div>
);

export default ContactField;
