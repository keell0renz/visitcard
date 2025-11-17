# Portfolio Blog Starter

This is a porfolio site template complete with a blog.

## Demo

https://portfolio-blog-starter.vercel.app

## Features

- **MDX and Markdown Support:** Write your blog posts and pages in MDX or Markdown.
- **SEO Optimized:** Includes a `sitemap.xml`, `robots.txt`, and JSON-LD schema to improve your site's ranking in search results.
- **RSS Feed:** Your readers can subscribe to your blog via RSS.
- **Dynamic OG Images:** Automatically generate Open Graph images for your blog posts.
- **Syntax Highlighting:** Your code blocks will be beautifully highlighted.
- **Contact Form:** A functional contact form to allow visitors to get in touch.
- **Tailwind v4:** A utility-first CSS framework for rapid UI development.
- **Vercel Speed Insights / Web Analytics:** Monitor your site's performance and traffic.
- **Geist Font:** A modern, open-source font family.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MDX](https://mdxjs.com/)
- [Vercel](https://vercel.com/)

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/solutions/blog&project-name=blog&repository-name=blog)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io/installation) to bootstrap the example:

```bash
pnpm create next-app --example https://github.com/vercel/examples/tree/main/solutions/blog blog
```

Then, run Next.js in development mode:

```bash
pnpm dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/templates) ([Documentation](https://nextjs.org/docs/app/building-your-application/deploying)).

## How to Customize

To customize this template, you'll need to modify the following files:

- **`src/app/page.tsx`:** This is the main page of the portfolio. You can change the text, social media links, and experience section here.
- **`src/config/experience.ts`:** This file contains the data for the experience section. You can add, remove, or modify the entries here.
- **`content/blog/`:** This directory contains the blog posts. You can add new posts by creating new `.md` or `.mdx` files here.
- **`public/`:** This directory contains the static assets, such as images and the `sitemap.xml` file. You can replace the favicon and other images here.
- **`src/app/layout.tsx`:** This file contains the main layout of the site. You can change the title, description, and other metadata here.
