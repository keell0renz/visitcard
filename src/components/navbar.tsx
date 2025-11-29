import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-white/5 bg-black/50">
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-end">
        <div className="flex items-center gap-6">
          <Link
            href="#experience"
            className="text-xs font-medium hover:text-white transition-colors text-neutral-400"
          >
            Experience
          </Link>
          <Link
            href="#work"
            className="text-xs font-medium hover:text-white transition-colors text-neutral-400"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="text-xs font-medium hover:text-white transition-colors text-neutral-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
