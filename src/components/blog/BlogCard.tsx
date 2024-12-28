import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import type { Post } from '../../types';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {post.coverImage && (
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-3">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-600">{post.author.name}</span>
        </div>
        
        <h2 className="font-serif text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>
        
        <div className="flex items-center space-x-4 text-gray-500">
          <button className="flex items-center space-x-1 hover:text-[#87CEEB] transition-colors">
            <Heart className="w-5 h-5" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-[#87CEEB] transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>{post.comments}</span>
          </button>
        </div>
      </div>
    </article>
  );
}