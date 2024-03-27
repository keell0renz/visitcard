import SocialLink from "@/components/ui/social-link";

export default function Home() {
  return (
    <main>
      <div className="p-4 max-w-7xl mx-auto relative w-full pt-20 md:pt-0 flex flex-col justify-center items-center h-[60vh]">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50 min-h-24">
          I love building crazy{" "}
          <span className="bg-clip-text bg-gradient-to-r from-blue-500 via-pink-400 to-red-500">
            shit
          </span>
          .
        </h1>
        <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[5px] w-2/4 blur-sm" />
        <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-2/4" />
        <div className="bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[1px] w-1/4 blur-sm" />
        <div className="bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <p className="text-lg text-foreground/60 font-normal text-justify mt-4">
          So maybe we can build some shit{" "}
          <span className="bg-clip-text bg-gradient-to-r from-red-800 via-pink-600 to-blue-800">
            together
          </span>
          ?
        </p>
        <div className="mt-8 grid grid-cols-4 gap-8">
          <SocialLink
            platform="twitter"
            href="https://twitter.com/keell0renz"
            name="Twitter"
          />
          <SocialLink
            platform="github"
            href="https://github.com/keell0renz/"
            name="GitHub"
          />
          <SocialLink
            platform="telegram"
            href="https://t.me/keellorenz"
            name="Telegram"
          />
          <SocialLink
            platform="linkedin"
            href="https://www.linkedin.com/in/bohdan-agarkov-87937a276/"
            name="LinkedIn"
          />
        </div>
      </div>
    </main>
  );
}
