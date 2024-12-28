import React from 'react';
import { X } from 'lucide-react';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
}

export function AuthModal({ isOpen, onClose, type }: AuthModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="font-serif text-2xl font-semibold">
            {type === 'login' ? 'Welcome Back' : 'Join Read & Write'}
          </h2>
          <p className="text-gray-600 mt-2">
            {type === 'login'
              ? 'Sign in to continue your writing journey'
              : 'Start your writing journey today'}
          </p>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center space-x-2 border rounded-lg p-2.5 hover:bg-gray-50 transition-colors">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Continue with Google</span>
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {type === 'login' ? <LoginForm /> : <SignupForm />}

          <p className="text-center text-sm text-gray-600">
            {type === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => {}}
              className="text-primary hover:underline font-medium"
            >
              {type === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}