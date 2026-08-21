import { AiOutlineGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { primaryButton } from '@/shared/theme/tokens';

interface ProjectLinkProps {
  label: string;
  url: string;
  projectTitle: string;
  darkMode: boolean;
}

/** A repository link, as opposed to a live deployment or any other destination. */
const isRepository = (url: string): boolean => {
  try {
    return new URL(url).hostname.replace(/^www\./, '') === 'github.com';
  } catch {
    return false;
  }
};

/**
 * One labelled link on a project card.
 *
 * Every link used to render a GitHub icon regardless of where it pointed, which
 * was invisible while all three projects linked only to repositories. Adding a
 * live-site link made it wrong on screen, so the icon is chosen from the URL.
 */
const ProjectLink = ({
  label,
  url,
  projectTitle,
  darkMode,
}: ProjectLinkProps) => {
  const Icon = isRepository(url) ? AiOutlineGithub : FiExternalLink;

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 select-none ${primaryButton(darkMode)}`}
      aria-label={`${projectTitle} – ${label}`}
    >
      <span>{label}</span>
      <Icon className='text-xl' aria-hidden='true' />
    </a>
  );
};

export default ProjectLink;
