'use client';

import { motion } from 'framer-motion';

interface CareerPost {
  id: number;
  title: string;
  shortText?: string;
  bigText?: string;
}

interface Props {
  post: CareerPost;
}

export function CareerPostContent({ post }: Props) {
  return (
    <motion.article 
      className="container min-h-screen mx-auto px-4 py-16 max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      </div>

      {/* Content Section */}
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: String(post.bigText) }} />
      </div>

    </motion.article>
  );
}
