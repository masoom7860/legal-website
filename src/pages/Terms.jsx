import { motion } from "framer-motion";

const terms = [
  {
    heading: "1. Platform Access",
    detail:
      "Creating an account or scheduling a consultation constitutes acceptance of these Terms, our Privacy Policy, and additional service modules published within the Legal Portal.",
  },
  {
    heading: "2. Responsible Use",
    detail:
      "Users agree to provide accurate information, safeguard login credentials, and refrain from uploading unlawful, defamatory, or confidential content without requisite permissions.",
  },
  {
    heading: "3. Counsel Obligations",
    detail:
      "Listed legal professionals must maintain current bar credentials, disclose conflicts, honour consultation schedules, and document key advice within the portal workspace.",
  },
  {
    heading: "4. Fees & Billing",
    detail:
      "Payments processed through the Legal Portal follow the published fee milestones. Chargebacks or disputes must be raised within seven calendar days of the invoice date.",
  },
  {
    heading: "5. Service Continuity",
    detail:
      "We strive for 99.5% availability. Planned maintenance or force majeure downtime is communicated in advance; liability is limited to the value of the affected transaction.",
  },
];

const commitments = [
  {
    title: "Policy Notifications",
    copy: "Registered users receive dashboard and email alerts before any substantive policy or pricing change takes effect.",
  },
  {
    title: "Secure Payments",
    copy: "All monetary flows are routed via PCI-DSS compliant gateways with tokenised card storage and OTP verification.",
  },
  {
    title: "Escalation Pathways",
    copy: "Disputes are first mediated by our compliance cell before referral to courts in New Delhi, India.",
  },
];

export default function Terms() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#210006] via-[#520011] to-[#890018] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_55%)] opacity-50" aria-hidden="true" />
      <div className="absolute bottom-[-8rem] left-[-5rem] h-64 w-64 rounded-full bg-rose-600/30 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            Terms &amp; Conditions
          </span>
          <h1 className="text-4xl font-serif font-bold">Terms Governing the Legal Portal</h1>
          <p className="text-base leading-relaxed text-white/80">
            Understand the obligations that keep our consultation network transparent, compliant, and efficient for litigants, enterprises, and counsel alike.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-white/15 bg-white/5 p-10 shadow-[0_40px_80px_-35px_rgba(0,0,0,0.7)] backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">Primary Clauses</h2>
          <ol className="mt-6 space-y-5 text-white/85">
            {terms.map(({ heading, detail }) => (
              <li key={heading} className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">{heading}</p>
                <p className="mt-2 text-sm leading-relaxed">{detail}</p>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {commitments.map(({ title, copy }) => (
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
          className="mt-16 flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/25 p-8 backdrop-blur md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-white">Questions or disputes?</h3>
            <p className="mt-2 text-sm text-white/70">
              Reach out within 15 days of the incident so we can review logs, correspondence, and audio trails linked to your account.
            </p>
          </div>
          <a
            href="mailto:legal@legalportal.in"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/90 px-6 py-3 text-sm font-semibold text-rose-700 shadow-lg shadow-rose-900/40 transition hover:bg-white"
          >
            Email Legal Compliance Desk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
