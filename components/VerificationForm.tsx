import React, { useState, useRef } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface VerificationFormProps {
  email: string;
}

const VerificationForm: React.FC<VerificationFormProps> = ({ email }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      if (value && index < 5) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    // Simulate API verification
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsVerified(true);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Verify your email</h2>
      <p className="text-gray-600 mb-6">
        We've sent a verification code to {email}
      </p>

      <form onSubmit={handleVerify}>
        <div className="flex justify-between mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={el => inputs.current[index] = el}
              type="text"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          ))}
        </div>

        {!isVerified ? (
          <button
            type="submit"
            disabled={isVerifying || code.join('').length !== 6}
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isVerifying ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <span>Verify Email</span>
            )}
          </button>
        ) : (
          <div className="text-center">
            <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto mb-2" />
            <p className="text-gray-900 font-medium">Email verified successfully!</p>
          </div>
        )}

        <p className="mt-4 text-center text-sm text-gray-500">
          Didn't receive the code?{' '}
          <button type="button" className="text-emerald-600 hover:text-emerald-500 font-medium">
            Resend
          </button>
        </p>
      </form>
    </div>
  );
};

export default VerificationForm;