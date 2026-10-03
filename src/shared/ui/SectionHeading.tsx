import { m, type Variants } from 'motion/react';
import { headingText } from '@/shared/theme/tokens';

interface SectionHeadingProps {
  children: string;
  /** Lets the enclosing `<section>` reference the heading with `aria-labelledby`. */
  id?: string;
  /** Extra spacing/layout classes; the type scale and colour come from here. */
  className?: string;
  /** Set when the heading should animate in with its section's variants. */
  animated?: boolean;
  variants?: Variants | undefined;
}

/** The `<h2>` every section opens with. */
const SectionHeading = ({
  children,
  id,
  className = '',
  animated = false,
  variants,
}: SectionHeadingProps) => {
  const classes = `text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${headingText} ${className}`;
  // Under exactOptionalPropertyTypes neither prop accepts an explicit undefined,
  // so each is spread in only when present.
  const idProp = id === undefined ? {} : { id };

  return animated ? (
    <m.h2
      className={classes}
      {...idProp}
      {...(variants === undefined ? {} : { variants })}
    >
      {children}
    </m.h2>
  ) : (
    <h2 className={classes} {...idProp}>
      {children}
    </h2>
  );
};

export default SectionHeading;
