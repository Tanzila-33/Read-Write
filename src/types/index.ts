export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  coverImage?: string;
  likes: number;
  comments: number;
  createdAt: Date;
}