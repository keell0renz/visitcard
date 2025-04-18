interface SocialLinkProps {
  href: string;
  title: string;
}

export default function SocialLink(props: SocialLinkProps) {
  return (
    <a
      href={props.href}
      className="text-neutral-400 hover:text-neutral-300"
      target="_blank"
    >
      {props.title}
    </a>
  );
}
