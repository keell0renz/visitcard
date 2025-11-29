import Image from 'next/image';
import { Mail, Github, Send, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <header className="flex flex-col gap-6 mb-8 pt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 ring-1 ring-white/5 bg-neutral-900">
            <Image
              src="/favicon.ico"
              alt="Bohdan Agarkov"
              fill
              className="object-cover opacity-90"
            />
          </div>
          <div>
            <h1 className="text-xl font-medium tracking-tight text-white">
              Bohdan Agarkov{' '}
              <span className="font-normal text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
                @keell0renz
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:bogdan122305@gmail.com"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/keell0renz/"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/keellorenz"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Send className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/bohdan-agarkov-87937a276/"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-2xl">
        <p className="text-base text-neutral-300 leading-relaxed font-light">
          Software Engineer, focused on generative AI and full-stack
          development. I am interested in SWE, AI, economics and sentience.
        </p>
      </div>
    </header>
  );
}
