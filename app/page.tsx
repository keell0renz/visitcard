
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
    </section>
  );
}
