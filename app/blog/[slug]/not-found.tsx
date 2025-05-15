import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <section>
      <Link
        href="/blog"
        className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-4"
      >
        <FaArrowLeft className="w-4 h-4" />
        <span className="relative">
          Back to essays
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
        </span>
      </Link>

      <h1 className="text-2xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-2">
        Essay not found
      </h1>

      <p className="text-neutral-400">
        The essay you're looking for doesn't exist or has been removed.
      </p>
    </section>
  );
}
