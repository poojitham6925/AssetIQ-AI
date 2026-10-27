import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Button from "../../components/ui/Button";
import StatusMessage from "../../components/ui/StatusMessage";
import { verifyEmail } from "../../lib/authApi";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleVerify() {
    setLoading(true);
    setMessage("");
    setErrorMessage("");
    try {
      const result = await verifyEmail(token);
      setMessage(result.message);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Email verification failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-5 text-copy">
      <section className="w-full max-w-md rounded-3xl border border-border bg-surface p-8 shadow-[var(--shadow)]">
        <p className="text-xs font-bold uppercase tracking-[0.17em] text-accent">Verify email</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Finish creating your account</h1>
        {!message && !errorMessage && (
          <>
            <p className="mt-3 leading-6 text-muted">Confirm your email address to enable sign-in.</p>
            <Button className="mt-6 w-full" loading={loading} disabled={!token} onClick={handleVerify}>
              Verify email
            </Button>
          </>
        )}
        {message && <div className="mt-5"><StatusMessage kind="success" title="Email verified">{message}</StatusMessage></div>}
        {errorMessage && <div className="mt-5"><StatusMessage kind="error" title="Verification failed">{errorMessage}</StatusMessage></div>}
        {(message || errorMessage) && (
          <Link className="mt-6 block text-center text-sm font-semibold text-accent hover:underline" to="/login">
            Continue to sign in
          </Link>
        )}
      </section>
    </main>
  );
}
