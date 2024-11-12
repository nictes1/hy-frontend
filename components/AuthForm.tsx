import React, { useState } from 'react';
import { Mail, Lock, ChevronRight, Loader2 } from 'lucide-react';

interface AuthFormProps {
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  email: string;
  setEmail: (email: string) => void;
  onLoginClick: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  isLoading,
  email,
  setEmail,
  onLoginClick,
}) => {
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={onSubmit} className="p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create your account</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            <span>Continue</span>
            <ChevronRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onLoginClick}
          className="text-emerald-600 hover:text-emerald-500 font-medium"
        >
          Sign in
        </button>
      </p>
    </form>
  );
};

export default AuthForm;