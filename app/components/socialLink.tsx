import { IconType } from 'react-icons';

interface SocialLinkProps {
  href: string;
  icon: IconType;
  size?: number;
}

export default function SocialLink({ href, icon: Icon, size = 16 }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="text-neutral-400 hover:text-neutral-300 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={size} />
    </a>
  );
}
