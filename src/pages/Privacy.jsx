import { motion } from "framer-motion";

const policySections = [
  {
    title: "1. Data Categories",
    copy:
      "We capture account credentials, professional identifiers, consultation metadata, billing artefacts, and device diagnostics strictly to operate the Legal Portal ecosystem.",
  },
  {
    title: "2. Purpose & Legal Basis",
    copy:
      "Processing is grounded in consent, contractual necessity, and statutory compliance—supporting scheduling, secure communications, payment reconciliation, and regulator-mandated logs.",
  },
  {
    title: "3. Safeguards",
    copy:
      "Records are encrypted at rest with role-based access, zero-trust session controls, and continuous anomaly detection. Sensitive uploads are auto-expired once obligations are met.",
  },
  {
    title: "4. Disclosures",
    copy:
      "We neither rent nor sell personal data. Limited sharing occurs with vetted cloud processors, communication gateways, or statutory authorities bound by confidentiality clauses.",
  },
  {
    title: "5. Rights & Redress",
    copy:
      "Write to privacy@legalportal.in to request access, rectification, portability, restriction, or erasure. Requests are acknowledged within 72 working hours with an authenticated case ID.",
  },
];

const highlights = [
  {
    title: "Zero-Trust Security",
    copy: "Device fingerprinting and adaptive MFA govern every high-risk action within the portal.",
  },
  {
    title: "Audit-Ready Logs",
    copy: "Immutable trails capture user, counsel, and admin activity for seven years in compliance with Indian IT regulations.",
  },
  {
    title: "Minimal Retention",
    copy: "We purge redundant records quarterly and honour case-specific retention requested by courts or bar councils only.",
  },
];

export default function Privacy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#140009] via-[#460010] to-[#7a0419] py-24 text-white">
      <div
        className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-amber-500/30 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            Privacy Policy
          </span>
          <h1 className="text-4xl font-serif font-bold">Privacy Architecture for Secure Consultations</h1>
          <p className="text-base leading-relaxed text-white/80">
            The Legal Portal is engineered for confidentiality. Learn how we collect, store, and govern data that enables verified counsel matching, multi-channel consultations, and payment workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-white/15 bg-white/5 p-10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">Detailed Statement</h2>
          <p className="mt-4 text-white/70">
            The following clauses outline our full compliance posture. Each commitment is reviewed quarterly by our data governance team
            and external legal advisors.
          </p>
          <ul className="mt-8 space-y-5">
            {policySections.map(({ title, copy }) => (
              <li
                key={title}
                className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 shadow-inner shadow-black/10"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{copy}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {highlights.map(({ title, copy }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{copy}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/25 p-8 backdrop-blur-lg md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-white">Need a Data Disclosure Report?</h3>
            <p className="mt-2 text-sm text-white/70">
              Write to <span className="font-medium text-amber-300">privacy@legalportal.in</span> with your registered email and we will respond within
              three business days.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-amber-400/70 bg-amber-500/90 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-900/40 transition hover:bg-amber-400"
          >
            Contact Data Protection Officer
          </a>
        </motion.div>
      </div>
    </section>
  );
}
