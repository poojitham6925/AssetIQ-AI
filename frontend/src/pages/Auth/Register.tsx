import { ArrowLeft, Eye, EyeOff, UserPlus } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import StatusMessage from "../../components/ui/StatusMessage";
import TextField from "../../components/ui/TextField";
import ThemeToggle from "../../components/ui/ThemeToggle";
import { registerAccount } from "../../lib/authApi";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setErrorMessage("");
    const formData = new FormData(event.currentTarget);
    if (formData.get("password") !== formData.get("confirmPassword")) {
      setPasswordError("Passwords do not match.");
      return;
    }
    setPasswordError("");
    setLoading(true);
    try {
      const result = await registerAccount({
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        password: String(formData.get("password") ?? ""),
      });
      setMessage(result.message);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Registration failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-canvas text-copy">
      <header className="flex h-[76px] items-center justify-between border-b border-border px-5 sm:px-8">
        <Link to="/" className="font-bold tracking-tight text-copy">AssetIQ</Link>
        <ThemeToggle compact />
      </header>
      <main className="mx-auto grid min-h-[calc(100vh-76px)] max-w-6xl items-center gap-14 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="max-w-md">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"><ArrowLeft size={16} /> Back to home</Link>
          <p className="mt-9 text-xs font-bold uppercase tracking-[0.17em] text-accent">Get started</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Create your account</h1>
          <p className="mt-2 leading-6 text-muted">Create your account and personal workspace.</p>
          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <TextField name="name" label="Your name" autoComplete="name" placeholder="Full name" required />
            <TextField name="email" type="email" label="Work email" autoComplete="email" placeholder="you@company.com" required />
            <div className="grid gap-2">
              <label htmlFor="register-password" className="text-sm font-semibold">Password</label>
              <div className="relative">
                <input id="register-password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" minLength={12} required className="min-h-12 w-full rounded-xl border border-border bg-surface px-4 pr-12 text-copy" placeholder="At least 12 characters" />
                <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((value) => !value)} className="absolute inset-y-0 right-2 inline-flex w-10 items-center justify-center text-muted hover:text-copy">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-xs text-muted">Use at least 12 characters. Passwords are stored only as a secure hash.</p>
            </div>
            <TextField name="confirmPassword" type={showPassword ? "text" : "password"} label="Confirm password" autoComplete="new-password" required error={passwordError} />
            <Button type="submit" loading={loading} className="mt-1 w-full"><UserPlus size={17} /> Create account</Button>
          </form>
          {message && <div className="mt-5"><StatusMessage kind="success" title="Check your email">{message}</StatusMessage></div>}
          {errorMessage && <div className="mt-5"><StatusMessage kind="error" title="Unable to create account">{errorMessage}</StatusMessage></div>}
          <p className="mt-7 text-center text-sm text-muted">Already have an account? <Link className="font-semibold text-accent hover:underline" to="/login">Sign in</Link></p>
        </section>
        <aside className="hidden rounded-[2rem] border border-border bg-surface p-10 shadow-[var(--shadow)] lg:block">
          <span className="text-xs font-bold uppercase tracking-[0.17em] text-accent">Workspace-first</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight">Keep asset work clear from the first record.</h2>
          <p className="mt-4 leading-7 text-muted">AssetIQ is being designed for personal workspaces and organization teams, with explicit access controls and transparent maintenance history.</p>
          <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-5 text-sm leading-6 text-accent">
            Each new account receives a personal workspace with owner access.
          </div>
        </aside>
      </main>
    </div>
  );
}
