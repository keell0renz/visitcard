import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

interface BackLinkProps {
  href: string;
  text: string;
}

export default function BackLink({ href, text }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-4"
    >
      <FaArrowLeft className="w-4 h-4" />
      <span className="relative">
        {text}
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
      </span>
    </Link>
  );
}
