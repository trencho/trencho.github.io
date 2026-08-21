import { motion, type Variants } from 'motion/react';
import { headingText } from '@/shared/theme/tokens';

interface SectionHeadingProps {
  children: string;
  darkMode: boolean;
  /** Extra spacing/layout classes; the type scale and colour come from here. */
  className?: string;
  /** Set when the heading should animate in with its section's variants. */
  animated?: boolean;
  variants?: Variants | undefined;
}

/**
 * The `<h2>` every section opens with. The type scale was spelled out
 * identically in eight components, each with its own copy of the theme branch.
 */
const SectionHeading = ({
  children,
  darkMode,
  className = '',
  animated = false,
  variants,
}: SectionHeadingProps) => {
  const classes = `text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${headingText(darkMode)} ${className}`;

  return animated ? (
    // Under exactOptionalPropertyTypes, motion's `variants` prop does not accept
    // an explicit undefined - so it is spread in only when there is one.
    <motion.h2
      className={classes}
      {...(variants === undefined ? {} : { variants })}
    >
      {children}
    </motion.h2>
  ) : (
    <h2 className={classes}>{children}</h2>
  );
};

export default SectionHeading;
