import SocialLink from '../components/social-link';
import Experience from '../components/experience';
import { FaEnvelope, FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import Image from 'next/image';
import resume from '../config/resume';

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
          <h1 className="text-2xl fading-text">
            Bohdan Agarkov{' '}
            <span className="thermal-highlight">@keell0renz</span>
          </h1>
        </div>
        <div className="flex flex-row gap-4 text-sm">
          <SocialLink
            href="mailto:bogdan122305@gmail.com"
            icon={FaEnvelope}
            size={18}
          />
          {/* <SocialLink
            href="https://x.com/vanderseele"
            icon={SiX}
            size={18}
          /> */}
          <SocialLink
            href="https://github.com/keell0renz/"
            icon={FaGithub}
            size={18}
          />
          <SocialLink
            href="https://t.me/keellorenz"
            icon={FaTelegram}
            size={18}
          />
          <SocialLink
            href="https://www.linkedin.com/in/bohdan-agarkov-87937a276/"
            icon={FaLinkedin}
            size={18}
          />
        </div>
      </div>

      <p className="mb-4 text-justify">
        {`Software Engineer, focused on generative AI and full-stack development. 
        I am interested in SWE, AI, economics and sentience.`}
      </p>

      {/* <p className="mb-4 text-justify"> // Temporarily hid blog
        I also have a{' '}
        <a
          href="/blog"
          className="underline underline-offset-4 hover:text-neutral-200 transition-colors"
        >
          blog
        </a>
        .
      </p> */}

      <Experience experiences={resume.experience} />
    </section>
  );
}
