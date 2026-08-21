import { filterChip } from '@/shared/theme/tokens';

interface SkillFilterButtonProps {
  label: string;
  active: boolean;
  darkMode: boolean;
  onSelect: () => void;
}

/**
 * One category tab in the Skills filter row.
 *
 * The "All" tab and the seven category tabs used to be two separate JSX blocks
 * carrying the same ten-line class expression verbatim, so a style change had to
 * be made twice and the two could silently drift apart. They are the same
 * control; only the label differs.
 */
const SkillFilterButton = ({
  label,
  active,
  darkMode,
  onSelect,
}: SkillFilterButtonProps) => (
  <button
    onClick={onSelect}
    role='tab'
    aria-selected={active}
    aria-controls={`skills-${label}`}
    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${filterChip(active, darkMode)}`}
  >
    {label}
  </button>
);

export default SkillFilterButton;
