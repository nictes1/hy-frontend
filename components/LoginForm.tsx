import React, { useState } from 'react';
import { Mail, Lock, LogIn, Loader2 } from 'lucide-react';

interface LoginFormProps {
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  onRegisterClick: () => void;
  onResetClick: () => void;
  email: string;
  setEmail: (email: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading,
  onRegisterClick,
  onResetClick,
  email,
  setEmail,
}) => {
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <form onSubmit={onSubmit} className="p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Welcome back</h2>
      
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

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <button
            type="button"
            onClick={onResetClick}
            className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
          >
            Forgot password?
          </button>
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
            <LogIn className="h-5 w-5" />
            <span>Sign in</span>
          </>
        )}
      </button>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onRegisterClick}
          className="text-emerald-600 hover:text-emerald-500 font-medium"
        >
          Sign up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;