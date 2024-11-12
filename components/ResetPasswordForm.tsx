import React from 'react';
import { Mail, ArrowLeft, Loader2 } from 'lucide-react';

interface ResetPasswordFormProps {
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  email: string;
  setEmail: (email: string) => void;
  onBackToLogin: () => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  onSubmit,
  isLoading,
  email,
  setEmail,
  onBackToLogin,
}) => {
  return (
    <form onSubmit={onSubmit} className="p-8">
      <button
        type="button"
        onClick={onBackToLogin}
        className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to login
      </button>

      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Reset password</h2>
      <p className="text-gray-600 mb-6">
        Enter your email address and we'll send you instructions to reset your password.
      </p>

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
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <span>Send reset instructions</span>
        )}
      </button>
    </form>
  );
};

export default ResetPasswordForm;