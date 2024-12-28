import React from 'react';
import { Home, PenSquare, User, BookOpen, Settings } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Sidebar() {
  const navigate = useNavigate();
  const menuItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: BookOpen, label: 'My Posts', path: '/dashboard/posts' },
    { icon: User, label: 'Profile', path: '/dashboard/profile' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="w-64 shrink-0 hidden md:block">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <Button
          className="w-full mb-6 flex items-center justify-center gap-2"
          onClick={() => navigate('/new-story')}
        >
          <PenSquare className="w-4 h-4" />
          New Post
        </Button>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-50 hover:text-primary transition-colors"
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}