"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu, LuX } from "react-icons/lu";
import { business } from "@/config/business";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/dog-care-process", label: "Our Process" },
  { href: "/food-and-health", label: "Food & Health" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header id="site-header" className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
      <div className="container-page">
        <div
          id="nav-inner"
          className={`mt-4 flex items-center justify-between rounded-full border px-5 py-3 backdrop-blur-md transition-all duration-500 ${
            isScrolled
              ? "border-forest/10 bg-cream/95 shadow-card text-forest-ink"
              : "border-white/15 bg-forest-ink/40 text-cream"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/images/Logo.png" alt={business.name} width={70} height={34} className="shrink-0" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-gold"
                      : isScrolled
                      ? "text-forest-ink/80 hover:text-gold"
                      : "text-cream/80 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold text-forest-ink transition-all hover:bg-gold-deep sm:inline-flex"
          >
            Request Dog Care
          </a>

          <button
            type="button"
            id="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`grid h-9 w-9 place-items-center rounded-full lg:hidden ${
              isScrolled ? "text-forest-ink" : "text-cream"
            }`}
          >
            {mobileMenuOpen ? (
              <LuX size={22} />
            ) : (
              <LuMenu size={22} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="mt-2 rounded-3xl border border-white/15 bg-forest-ink/95 p-5 backdrop-blur-md lg:hidden animate-fade-in"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-3 py-3 text-[15px] font-medium transition-colors hover:bg-white/5 ${
                      isActive ? "text-gold font-semibold" : "text-cream/90 hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-xl bg-gold px-3 py-3 text-center text-[15px] font-semibold text-forest-ink"
              >
                Request Dog Care
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
