import React, { useState } from 'react';
import AuthForm from './AuthForm';
import LoginForm from './LoginForm';
import VerificationForm from './VerificationForm';
import ResetPasswordForm from './ResetPasswordForm';

type AuthStep = 'login' | 'register' | 'verify' | 'reset-password';

interface AuthFlowProps {
  onAuthenticated: () => void;
}

const AuthFlow: React.FC<AuthFlowProps> = ({ onAuthenticated }) => {
  const [step, setStep] = useState<AuthStep>('login');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    onAuthenticated();
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStep('verify');
    setIsLoading(false);
  };

  const handleResetRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    // Handle password reset request
  };

  const renderStep = () => {
    switch (step) {
      case 'login':
        return (
          <LoginForm
            onSubmit={handleLogin}
            isLoading={isLoading}
            onRegisterClick={() => setStep('register')}
            onResetClick={() => setStep('reset-password')}
            email={email}
            setEmail={setEmail}
          />
        );
      case 'register':
        return (
          <AuthForm
            onSubmit={handleRegister}
            isLoading={isLoading}
            email={email}
            setEmail={setEmail}
            onLoginClick={() => setStep('login')}
          />
        );
      case 'verify':
        return (
          <VerificationForm
            email={email}
          />
        );
      case 'reset-password':
        return (
          <ResetPasswordForm
            onSubmit={handleResetRequest}
            isLoading={isLoading}
            email={email}
            setEmail={setEmail}
            onBackToLogin={() => setStep('login')}
          />
        );
    }
  };

  return renderStep();
};

export default AuthFlow;