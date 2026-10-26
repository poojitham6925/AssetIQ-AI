import { Mail, MessageSquareText } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/landing/Footer";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import StatusMessage from "../../components/ui/StatusMessage";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas text-copy">
      <Navbar />
      <main className="py-16 sm:py-24">
        <Container>
          <SectionTitle
            badge="Contact"
            title="We’re preparing our support channel"
            description="We want to handle your message responsibly. The recipient and data-handling process have not been configured yet."
          />
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-9">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/8 text-accent"><MessageSquareText size={21} /></div>
            <StatusMessage kind="unavailable" title="Contact submissions are not available yet">
              No message will be sent or stored. This form will be enabled only after a recipient and data-handling policy are defined.
            </StatusMessage>
            <form className="mt-7 grid gap-5" aria-describedby="contact-unavailable">
              <p id="contact-unavailable" className="sr-only">Form unavailable. No submissions are sent or stored.</p>
              <label className="grid gap-2 text-sm font-semibold text-copy">
                Name
                <input disabled name="name" autoComplete="name" className="min-h-12 rounded-xl border border-border bg-surface-raised px-4 text-muted" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-copy">
                Email address
                <input disabled name="email" type="email" autoComplete="email" className="min-h-12 rounded-xl border border-border bg-surface-raised px-4 text-muted" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-copy">
                Message
                <textarea disabled name="message" rows={5} className="rounded-xl border border-border bg-surface-raised p-4 text-muted" placeholder="What would you like to ask?" />
              </label>
              <button disabled type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-5 font-semibold text-white opacity-55">
                <Mail size={17} /> Send message
              </button>
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
