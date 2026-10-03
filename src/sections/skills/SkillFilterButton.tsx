import { filterChip, focusRing } from '@/shared/theme/tokens';

interface SkillFilterButtonProps {
  label: string;
  active: boolean;
  onSelect: () => void;
}

/**
 * One category toggle in the Skills filter row. A pressed toggle rather than a
 * tab: the row filters one grid, so there are no tab panels to point at.
 */
const SkillFilterButton = ({
  label,
  active,
  onSelect,
}: SkillFilterButtonProps) => (
  <button
    type='button'
    onClick={onSelect}
    aria-pressed={active}
    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer ${focusRing} ${filterChip(active)}`}
  >
    {label}
  </button>
);

export default SkillFilterButton;
