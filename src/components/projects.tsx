import { BrainCircuit, ArrowUpRight, Terminal, Workflow } from 'lucide-react';
import Link from 'next/link';

export function Projects() {
  return (
    <section id="work" className="mb-8 scroll-mt-24">
      <h2 className="text-white font-medium tracking-tight text-lg mb-6">
        Selected Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Featured Project */}
        <div className="group relative md:col-span-2 row-span-2 bg-neutral-900/30 border border-white/5 rounded-lg overflow-hidden hover:bg-neutral-900/50 hover:border-white/10 transition-all duration-500">
          <div className="p-6 h-80 flex flex-col justify-between relative z-20">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-white/5 border border-white/5 rounded-md backdrop-blur-md">
                <BrainCircuit className="text-white w-5 h-5" />
              </div>
              <a
                href="#"
                className="p-2 text-neutral-500 hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white tracking-tight mb-2">
                Cognition Engine
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-light">
                Generative AI model orchestration platform designed for
                high-throughput enterprise applications.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 bg-neutral-900 border border-white/5 px-2 py-1 rounded">
                  Python
                </span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 bg-neutral-900 border border-white/5 px-2 py-1 rounded">
                  Rust
                </span>
              </div>
            </div>
          </div>
          {/* Subtle Glow */}
          <div className="absolute right-0 top-0 w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-neutral-800/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Secondary Project 1 */}
        <div className="group relative bg-neutral-900/30 border border-white/5 rounded-lg overflow-hidden hover:bg-neutral-900/50 hover:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[160px]">
          <div className="p-5 h-full flex flex-col justify-between">
            <Terminal className="text-neutral-300 w-5 h-5 mb-4" />
            <div>
              <h3 className="text-base font-medium text-white tracking-tight mb-1">
                Synthetix
              </h3>
              <p className="text-neutral-500 text-xs font-light">
                Data synthesis CLI tool.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Project 2 */}
        <div className="group relative bg-neutral-900/30 border border-white/5 rounded-lg overflow-hidden hover:bg-neutral-900/50 hover:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[160px]">
          <div className="p-5 h-full flex flex-col justify-between">
            <Workflow className="text-neutral-300 w-5 h-5 mb-4" />
            <div>
              <h3 className="text-base font-medium text-white tracking-tight mb-1">
                Flow State
              </h3>
              <p className="text-neutral-500 text-xs font-light">
                Focus management interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
