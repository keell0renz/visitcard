import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import BackLink from 'app/components/back-link';

// Function to get a single blog post
async function getBlogPost(slug: string) {
  const blogDirectory = path.join(process.cwd(), 'content/blog');
  const filePath = path.join(blogDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML with enhanced features
    const processedContent = await remark()
      .use(remarkGfm) // GitHub Flavored Markdown (includes footnotes)
      .use(remarkMath) // Math support
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      title: data.title,
      date: data.date,
      content: contentHtml,
    };
  } catch (error) {
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <BackLink href="/blog" text="Back to blog" />

      <h1 className="text-2xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-2">
        {post.title}
      </h1>

      <div className="text-neutral-400 mb-4">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>

      <div
        className="prose prose-invert prose-neutral max-w-none
          [&_img]:rounded-lg [&_img]:my-4 [&_img]:max-w-full [&_img]:h-auto
          [&_table]:border-collapse [&_table]:w-full [&_th]:border [&_th]:border-neutral-700 [&_th]:p-2 [&_td]:border [&_td]:border-neutral-700 [&_td]:p-2
          [&_blockquote]:border-l-4 [&_blockquote]:border-neutral-700 [&_blockquote]:pl-4 [&_blockquote]:italic
          [&_kbd]:bg-neutral-800 [&_kbd]:px-2 [&_kbd]:py-1 [&_kbd]:rounded [&_kbd]:border [&_kbd]:border-neutral-700
          [&_.footnote]:text-sm [&_.footnote]:text-neutral-400
          [&_.callout]:border-l-4 [&_.callout]:pl-4 [&_.callout]:py-2 [&_.callout]:my-4
          [&_.callout-note]:border-blue-500 [&_.callout-warning]:border-yellow-500 [&_.callout-tip]:border-green-500
          [&_pre]:bg-transparent [&_pre]:border-0 [&_pre]:p-0 [&_pre]:rounded-none
          [&_code]:bg-neutral-800 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded
          [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:px-0 [&_pre_code]:py-0 [&_pre_code]:rounded-none
          [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:tracking-tighter [&_h1]:bg-clip-text [&_h1]:text-transparent [&_h1]:bg-gradient-to-b [&_h1]:from-white [&_h1]:to-neutral-400 [&_h1]:transition-colors
          [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tighter [&_h2]:bg-clip-text [&_h2]:text-transparent [&_h2]:bg-gradient-to-b [&_h2]:from-white [&_h2]:to-neutral-400 [&_h2]:transition-colors
          [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:tracking-tighter [&_h3]:bg-clip-text [&_h3]:text-transparent [&_h3]:bg-gradient-to-b [&_h3]:from-white [&_h3]:to-neutral-400 [&_h3]:transition-colors
          [&_h4]:font-semibold [&_h4]:tracking-tighter [&_h4]:bg-clip-text [&_h4]:text-transparent [&_h4]:bg-gradient-to-b [&_h4]:from-white [&_h4]:to-neutral-400 [&_h4]:transition-colors
          [&_p]:text-base [&_p]:text-justify [&_p]:text-neutral-200
          [&_li]:text-base [&_li]:text-neutral-200
        "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  );
}
