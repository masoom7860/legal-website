import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faClock, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const offices = [
  {
    city: "New Delhi (HQ)",
    address: "123 Justice Plaza, Connaught Place",
    phone: "+91 11 4000 2121",
    hours: "Mon-Sat • 10:00am – 7:00pm",
  },
  {
    city: "Mumbai",
    address: "402 Nariman Chambers, Fort",
    phone: "+91 22 3567 9988",
    hours: "Mon-Fri • 9:30am – 6:30pm",
  },
  {
    city: "Bengaluru",
    address: "18 Residency Tower, MG Road",
    phone: "+91 80 2710 5544",
    hours: "Mon-Sat • 10:00am – 6:00pm",
  },
];

const contactChannels = [
  {
    icon: faEnvelope,
    title: "Case Intake",
    detail: "briefing@legalportal.in",
    note: "Send briefs, evidence bundles, or consultation requests.",
  },
  {
    icon: faPhone,
    title: "Emergency Line",
    detail: "+91 8800 123 456",
    note: "24x7 for arrests, overnight filings, and urgent mentions.",
  },
  {
    icon: faScaleBalanced,
    title: "Institutional Desk",
    detail: "institutions@legalportal.in",
    note: "Government, PSU, and bar association partnerships.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020410] via-[#0b1230] to-[#111d3a] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_55%)]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Contact Legal Portal
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Schedule a Consultation
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-xl">
              Share your case details and our client services desk will confirm a consultation slot within 24 working hours.
            </p>
            <div className="rounded-2xl border border-rose-200/40 bg-rose-100/10 p-4 text-xs leading-relaxed text-rose-100/90">
              I hereby authorize to send notifications on SMS/RCS/WhatsApp Messages (Promotional / informational messages). By clicking Sign Up, you agree to our Terms of Service and that you have read our Privacy Policy.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-300">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Support Line</p>
                  <p className="text-base font-semibold text-white">+91 8800 123 456</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-300">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Email</p>
                  <p className="text-base font-semibold text-white">support@legalportal.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur"
          >
            <h2 className="text-2xl font-semibold text-white">Submit Your Brief</h2>
            <p className="mt-2 text-sm text-white/70">Provide a snapshot of your matter and we&apos;ll revert with the right counsel.</p>
            <form className="mt-6 space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-rose-300 focus:ring-0"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-rose-300 focus:ring-0"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-rose-300 focus:ring-0"
                />
              </div>
              <select className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/80 outline-none focus:border-rose-300 focus:ring-0">
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
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-rose-300 focus:ring-0"
              />
              <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-xs uppercase tracking-[0.25em] text-white/80">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/40 bg-transparent text-rose-300 focus:ring-rose-300" />
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
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-serif font-bold text-slate-900 text-center"
          >
            Offices & Liaison Cells
          </motion.h2>
          <p className="mt-4 text-center text-sm text-slate-600 max-w-3xl mx-auto">
            Meet us in person or book a hybrid strategy room. Each office is equipped with secure evidence lockers, digital briefing rooms,
            and mediation suites.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offices.map(({ city, address, phone, hours }) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50"
              >
                <h3 className="text-lg font-semibold text-slate-900">{city}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{address}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faPhone} className="text-amber-500" />
                    <span>{phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className="text-amber-500" />
                    <span>{hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-serif font-bold text-white text-center"
          >
            Specialist Helpdesks
          </motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactChannels.map(({ icon, title, detail, note }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur text-white"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300">
                  <FontAwesomeIcon icon={icon} className="text-lg" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="text-sm font-medium text-amber-300">{detail}</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-500/15 via-transparent to-slate-50/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-900">Join our counsel network</h2>
          <p className="mt-3 text-sm text-slate-600">
            Advocates and legal-tech collaborators can apply to the Legal Portal network for cross-regional briefs and policy projects.
          </p>
          <a
            href="mailto:careers@legalportal.in"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-900/30 transition hover:bg-amber-400"
          >
            Email careers@legalportal.in
          </a>
        </div>
      </section>
    </main>
  );
}
