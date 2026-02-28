import { motion } from "framer-motion";

const cancellationRules = [
  {
    title: "Advance Notice",
    detail:
      "Submit cancellation requests at least 48 hours before a scheduled consultation, deliverable release, or subscription renewal to avoid additional charges.",
  },
  {
    title: "Irrevocable Items",
    detail:
      "Completed legal opinions, published listings, court filings, and third-party statutory payments cannot be cancelled once initiated.",
  },
  {
    title: "Self-Service Controls",
    detail:
      "Pause or terminate renewals directly from the billing dashboard. Updates take effect immediately and are timestamped in your audit log.",
  },
  {
    title: "Institutional Contracts",
    detail:
      "Bar councils, courts, or corporate clients must provide an authorised email or signed letter on official letterhead to action cancellations.",
  },
];

const assistance = [
  {
    title: "Billing Desk",
    copy: "billing@legalportal.in",
    note: "Share invoices, payment proofs, or GST clarifications for cancellation adjustments.",
  },
  {
    title: "Support Helpline",
    copy: "+91 9999 123 789",
    note: "Available 9am–8pm IST on business days for urgent disruption management.",
  },
  {
    title: "Ticket Workspace",
    copy: "support.legalportal.in",
    note: "Raise CN-Forms, upload supporting files, and track resolution status with timestamped updates.",
  },
];

export default function Cancellation() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1d0005] via-[#4f0012] to-[#8b001c] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_55%)] opacity-45" aria-hidden="true" />
      <div className="absolute -bottom-24 right-[-5rem] h-72 w-72 rounded-full bg-rose-500/35 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            Cancellation Policy
          </span>
          <h1 className="text-4xl font-serif font-bold">Cancellation Workflow for Legal Portal Services</h1>
          <p className="text-base text-white/80">
            When engagements need to pause, our policy provides a predictable framework that safeguards clients, counsel, and institutional partners alike.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-white/15 bg-white/5 p-10 shadow-[0_40px_80px_-35px_rgba(0,0,0,0.7)] backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">Key Conditions</h2>
          <div className="mt-6 space-y-5">
            {cancellationRules.map(({ title, detail }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {assistance.map(({ title, copy, note }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm font-medium text-amber-200">{copy}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/75">{note}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/25 p-8 backdrop-blur md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-white">File a cancellation within minutes</h3>
            <p className="mt-2 text-sm text-white/70">
              Login and submit the <span className="font-semibold text-amber-300">Service CN-Form</span> to initiate a guided wizard.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/90 px-6 py-3 text-sm font-semibold text-rose-700 shadow-lg shadow-rose-900/40 transition hover:bg-white"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
