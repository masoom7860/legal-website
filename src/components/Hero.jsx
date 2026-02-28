import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGavel, faShieldAlt, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/lawimages/law5.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const statItems = [
  { label: "Verified Professionals", value: "250+", icon: faShieldAlt },
  { label: "Secure Consultations", value: "100%", icon: faGavel },
  { label: "Consultation Modes", value: "4", icon: faPeopleGroup },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <img src={heroImage} alt="Law library background" className="h-full w-full object-cover opacity-60 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,113,113,0.75),rgba(15,23,42,0.95))]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-rose-100">
            Legal Portal
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Structured, secure, and reliable access to legal services.
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-100/80 leading-relaxed">
            Our Legal Portal connects individuals and organisations with qualified legal professionals through a transparent, technology-driven ecosystem. Consult with confidence, protect your data, and make informed decisions across every legal matter.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/#practice"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-rose-500/30 transition hover:shadow-xl"
            >
              Explore Practice Areas
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/20"
            >
              Request Consultation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-14 grid gap-4 sm:grid-cols-3"
        >
          {statItems.map(({ label, value, icon }) => (
            <div key={label} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-rose-500/20" aria-hidden="true" />
              </div>
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-amber-300">
                  <FontAwesomeIcon icon={icon} className="text-xl" />
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight">{value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-rose-100/70">{label}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
