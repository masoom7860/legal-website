import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faUserShield,
  faHouse,
  faBuilding,
  faLaptopCode,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const areas = [
  {
    name: "Verified Counsel Matching",
    icon: faUserShield,
    description: "Connect with advocates validated for expertise, jurisdiction, and conflict clearance before every engagement.",
  },
  {
    name: "Consultation Modes",
    icon: faScaleBalanced,
    description: "Switch seamlessly between chat, voice, video, or scheduled chambers appointments on a single platform.",
  },
  {
    name: "Document Vault",
    icon: faHouse,
    description: "Store briefs, evidence bundles, and transcripts inside encrypted matter rooms with controlled access.",
  },
  {
    name: "Corporate & Compliance Desk",
    icon: faBuilding,
    description: "Dedicated workflows for enterprise mandates, including policy vetting, governance reviews, and regulatory filings.",
  },
  {
    name: "Transparent Fee Engine",
    icon: faMoneyBill,
    description: "Track quotations, retainers, and milestones with automated reminders and integrated payment options.",
  },
  {
    name: "Digital Evidence Lab",
    icon: faLaptopCode,
    description: "Assess cyber incidents, contracts, and IP assets with legal-tech analysts for litigation or advisory readiness.",
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function PracticeAreas() {
  return (
    <section id="practice" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-100 to-slate-200" aria-hidden="true" />
      <div className="absolute -left-20 top-16 h-48 w-48 rounded-full bg-rose-200/40 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 bottom-10 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-600">Platform Capabilities</span>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900">What the Legal Portal Unlocks</h2>
          <p className="mt-4 text-base text-slate-600">
            Explore the secure, technology-driven modules that power our consultation ecosystem—from matching and scheduling to payments and evidence handling.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {areas.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-8 shadow-[0_20px_60px_rgba(148,163,184,0.25)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-rose-200"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-amber-100/50 to-white/80" />
              </div>
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600">
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
