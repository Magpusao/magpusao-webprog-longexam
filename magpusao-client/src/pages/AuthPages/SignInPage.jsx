import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import InputField from '../../components/InputField';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-nu-blue sm:text-4xl">Log In</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Access your store account to review orders, saved items, and pickup details.
      </p>

      <form className="mt-8 space-y-5">
        <InputField
          label="Email Address"
          id="signin-email"
          type="email"
          placeholder="student@email.com"
          autoComplete="email"
          required
        />

        <InputField
          label="Password"
          id="signin-password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          helpText="It must be a combination of minimum 8 letters, numbers, and symbols."
          required
        />

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-600 cursor-pointer">
            <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 accent-nu-blue" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-nu-blue transition hover:text-nu-gold">
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Log In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log In with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t-2 border-nu-blue pt-8 text-center sm:text-left">
        <p className="text-sm text-zinc-600">
          No account yet?{' '}
          <Link 
            to="/auth/signup" 
            className="inline-flex items-center gap-1 font-bold text-nu-blue underline decoration-nu-gold decoration-2 underline-offset-4 transition-colors hover:text-nu-gold"
          >
            Create an account
            <span className="text-lg">→</span>
          </Link>
        </p>
        <div className="mt-6">
          <Link 
            to="/" 
            className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-nu-blue transition-colors"
          >
            ← Back to Store
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
