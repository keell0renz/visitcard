import llmos from "public/images/llm-os.png";
import langcode from "public/images/langcode.png";
import multionpydantic from "public/images/multionpydantic.png";
import shortlink from "public/images/shortlink.png";
import omniscient from "public/images/omniscient.png";

export const products = [
  {
    href: "https://github.com/keell0renz/llm-os",
    title: "LLM-OS",
    description:
      "A local code-executing autonomous AI agent, which can take actions and interact with your computer.",
    thumbnail: llmos,
    images: [llmos],
    stack: ["LangGraph", "LangCode", "Chainlit", "Claude"],
    slug: "llm-os",
    pinned: true,
  },
  {
    href: "https://github.com/keell0renz/langcode",
    title: "LangCode",
    description:
      "Python library which provides easy interface for local interactive Python execution environment, designed for AI agents.",
    thumbnail: langcode,
    images: [langcode],
    stack: ["Python", "IPykernel", "Jupyter Client"],
    slug: "langcode",
    pinned: true,
  },
  {
    href: "https://github.com/keell0renz/multion-pydantic",
    title: "MultiOn-Pydantic",
    description:
      "A wrapper around MultiOn API which allows user to define Pydantic schemas and receive filled objects with data, just like in the Instructor library.",
    thumbnail: multionpydantic,
    images: [multionpydantic],
    stack: ["Python", "Pydantic", "MultiOn"],
    slug: "multion-pydantic",
    pinned: true,
  },
  {
    href: "https://github.com/keell0renz/shortlink",
    title: "Shortlink",
    description:
      "A simple URL shortener built with Python and FastAPI. My first back-end microservice, created when I was learning principles of back-end development.",
    thumbnail: shortlink,
    images: [shortlink],
    stack: ["Python", "FastAPI", "Docker"],
    slug: "shortlink",
  },
  {
    href: "https://github.com/keell0renz/omniscient",
    title: "Omniscient",
    description:
      "My first startup which I did in 2023, AI-powered EdTech platform for self-learners, but failed and learned a lot. After that I decided to get an internship at an actual startup and learn from experienced people.",
    thumbnail: omniscient,
    images: [omniscient],
    stack: ["Next.js", "Prisma", "React", "Tailwind", "Clerk"],
    slug: "omniscient",
  },
];
