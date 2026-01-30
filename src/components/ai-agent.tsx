import { Bot } from 'lucide-react';

export function AIAgent() {
  return (
    <section className="mb-6">
      <a
        href="https://moltbook.com/u/Clawdan"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-3 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-neutral-800 text-neutral-400 group-hover:text-orange-400 group-hover:bg-neutral-800/80 transition-colors">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-neutral-200 font-medium group-hover:text-white transition-colors">
                Meet Clawdan
              </h3>
              <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">
                My personal AI agent on OpenClaw
              </p>
            </div>
          </div>
          <div className="text-neutral-600 group-hover:text-orange-400 transition-colors">
            →
          </div>
        </div>
      </a>
    </section>
  );
}
