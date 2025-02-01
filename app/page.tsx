import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
        Bohdan Agarkov{" "}
        <span className="bg-clip-text bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 font-normal">
          @keell0renz
        </span>
      </h1>
      <div className="flex flex-row gap-4 mb-2 text-sm">
        <a
          href="mailto:bogdan122305@gmail.com"
          className="text-neutral-400 hover:text-neutral-300"
          target="_blank"
        >
          email
        </a>
        <a
          href="https://twitter.com/keell0renz"
          className="text-neutral-400 hover:text-neutral-300"
          target="_blank"
        >
          twitter/x
        </a>
        <a
          href="https://github.com/keell0renz/"
          className="text-neutral-400 hover:text-neutral-300"
          target="_blank"
        >
          github
        </a>
        <a
          href="https://t.me/keellorenz"
          className="text-neutral-400 hover:text-neutral-300"
          target="_blank"
        >
          telegram
        </a>
        <a
          href="https://www.linkedin.com/in/bohdan-agarkov-87937a276/"
          className="text-neutral-400 hover:text-neutral-300"
          target="_blank"
        >
          linkedin
        </a>
      </div>
      <div className="flex flex-row gap-2 mb-4">
        <a
          href="https://www.uva.nl/"
          className="text-neutral-400 text-sm text-justify hover:text-blue-500 hover:underline"
          target="_blank"
        >
          @ UvA
        </a>
      </div>
      <p className="mb-4 text-justify">
        {`Software engineer focused on AI/ML and full-stack development. 
          I am interested in SWE, AI, economics, social technology and sentience.`}
      </p>
      {/* <div className="mb-4 text-justify">
        <div>
          <a
            className="flex flex-col space-y-1 mb-4"
            href="https://multion.ai"
            target="_blank"
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-400 w-[170px] whitespace-nowrap tabular-nums">
                Aug 2024 — Sep 2024
              </p>
              <p className="text-neutral-100 tracking-tight hover:text-neutral-300">
                Software Engineer (contract) @ MultiOn
              </p>
            </div>
          </a>
          <a
            className="flex flex-col space-y-1 mb-4"
            href="https://agentql.com"
            target="_blank"
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-400 w-[170px] whitespace-nowrap tabular-nums">
                May 2024 — Aug 2024
              </p>
              <p className="text-neutral-100 hover:text-neutral-300">
                Software Engineering Intern @ Tiny Fish
              </p>
            </div>
          </a>
        </div>
      </div> */}
    </section>
  );
}
