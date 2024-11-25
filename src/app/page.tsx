import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">Hi! I&apos;m Bohdan</Heading>
      <Paragraph className="max-w-2xl mt-4 text-justify">
        I&apos;m a Generative AI and full-stack web developer, currently
        pursuing business studies at the{" "}
        <a
          href="https://www.uva.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          University of Amsterdam
        </a>
        .
      </Paragraph>
      <Paragraph className="max-w-2xl mt-4 text-justify">
        In summer 2024 I have went through an internship at{" "}
        <a
          href="https://agentql.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Tiny Fish
        </a>
        , a Silicon Valley startup led by ex-Meta employees, developing advanced
        AI-based web scraping and automation software.
      </Paragraph>
      <Paragraph className="max-w-2xl mt-4 text-justify">
        Then, I have worked for{" "}
        <a
          href="https://multion.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          MultiOn
        </a>
        , a Silicon Valley startup developing autonomous AI agents which
        navigate the web. There I have earned my first $1000.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-10 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
    </Container>
  );
}
