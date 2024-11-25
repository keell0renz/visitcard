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
    content: (
      <div>
        <p>
          This agent, built with LangCode and LangGraph, can execute Python code
          in a stateful Jupyter Notebook with full access to your system, The
          Internet, and output images generated inside Jupyter environment (ex.
          Matplotlib plot image).
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/keell0renz/langcode",
    title: "LangCode",
    description:
      "Python library which provides easy interface for local interactive Python execution environment, designed for AI agents.",
    thumbnail: langcode,
    images: [langcode],
    stack: ["Python", "IPykernel", "Jupyter Client"],
    content: (
      <div>
        <p>
          LangCode is a library which provides easy-to-use and reliable
          interface to a Python code-execution environment, such as Jupyter.
          LangCode can be used to build autonomous code-executing agents.
          LangCode supports text, image and code output of Jupyter. Also remote
          connection feature and jupyter server launcher is planned for the
          future versions.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/keell0renz/multion-pydantic",
    title: "MultiOn-Pydantic",
    description:
      "A wrapper around MultiOn API which allows user to define Pydantic schemas and receive filled objects with data, just like in the Instructor library.",
    thumbnail: multionpydantic,
    images: [multionpydantic],
    stack: ["Python", "Pydantic", "MultiOn"],
    content: (
      <div>
        <p>
          In this project, I created a proof-of-concept for using Pydantic
          models to structure and validate web data extraction through the
          MultiOn API. The library adds a new retrieve_with_model method that
          accepts Pydantic models as queries, enabling more robust and type-safe
          data extraction from websites.
        </p>
        <p>
          This approach allows developers to define structured data schemas
          using Pydantic and receive properly validated data objects, similar to
          how Instructor works with OpenAI. The library handles the
          communication with MultiOn&apos;s API while providing a cleaner, more
          maintainable interface for extracting specific data fields from web
          pages.
        </p>
      </div>
    ),
  },
];
