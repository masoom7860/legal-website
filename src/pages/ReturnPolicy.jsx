import { motion } from "framer-motion";

const reasons = [
  {
    title: "Eligibility",
    detail:
      "Refunds may be requested within seven calendar days of invoice for digital reports, consultation credits, and premium subscription modules purchased via the Legal Portal.",
  },
  {
    title: "Valid Grounds",
    detail:
      "We approve returns when a deliverable is unavailable, materially inaccurate, or inaccessible due to platform fault. Preference-based dissatisfaction is outside scope.",
  },
  {
    title: "Verification",
    detail:
      "Each request is reviewed by our compliance desk using audit trails, communication logs, recordings, or session transcripts to confirm the issue.",
  },
  {
    title: "Refund Cycle",
    detail:
      "Once authorised, refunds are processed to the original payment source within 5–7 working days along with a GST-compliant credit note.",
  },
];

const checklist = [
  "Invoice number and registered email ID",
  "Screenshots, recordings, or transcripts evidencing the problem",
  "Preferred resolution: refund, reactivation, or alternate resource",
  "Declaration that Legal Portal materials were not redistributed",
];

export default function ReturnPolicy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#250005] via-[#5a0012] to-[#940019] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.35),transparent_55%)] opacity-50" aria-hidden="true" />
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-rose-500/30 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            Return &amp; Refund Policy
          </span>
          <h1 className="text-4xl font-serif font-bold">Refund Assurance for Legal Portal Services</h1>
          <p className="text-base text-white/80">
            Our digital offerings are engineered for precision. When service outcomes fall short, our structured refund pathway offers clarity, speed, and auditability for every stakeholder.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-white/15 bg-white/5 p-10 shadow-[0_40px_80px_-35px_rgba(0,0,0,0.7)] backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">Conditions for Approval</h2>
          <div className="mt-6 space-y-5">
            {reasons.map(({ title, detail }) => (
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
          className="mt-14 grid gap-6 md:grid-cols-[1.3fr_1fr]"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Documents to Attach</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-amber-400/50 bg-amber-500/90 p-8 text-black shadow-lg shadow-amber-900/40">
            <h3 className="text-xl font-semibold">Fast-Track Review</h3>
            <p className="mt-3 text-sm">
              Flag your ticket as <strong>Refund Priority</strong> while raising it on the help desk. Our audit cell responds within 48 business hours.
            </p>
            <a
              href="mailto:returns@legalportal.in"
              className="mt-5 inline-flex items-center justify-center rounded-full border border-black/10 bg-black/10 px-5 py-2.5 text-sm font-semibold transition hover:bg-black/15"
            >
              Email returns@legalportal.in
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/25 p-8 backdrop-blur md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-white">Need assistance with escalations?</h3>
            <p className="mt-2 text-sm text-white/70">
              Call our resolution line at <span className="font-semibold text-amber-300">+91 8800 123 456</span> (10am–7pm IST) with your case file handy.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/90 px-6 py-3 text-sm font-semibold text-rose-700 shadow-lg shadow-rose-900/40 transition hover:bg-white"
          >
            Visit Support Center
          </a>
        </motion.div>
      </div>
    </section>
  );
}
