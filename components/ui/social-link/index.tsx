import { Email, Github, LinkedIn, Telegram, Twitter } from "./icons";

export default function SocialLink({
  platform,
  href,
}: {
  platform: "twitter" | "github" | "telegram" | "linkedin" | "email";
  href: string;
}) {
  const socialIcons: { [key: string]: JSX.Element } = {
    twitter: <Twitter />,
    github: <Github />,
    telegram: <Telegram />,
    email: <Email />,
    linkedin: <LinkedIn />,
  };

  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center rounded-full p-2 hover:bg-secondary"
      target="_blank"
      aria-label={platform}
    >
      {socialIcons[platform]}
    </a>
  );
}
