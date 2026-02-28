import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: faLocationDot,
    title: "Our Office",
    detail: "123 Justice Plaza, New Delhi, India",
  },
  {
    icon: faEnvelope,
    title: "Email Us",
    detail: "support@legalportal.in",
  },
  {
    icon: faPhone,
    title: "Call Us",
    detail: "+91 XXXXX XXXXX",
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
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-100 to-white" aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-rose-200/30 to-transparent blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-[1.1fr_1fr]">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          <motion.h2 variants={itemVariants} className="text-4xl font-semibold text-slate-900">
            Schedule a Consultation
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-base text-slate-600 leading-relaxed">
            Share your case details and our client services desk will confirm a consultation slot within 24 working hours.
          </motion.p>
          <motion.p variants={itemVariants} className="mt-6 rounded-2xl border border-rose-200/60 bg-rose-50/60 p-4 text-xs leading-relaxed text-rose-700">
            I hereby authorize to send notifications on SMS/RCS/WhatsApp Messages (Promotional / informational messages). By clicking Sign Up, you agree to our Terms of Service and that you have read our Privacy Policy.
          </motion.p>

          <motion.ul variants={containerVariants} className="mt-10 space-y-6">
            {contactItems.map((item) => (
              <motion.li
                key={item.title}
                variants={itemVariants}
                className="group flex items-start gap-4 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-[0_15px_40px_rgba(148,163,184,0.2)] backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600">
                  <FontAwesomeIcon icon={item.icon} className="text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500/90">{item.title}</p>
                  <p className="mt-2 text-base text-slate-800">{item.detail}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-white/60 bg-slate-950/95 p-10 shadow-[0_30px_70px_rgba(15,23,42,0.6)] backdrop-blur"
        >
          <div className="absolute -top-40 right-20 h-48 w-48 rounded-full bg-rose-500/30 blur-3xl" aria-hidden="true" />
          <div className="absolute inset-0 rounded-3xl border border-white/10" aria-hidden="true" />
          <div className="relative">
            <h3 className="text-2xl font-semibold text-white">Submit Your Brief</h3>
            <p className="mt-2 text-sm text-white/70">Provide a snapshot of your matter and we&apos;ll revert with the right counsel.</p>

            <form className="mt-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-rose-400 focus:outline-none"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-rose-400 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-rose-400 focus:outline-none"
                />
              </div>
              <select className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/80 focus:border-rose-400 focus:outline-none">
                <option className="text-slate-700">Select Practice Area</option>
                <option className="text-slate-700">Criminal Law</option>
                <option className="text-slate-700">Corporate Law</option>
                <option className="text-slate-700">Family Law</option>
                <option className="text-slate-700">Civil Litigation</option>
                <option className="text-slate-700">Tax & Finance</option>
                <option className="text-slate-700">Technology & Cyber</option>
              </select>
              <textarea
                rows="4"
                placeholder="Share a summary of your matter"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-rose-400 focus:outline-none"
              />
              <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-xs uppercase tracking-[0.25em] text-white/80">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/40 bg-transparent text-rose-400 focus:ring-rose-400" />
                <span className="normal-case tracking-normal text-[0.72rem] leading-relaxed text-white/80">
                  I hereby authorize to send notifications on SMS/RCS/WhatsApp Messages (Promotional / informational messages). By clicking Sign Up, you agree to our Terms of Service and that you have read our Privacy Policy.
                </span>
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-[0_18px_40px_rgba(244,114,182,0.45)] transition hover:shadow-[0_24px_55px_rgba(244,114,182,0.6)]"
              >
                Submit Brief
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
