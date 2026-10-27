import { ArrowLeft, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/common/Container";
import TextField from "../../components/ui/TextField";
import Button from "../../components/ui/Button";
import StatusMessage from "../../components/ui/StatusMessage";
import ThemeToggle from "../../components/ui/ThemeToggle";
import { loginAccount } from "../../lib/authApi";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [recoveryMessage, setRecoveryMessage] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    try {
      await loginAccount({
        email: String(formData.get("email") ?? ""),
        password: String(formData.get("password") ?? ""),
      });
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Sign-in failed.");
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
      <main className="grid min-h-[calc(100vh-76px)] lg:grid-cols-2">
        <section className="flex items-center justify-center px-5 py-12 sm:px-10">
          <div className="w-full max-w-md">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"><ArrowLeft size={16} /> Back to home</Link>
            <p className="mt-9 text-xs font-bold uppercase tracking-[0.17em] text-accent">Welcome back</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight">Sign in to AssetIQ</h1>
            <p className="mt-2 leading-6 text-muted">Sign in to access your AssetIQ workspace.</p>
            <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
              <TextField name="email" type="email" label="Email address" placeholder="you@company.com" autoComplete="email" required />
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-semibold">Password</label>
                  <button type="button" onClick={() => setRecoveryMessage(true)} className="text-xs font-semibold text-accent hover:underline">Forgot password?</button>
                </div>
                <div className="relative">
                  <input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required minLength={12} className="min-h-12 w-full rounded-xl border border-border bg-surface px-4 pr-12 text-copy placeholder:text-muted/70" placeholder="Enter your password" />
                  <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((value) => !value)} className="absolute inset-y-0 right-2 inline-flex w-10 items-center justify-center text-muted hover:text-copy">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <Button type="submit" loading={loading} className="mt-1 w-full">Continue</Button>
            </form>
            {errorMessage && <div className="mt-5"><StatusMessage kind="error" title="Unable to sign in">{errorMessage}</StatusMessage></div>}
            {recoveryMessage && <div className="mt-4"><StatusMessage kind="unavailable" title="Password recovery is not connected">No reset email was sent. Account recovery will be available after email delivery is configured.</StatusMessage></div>}
            <p className="mt-7 text-center text-sm text-muted">New to AssetIQ? <Link className="font-semibold text-accent hover:underline" to="/register">Create an account</Link></p>
          </div>
        </section>
        <aside className="relative hidden overflow-hidden bg-[#242052] px-12 py-16 text-white lg:flex lg:items-end">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#9f91ff]/20 blur-3xl" />
          <Container className="relative max-w-xl !px-0">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10"><ShieldCheck size={23} /></span>
            <h2 className="mt-7 text-4xl font-semibold leading-tight">A thoughtful home for your asset operations.</h2>
            <p className="mt-4 max-w-lg leading-7 text-white/70">Secure, verified access to your asset operations workspace.</p>
          </Container>
        </aside>
      </main>
    </div>
  );
}
