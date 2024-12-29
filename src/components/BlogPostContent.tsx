'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category?: string;
  author?: string;
  readTime?: string;
  content?: string;
}

interface Props {
  post: BlogPost;
}

export function BlogPostContent({ post }: Props) {
  return (
    <motion.article 
      className="container mx-auto px-4 py-16 max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600 mb-8">
          {post.date && (
            <time className="mr-4">{post.date}</time>
          )}
          {post.category && (
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {post.category}
            </span>
          )}
        </div>
        {post.image && (
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700">
          {post.content || post.excerpt}
        </p>
      </div>

      {/* Author Section */}
      {post.author && (
        <div className="mt-16 pt-8 border-t">
          <div className="flex items-center">
            <div>
              <h3 className="font-semibold text-gray-900">
                {post.author}
              </h3>
              {post.readTime && (
                <p className="text-gray-600">{post.readTime}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.article>
  );
}
