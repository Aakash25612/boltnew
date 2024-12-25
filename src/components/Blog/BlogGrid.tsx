import React from 'react';
import { BlogCard } from './BlogCard';
import { BLOG_POSTS } from '../../utils/constants';

export function BlogGrid() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
}