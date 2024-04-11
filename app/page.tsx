import SocialLink from "@/components/ui/social-link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 max-w-7xl mx-auto relative w-full pt-10 lg:pt-24 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50 min-h-24">
        I love building crazy{" "}
        <span className="bg-clip-text bg-gradient-to-r from-blue-500 via-pink-400 to-red-500">
          stuff
        </span>
        .
      </h1>
      <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[5px] w-2/4 blur-sm" />
      <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-2/4" />
      <div className="bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[1px] w-1/4 blur-sm" />
      <div className="bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      <p className="text-lg text-foreground/60 font-normal text-justify mt-4">
        So maybe we can build something{" "}
        <span className="bg-clip-text bg-gradient-to-r from-red-800 via-pink-600 to-blue-800">
          together
        </span>
        ?
      </p>
      <article className="w-8/12 pt-6 md:pt-16 mx-auto flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
          <div className="flex flex-col md:flex-row justify-start items-center space-x-2 space-y-2 md:space-y-0">
            <h1 className="text-xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-400 hover:to-red-500">
              Bohdan Agarkov
            </h1>
            <p className="text-sm text-muted-foreground font-light">
              [ˈboɦdan ˈaɡarkov]
            </p>
            {/* <a
              className="text-sm text-muted-foreground font-light hover:text-blue-500"
              href="mailto:bogdan122305@gmail.com"
              target="_blank"
            >
              bogdan122305@gmail.com
            </a> */}
            <a
              className="text-sm text-muted-foreground font-light hover:text-blue-500"
              href="https://www.uva.nl/"
              target="_blank"
            >
              @ UvA
            </a>
            <a
              className="text-sm text-muted-foreground font-light hover:text-blue-500"
              href="https://docs.agentql.com/"
              target="_blank"
            >
              @ Tiny Fish Inc.
            </a>
          </div>
          <div className="flex flex-row space-x-1">
            <SocialLink platform="email" href="mailto:bogdan122305@gmail.com" />
            <SocialLink
              platform="twitter"
              href="https://twitter.com/keell0renz"
            />
            <SocialLink
              platform="github"
              href="https://github.com/keell0renz/"
            />
            <SocialLink platform="telegram" href="https://t.me/keellorenz" />
            <SocialLink
              platform="linkedin"
              href="https://www.linkedin.com/in/bohdan-agarkov-87937a276/"
            />
          </div>
        </div>
        <div className="text-md text-neutral-300 pt-4 text-justify">
          Generative AI and full-stack web developer, software development
          intern at{" "}
          <a
            className="hover:text-blue-500"
            href="https://docs.agentql.com/"
            target="_blank"
          >
            Tiny Fish
          </a>
          , business student at Universiteit van Amsterdam.{" "}
          {/*A happy owner of a sweet black cat Felix -- I love you Felix! Just hided you from pig landlords. <3 */}
          . Curious about autonomous AI and AGI.
        </div>
      </article>
      <section className="pt-8 block md:hidden">
        <Image src="/qr.svg" alt="QR Code" width={200} height={200} />
      </section>
    </main>
  );
}
