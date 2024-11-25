import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">Hello there! I&apos;m Bohdan</Heading>
      <Paragraph className="max-w-2xl mt-4">
        I&apos;m a Generative AI and full-stack web developer, currently
        pursuing business studies at the Universiteit van Amsterdam.
      </Paragraph>
      <Paragraph className="max-w-2xl mt-4">
        In summer 2024 I have went through an internship at AgentQL, a Silicon
        Valley startup led by ex-Meta employees, developing advanced AI-based
        web scraping and automation software.
      </Paragraph>
      <Paragraph className="max-w-2xl mt-4">
        Then, I have worked for MultiOn, a Silicon Valley startup developing
        autonomous AI agents which navigate the web. There I have earned my
        first $1000.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
