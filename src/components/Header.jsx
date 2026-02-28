import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/lawimages/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Practice", href: "/#practice" },
  // { label: "Elections", href: "/#elections" },
  { label: "Contact", href: "/contact" },
];

const menuItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05 + 0.1,
      duration: 0.35,
      ease: "easeOut",
    },
  }),
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  const closeMenu = () => setOpen(false);

  return (
    <header className="relative z-50">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-rose-500 to-red-600" aria-hidden="true" />

      <div className="bg-white/80 backdrop-blur-md border-b border-white/60 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-20 items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <motion.img
                src={logo}
                alt="Legal Portal Logo"
                className="h-12 w-auto drop-shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900">Legal Portal</span>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                  Counsel & Guidance
                </span>
              </div>
            </a>

            <motion.nav
              className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600"
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  custom={index}
                  variants={menuItemVariants}
                  className="group relative inline-flex items-center gap-1 tracking-wide transition-colors hover:text-red-600"
                >
                  <span>{item.label}</span>
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-500 to-red-500 transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:shadow-md hover:border-red-500 hover:text-red-600"
              >
                Consult Today
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </a>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition hover:border-red-400 hover:text-red-500"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-lg" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-slate-200 bg-white/95"
            >
              <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    whileHover={{ x: 6 }}
                    className="block rounded-lg border border-transparent px-4 py-3 text-base font-semibold text-slate-700 transition hover:border-red-500 hover:bg-rose-50/60 hover:text-red-600"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <a
                  href="/contact"
                  onClick={closeMenu}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30"
                >
                  Consult Today
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
