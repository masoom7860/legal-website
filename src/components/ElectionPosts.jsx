import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, subtitle, variant = "light" }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-6 rounded-2xl border transition-all duration-300 ${
        variant === "dark"
          ? "bg-slate-900/80 border-slate-700/70 text-white shadow-[0_20px_60px_rgba(15,23,42,0.55)]"
          : "bg-white/70 border-white/60 shadow-[0_20px_50px_rgba(148,163,184,0.2)] backdrop-blur-sm hover:shadow-[0_30px_60px_rgba(192,132,252,0.35)]"
      }`}
    >
      <div
        className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
          variant === "dark" ? "bg-amber-500/15 text-amber-300" : "bg-rose-500/10 text-rose-600"
        }`}
      >
        {Icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 tracking-tight">{title}</h3>
      <p className={`text-sm leading-relaxed ${variant === "dark" ? "text-slate-400" : "text-slate-600"}`}>{subtitle}</p>
    </motion.div>
  );
};

const posts = [
  { title: "President", desc: "Strategic leadership for the bar council" },
  { title: "Vice President", desc: "Supports governance and policy rollout" },
  { title: "General Secretary", desc: "Administrative and operational head" },
  { title: "Treasurer", desc: "Stewards financial oversight and audits" },
  { title: "Executive Member", desc: "Chairs committees & regional outreach" },
  { title: "Central Council Member", desc: "Represents state bars at national level" },
];

export default function ElectionPosts() {
  return (
    <section id="elections" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-slate-950" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_55%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.18),transparent_55%)]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">Official Positions</span>
          <h2 className="mt-4 text-4xl font-semibold">Bar Council Leadership</h2>
          <p className="mt-4 max-w-3xl mx-auto text-base text-white/70">
            Track the pivotal roles that shape the governance of bar associations across India, from executive committees to national delegations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <FeatureCard
              key={post.title}
              variant="dark"
              title={post.title}
              subtitle={post.desc}
              icon={<span className="text-2xl font-semibold">#{index + 1}</span>}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
