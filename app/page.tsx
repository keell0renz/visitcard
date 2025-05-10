import SocialLink from "./components/socialLink";
import { FaEnvelope, FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Image
            src="/favicon.ico"
            alt="Bohdan Agarkov"
            width={36}
            height={36}
            className="rounded-full"
          />
          <h1 className="text-2xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Bohdan Agarkov{' '}
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-red-600 font-normal">
              @keell0renz
            </span>
          </h1>
        </div>
        <div className="flex flex-row gap-4 text-sm">
          <SocialLink href="mailto:bogdan122305@gmail.com" icon={FaEnvelope} size={18} />
          <SocialLink href="https://twitter.com/keell0renz" icon={SiX} size={18} />
          <SocialLink href="https://github.com/keell0renz/" icon={FaGithub} size={18} />
          <SocialLink href="https://t.me/keellorenz" icon={FaTelegram} size={18} />
          <SocialLink href="https://www.linkedin.com/in/bohdan-agarkov-87937a276/" icon={FaLinkedin} size={18} />
        </div>
      </div>

      <p className="mb-4 text-justify">
        {`Software engineer at `}
        <a 
          href="https://mrge.io" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-pink-500 to-red-600 hover:opacity-80 transition-opacity"
        >
          mrge (YC X25)
        </a>
        {`, focused on generative AI and full-stack development. 
        I am interested in SWE, AI, economics and sentience.`}
      </p>
    </section>
  );
}
