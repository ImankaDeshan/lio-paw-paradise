import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { business } from "@/config/business";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-ink text-cream">
      <div className="container-page py-7">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/images/logo-Light.png" alt="" width={36} height={36} />
              <span className="font-display text-lg">{business.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              {business.descriptionShort}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Instagram", href: business.social.instagram, icon: FaInstagram },
                { label: "Facebook", href: business.social.facebook, icon: FaFacebookF },
                { label: "TikTok", href: business.social.tiktok, icon: FaTiktok },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-gold/90">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/65">
              {business.services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="transition-colors hover:text-gold">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold/90">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/65">
              <li><Link href="/dog-care-process" className="transition-colors hover:text-gold">Our Process</Link></li>
              <li><Link href="/food-and-health" className="transition-colors hover:text-gold">Food & Health</Link></li>
              <li><Link href="/gallery" className="transition-colors hover:text-gold">Gallery</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-gold">About Us</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold/90">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li>{business.address.line1}<br />{business.address.line2}, {business.address.country}</li>
              <li><a href={`tel:${business.phoneDial}`} className="hover:text-gold">{business.phoneDisplay}</a></li>
              <li><a href={`mailto:${business.email}`} className="hover:text-gold">{business.email}</a></li>
            </ul>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold text-forest-ink transition-colors hover:bg-gold-deep"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row">
          <p>&copy; {year} {business.name}. All rights reserved.</p>
          <p>Kandy, Sri Lanka — Made with care for dogs and their people.</p>
        </div>
      </div>
    </footer>
  );
}
