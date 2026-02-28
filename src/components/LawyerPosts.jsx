import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUserTie,
  faScaleBalanced,
  faHandshake,
  faFeather,
  faComments,
  faUserShield,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const designations = [
  { name: "Intake Specialists", icon: faScaleBalanced, detail: "Structure briefs, triage urgency, and assign confidentiality tiers." },
  { name: "Case Strategists", icon: faUserShield, detail: "Design litigation roadmaps, filings, and precedent research." },
  { name: "Client Success Leads", icon: faUserTie, detail: "Coordinate schedules, fee milestones, and stakeholder updates." },
  { name: "Knowledge Desk", icon: faFeather, detail: "Maintain legal templates, trackers, and compliance repositories." },
  { name: "Mediation & ADR", icon: faHandshake, detail: "Facilitate settlements with multi-party dashboards and hearings." },
  { name: "Advisory Pod", icon: faLightbulb, detail: "Deliver on-demand opinions for corporate and policy mandates." },
  { name: "Young Counsel Collective", icon: faUserGraduate, detail: "Support drafting, research, and digital evidence prep." },
  { name: "Engagement Desk", icon: faComments, detail: "Handle post-consultation analytics and client feedback loops." },
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

export default function LawyerPosts() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-100 to-slate-200" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-rose-200/30 to-transparent blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">Platform Roles</span>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900">Teams Behind Every Consultation</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-600">
            From intake to resolution, the Legal Portal is supported by specialised desks that keep matters moving securely, transparently, and on schedule.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-4">
          {designations.map((role, index) => (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 text-center shadow-[0_20px_60px_rgba(148,163,184,0.2)] backdrop-blur-md"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-100 to-white" />
              </div>
              <div className="relative flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600">
                  <FontAwesomeIcon icon={role.icon} className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{role.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-rose-400/90">{role.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
