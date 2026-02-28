import { motion } from "framer-motion";
import chambersImage from "../assets/lawimages/law2.jpg";

const values = [
  {
    title: "Client-Centric Counsel",
    description: "Dedicated legal teams ensure every brief is meticulously prepared and personally communicated.",
  },
  {
    title: "Nationwide Network",
    description: "Coordinated presence across metros and district courts, anchored by trusted advocates-on-record.",
  },
  {
    title: "Ethics & Integrity",
    description: "Transparent processes, conflict checks, and compliance audits overseen by senior partners.",
  },
];

const milestones = [
  { year: "1998", title: "Founded in New Delhi", detail: "Advocates band together to create an accessible legal desk." },
  { year: "2008", title: "Expansion to 12 Cities", detail: "Practice chairs appointed for corporate, criminal, and tax divisions." },
  { year: "2018", title: "Digital Counsel Network", detail: "Launch of portal unifying verified advocates, elections, and resources." },
];

const keyFeatures = [
  "Access to verified and experienced legal professionals",
  "Secure and confidential consultation environment",
  "Multiple consultation modes (Chat, Voice, Video, Appointments)",
  "Transparent fee structure and seamless payment process",
  "Organized consultation records and case history",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-100 to-white" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-rose-200/40 to-transparent" aria-hidden="true" />
      <div className="absolute -right-24 top-24 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">About Legal Portal</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-900">A Legacy of Courtroom Excellence</h2>
          <p className="mt-5 text-base text-slate-600">
            We blend decades of advocacy with modern legal intelligence to deliver decisive outcomes for litigants, enterprises, and councils across India.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(100,116,139,0.28)]"
          >
            <img src={chambersImage} alt="Legal Portal offices" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-900/10 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/70 p-6 text-slate-900 shadow-[0_15px_45px_rgba(255,255,255,0.3)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Recognition</p>
              <div className="mt-3 flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-semibold">500+</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Landmark Matters</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">25+</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Senior Partners</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">98%</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Client Retention</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_25px_60px_rgba(148,163,184,0.25)] backdrop-blur">
              <h3 className="text-2xl font-semibold text-slate-900">Defending Rights Since 1998</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                From the very first brief, our chambers embraced meticulous research, collaborative strategy, and trial-tested advocacy. Today, we operate as a connected counsel network— synchronising experts across criminal, corporate, tax, and technology verticals.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Each mandate is overseen by senior partners with AOR credentials, ensuring that filings, submissions, and hearings uphold the highest judicial standards.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-5 shadow-[0_18px_45px_rgba(148,163,184,0.2)] backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" aria-hidden="true">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-100 to-white" />
                  </div>
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-400">{value.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-white/60 bg-white/80 p-10 shadow-[0_30px_80px_rgba(148,163,184,0.25)] backdrop-blur"
        >
          <h3 className="text-2xl font-semibold text-slate-900">Milestones</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative rounded-2xl border border-white/50 bg-white/70 p-6 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-400">{milestone.year}</div>
                <p className="mt-3 text-lg font-semibold text-slate-900">{milestone.title}</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{milestone.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-10 shadow-[0_35px_90px_rgba(148,163,184,0.28)] backdrop-blur"
        >
          <div className="absolute -top-32 right-10 h-40 w-40 rounded-full bg-rose-200/40 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 left-10 h-48 w-48 rounded-full bg-amber-200/40 blur-3xl" aria-hidden="true" />
          <div className="relative space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-rose-100/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">
                Legal Portal
              </span>
              <h3 className="mt-4 text-3xl font-semibold text-slate-900">
                A comprehensive digital platform designed to provide structured, secure, and reliable access to legal services.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Our Legal Portal enables individuals and organizations to connect with qualified legal professionals through a transparent and technology-driven system. The platform simplifies legal consultation, ensures confidentiality, and supports informed decision-making across a wide range of legal matters.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] items-start">
              <div className="space-y-4 rounded-3xl border border-white/60 bg-white/85 p-6 shadow-[0_25px_60px_rgba(148,163,184,0.25)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Counsel & Guidance</p>
                <h4 className="text-xl font-semibold text-slate-900">Professional legal support delivered with clarity, confidentiality, and convenience.</h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  The Counsel & Guidance service offers users access to experienced legal professionals for structured consultations and expert insights. Users can seek guidance through multiple communication channels, ensuring timely and effective legal assistance tailored to their specific needs.
                </p>
              </div>
              <div className="rounded-3xl border border-white/60 bg-white/85 p-6 shadow-[0_25px_60px_rgba(148,163,184,0.25)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Key Features</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-[6px] inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-amber-500 to-rose-500" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/60 bg-white/85 p-6 shadow-[0_20px_55px_rgba(148,163,184,0.22)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">Our Objective</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  To streamline access to legal counsel by providing a reliable digital platform that connects users with qualified legal professionals in a secure and efficient manner.
                </p>
              </div>
              <div className="rounded-3xl border border-white/60 bg-white/85 p-6 shadow-[0_20px_55px_rgba(148,163,184,0.22)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">Our Commitment</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We are committed to maintaining high standards of professionalism, data security, and service transparency, ensuring a trusted experience for both legal professionals and users.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
