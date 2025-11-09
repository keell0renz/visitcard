import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { FaFileAlt, FaArrowLeft } from 'react-icons/fa';
import BackLink from 'src/components/back-link';

// Define the type for our blog post metadata
type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

// Function to get all blog posts
async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDirectory = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });

  // Sort posts by date in descending order
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BackLink href="/" text="Back to main" />

      <h1 className="text-2xl fading-text mb-4">Blog</h1>
      <div className="space-y-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex items-center gap-2 text-neutral-200 hover:text-white transition-colors"
          >
            <FaFileAlt className="w-4 h-4" />
            <span className="relative">
              {post.title}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
