import { motion } from "framer-motion";

const levels = [
  {
    name: "Create Your Brief",
    description: "Share objectives, timelines, and supporting documents through our secure intake form to generate a structured case summary.",
  },
  {
    name: "Match with Counsel",
    description: "Our platform recommends verified legal professionals based on practice area, jurisdiction, and availability.",
  },
  {
    name: "Consultation & Strategy",
    description: "Engage via chat, voice, video, or in-person appointments with tracked action items and transparent fee milestones.",
  },
  {
    name: "Ongoing Case Records",
    description: "Access organised transcripts, filings, and follow-up reminders inside a confidential digital workspace.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function CourtLevels() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950" aria-hidden="true" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.6),transparent_60%)]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-white"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-400/80">Consultation Journey</span>
          <h2 className="mt-4 text-4xl font-semibold">How the Legal Portal Orchestrates Your Matter</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-white/70">
            Every engagement progresses through a secure, technology-driven workflow designed to capture your objectives, align the right counsel, and maintain a defensible paper trail.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {levels.map((level, index) => (
            <motion.div
              key={level.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.45, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.45)]"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 via-rose-500/10 to-transparent" />
              </div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                  Tier {index + 1}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{level.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{level.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
