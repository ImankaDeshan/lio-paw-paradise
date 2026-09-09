import Link from "next/link";
import { LuHouse, LuPhone, LuCompass } from "react-icons/lu";

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-forest-ink py-32 text-cream">
      <div className="container-page text-center">
        <p className="eyebrow text-gold">404 Error</p>
        <h1 className="mt-4 font-display text-4xl font-normal sm:text-5xl lg:text-6xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-cream/70 sm:text-base">
          Sorry, we couldn&apos;t find the page you were looking for. It may have been moved, or the link may be incorrect.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-gold inline-flex items-center gap-2">
            <LuHouse size={18} />
            Return Home
          </Link>
          <Link href="/services" className="btn-outline-light inline-flex items-center gap-2">
            <LuCompass size={18} />
            Explore Services
          </Link>
          <Link href="/contact" className="btn-outline-light inline-flex items-center gap-2">
            <LuPhone size={18} />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
