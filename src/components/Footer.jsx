import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const policyLinks = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms & Conditions", path: "/terms" },
  { label: "Return Policy", path: "/return" },
  { label: "Cancellation Policy", path: "/cancellation" },
];

const Footer = () => {
  return (
    <footer className="relative mt-16 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,113,113,0.25),transparent_55%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.18),transparent_50%)]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-[1.1fr_1fr_1fr] text-slate-200">
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl font-semibold">
              LP
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Legal Portal</p>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Counsel Network</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            A premier repository for advocates, bar elections, and judicial insights. We connect litigants to verified counsel and keep the legal fraternity informed.
          </p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-rose-200/80">
            <span className="rounded-full border border-white/10 px-3 py-1">Litigation</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Advisory</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Elections</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-amber-400">Policies</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {policyLinks.map(({ label, path }) => (
              <motion.li key={path} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                <Link
                  to={path}
                  className="group inline-flex items-center gap-3 rounded-lg px-1 py-2 text-slate-300 transition hover:text-white"
                >
                  <span className="h-[2px] w-5 bg-gradient-to-r from-amber-400 to-rose-500 transition-all duration-300 group-hover:w-8" aria-hidden="true" />
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-amber-400">Contact</h3>
          <ul className="mt-6 space-y-4 text-sm text-slate-300">
            <li>
              <p className="text-xs uppercase tracking-[0.3em] text-rose-200/80">Office</p>
              <p className="mt-1 text-base text-white">123 Justice Plaza, New Delhi, India</p>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.3em] text-rose-200/80">Email</p>
              <a href="mailto:support@legalportal.in" className="mt-1 inline-block text-base text-white/90 transition hover:text-white">
                support@legalportal.in
              </a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.3em] text-rose-200/80">Call</p>
              <a href="tel:+910000000000" className="mt-1 inline-block text-base text-white/90 transition hover:text-white">
                +91 XXXXX XXXXX
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/5 py-5 text-center text-xs uppercase tracking-[0.4em] text-slate-400">
        © {new Date().getFullYear()} Legal Portal — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
