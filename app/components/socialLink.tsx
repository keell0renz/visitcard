
interface SocialLinkProps {
    href: string
    title: string
}

export default function SocialLink(props: SocialLinkProps) {
    return (
        <a
        href="mailto:bogdan122305@gmail.com"
        className="text-neutral-400 hover:text-neutral-300"
        target="_blank"
      >
        email
      </a>
    )
}