import llmos from "public/images/llm-os.png";
import langcode from "public/images/langcode.png";
import multionpydantic from "public/images/multionpydantic.png";

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
];
