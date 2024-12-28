import React from 'react';
import { BlogCard } from '../blog/BlogCard';
import type { Post } from '../../types';

export function Feed() {
  // Mock data for demonstration
  const posts: Post[] = [
    {
      id: '1',
      title: 'The Art of Creative Writing',
      content: 'Writing is not just about putting words on paper; its about creating worlds, emotions, and experiences...',
      author: {
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      likes: 124,
      comments: 15,
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'Finding Your Voice as a Writer',
      content: 'Every writer has a unique voice waiting to be discovered.',
      author: {
        id: '2',
        name: 'Michael Chen',
        email: 'michael@example.com',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      likes: 89,
      comments: 8,
      createdAt: new Date(),
    },
  ];

  return (
    <main className="flex-1">
      <div className="space-y-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}