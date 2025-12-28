export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/5 pt-6 pb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full mt-auto"
    >
      <div>
        <p className="text-base text-white font-medium mb-1">
          Available for new opportunities
        </p>
        <p className="text-xs text-neutral-500 font-light">
          &copy; 2025 Bohdan Agarkov. Based in Amsterdam.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="mailto:bogdan122305@gmail.com"
          className="text-xs font-medium bg-white text-black px-4 py-2 rounded hover:bg-neutral-200 transition-colors"
        >
          Email Me
        </a>
      </div>
    </footer>
  );
}
