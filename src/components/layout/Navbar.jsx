import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { companyInfo, navItems } from "../../data/siteData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `transition hover:text-white ${
      isActive ? "text-white" : "text-slate-300"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-cyan-400/20 bg-slate-950/88 shadow-[0_0_28px_rgba(34,211,238,0.08)] backdrop-blur-2xl"
          : "border-white/10 bg-slate-950/80 backdrop-blur-xl"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-4 md:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div
            className={`flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/95 shadow-xl shadow-black/20 transition-all duration-300 ${
              scrolled ? "h-12 w-12" : "h-14 w-14"
            }`}
          >
            <img
              src={companyInfo.logoPath}
              alt="Datastruma logo"
              className="h-full w-full object-contain p-1.5"
            />
          </div>

          <div className="min-w-0 max-w-[240px] xl:max-w-[290px]">
            <div
              className={`truncate font-extrabold tracking-tight transition-all duration-300 ${
                scrolled ? "text-xl" : "text-2xl"
              }`}
            >
              {companyInfo.name}
            </div>
            <div className="truncate text-sm text-slate-300">
              {companyInfo.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navLinkClass}>
              <span className="text-base font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${companyInfo.email}`}
            className="hidden text-sm text-slate-300 2xl:block"
          >
            {companyInfo.email}
          </a>

          <Link
            to="/contact"
            className={`navbar-cta inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-lime-300 font-extrabold leading-none text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.22)] transition-all duration-300 hover:scale-[1.03] ${
              scrolled
                ? "h-14 min-w-[150px] px-7 text-lg ring-1 ring-cyan-400/25"
                : "h-15 min-w-[160px] px-8 text-xl"
            }`}
          >
            Let’s Talk
          </Link>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-2xl border px-4 py-3 text-left ${
                    isActive
                      ? "border-cyan-400/30 bg-cyan-400/10 text-white"
                      : "border-white/10 bg-white/5 text-slate-200"
                  }`
                }
              >
                <span className="text-base font-medium">{item.label}</span>
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="navbar-cta mt-2 inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-lime-300 px-8 text-lg font-extrabold text-slate-950"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}