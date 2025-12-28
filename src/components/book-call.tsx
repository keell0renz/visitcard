import { Calendar } from 'lucide-react';

export function BookCall() {
  return (
    <section className="mb-6">
      <a
        href="https://cal.com/bohdan-agarkov-kz5egw/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-3 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-neutral-800 text-neutral-400 group-hover:text-purple-400 group-hover:bg-neutral-800/80 transition-colors">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-neutral-200 font-medium group-hover:text-white transition-colors">
                Book a Call
              </h3>
              <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">
                Schedule a 30-minute meeting with me
              </p>
            </div>
          </div>
          <div className="text-neutral-600 group-hover:text-purple-400 transition-colors">
            →
          </div>
        </div>
      </a>
    </section>
  );
}
