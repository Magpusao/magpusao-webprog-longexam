import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import Button from './Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const AuthModal = () => {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  const [isSignIn, setIsSignIn] = useState(true);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    login({ email: 'user@example.com' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-3xl border-2 border-nu-blue bg-white p-8 shadow-2xl">
        <button
          onClick={closeAuthModal}
          className="absolute right-4 top-4 text-zinc-400 transition hover:text-nu-blue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold tracking-tight text-nu-blue">
          {isSignIn ? 'Log In to Continue' : 'Create an Account'}
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          {isSignIn
            ? 'Access your store account to add items to your cart.'
            : 'Sign up for faster checkout and order updates.'}
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {!isSignIn && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-zinc-700">First Name</label>
                <input type="text" placeholder="First name" className={inputClasses} required />
              </div>
              <div>
                <label className="text-xs font-medium text-zinc-700">Last Name</label>
                <input type="text" placeholder="Last name" className={inputClasses} required />
              </div>
            </div>
          )}
          <div>
            <label className="text-xs font-medium text-zinc-700">Email Address</label>
            <input type="email" placeholder="student@email.com" className={inputClasses} required />
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-700">Password</label>
            <input type="password" placeholder="Password" className={inputClasses} required />
          </div>

          <Button type="submit" variant="primary" className={actionButtonClassName}>
            {isSignIn ? 'Log In' : 'Sign Up'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-zinc-600">
          {isSignIn ? (
            <p>
              No account yet?{' '}
              <button
                onClick={() => setIsSignIn(false)}
                className="font-bold text-nu-blue underline decoration-nu-gold decoration-2 underline-offset-4"
              >
                Create one
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                onClick={() => setIsSignIn(true)}
                className="font-bold text-nu-blue underline decoration-nu-gold decoration-2 underline-offset-4"
              >
                Log In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
