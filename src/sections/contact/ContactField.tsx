import type React from 'react';
import { m } from 'motion/react';
import { fadeInUp } from '@/shared/utils/animationVariants';
import { bodyText, inputField } from '@/shared/theme/tokens';

/** Within this many characters of `maxLength`, the counter starts announcing itself. */
const ANNOUNCE_REMAINING = 200;

interface ContactFieldProps {
  id: 'name' | 'email' | 'message';
  label: string;
  icon: React.ReactNode;
  value: string;
  error: string | undefined;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: string;
  /** Renders a textarea with a character counter instead of an input. */
  maxLength?: number;
}

/** A labelled form control with its error message, wired for screen readers. */
const ContactField = ({
  id,
  label,
  icon,
  value,
  error,
  onChange,
  type = 'text',
  maxLength,
}: ContactFieldProps) => {
  const control = {
    id,
    name: id,
    value,
    onChange,
    required: true,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${id}-error` : undefined,
  };
  const controlClasses = `w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${inputField(Boolean(error))}`;
  const remaining = maxLength === undefined ? 0 : maxLength - value.length;

  return (
    <m.div className='mb-4 sm:mb-6' variants={fadeInUp}>
      <label
        htmlFor={id}
        className={`flex items-center text-sm sm:text-base font-semibold mb-2 ${bodyText}`}
      >
        {icon}
        {label}
      </label>
      {maxLength === undefined ? (
        <input type={type} className={controlClasses} {...control} />
      ) : (
        <textarea
          maxLength={maxLength}
          className={`${controlClasses} h-24 sm:h-32`}
          {...control}
        />
      )}
      <div className='mt-1 flex items-center justify-between gap-2'>
        {error ? (
          <p id={`${id}-error`} className='text-red-500 text-sm' role='alert'>
            {error}
          </p>
        ) : (
          <span />
        )}
        {maxLength !== undefined && (
          <>
            <span
              className='text-xs text-gray-500 dark:text-gray-300'
              aria-hidden='true'
            >
              {value.length}/{maxLength}
            </span>
            {/* Announced only near the limit, not on every keystroke. */}
            <span className='sr-only' aria-live='polite'>
              {remaining <= ANNOUNCE_REMAINING
                ? `${remaining} characters left`
                : ''}
            </span>
          </>
        )}
      </div>
    </m.div>
  );
};

export default ContactField;
