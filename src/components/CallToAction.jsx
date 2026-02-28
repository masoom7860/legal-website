import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const contentVariants = {
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

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-red-600 to-amber-500" aria-hidden="true" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_55%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={childVariants}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em]"
          >
            <FontAwesomeIcon icon={faScaleBalanced} />
            Legal Portal
          </motion.span>
          <motion.h2 variants={childVariants} className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
            Structured legal consultations with verified professionals.
          </motion.h2>
          <motion.p variants={childVariants} className="mt-6 text-base md:text-lg text-white/85">
            Access a confidential, technology-driven platform that connects you to expert counsel via chat, voice, video, or scheduled appointments—complete with transparent fees and secure case records.
          </motion.p>

          <motion.div variants={childVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-rose-600 shadow-[0_18px_35px_rgba(244,114,182,0.35)] transition hover:shadow-[0_22px_45px_rgba(244,114,182,0.45)]"
            >
              Schedule Consultation
              <FontAwesomeIcon icon={faArrowRightLong} className="text-xs transition group-hover:translate-x-1" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/70 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/20"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
