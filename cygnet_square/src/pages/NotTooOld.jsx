import { Link } from "react-router-dom";
import { ArrowRight, Check, Mail } from "lucide-react";

const offerings = [
  "Low-impact exercise and yoga classes for all mobility levels",
  "Mindfulness and stress-reduction workshops",
  "Social events and group discussions",
  "In-person and online sessions for homebound seniors",
  "Tech support, digital skills training, and information sessions",
  "Activities in English and French",
];

const audience = [
  "Senior women and men aged 55+",
  "Seniors who are isolated or living alone",
  "Seniors with limited mobility or who are homebound",
  "Seniors facing barriers to wellness programs",
];

const outcomes = [
  "Better mobility, balance, and fitness",
  "Less stress and stronger emotional resilience",
  "Reduced loneliness and isolation",
  "Stronger community connections",
  "Greater awareness of senior support services",
  "Stronger digital skills and online safety, including how to spot scams and protect personal information",
];

function DetailList({ items }) {
  return (
    <ul className="mt-5 flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 leading-relaxed">
          <Check
            aria-hidden="true"
            className="mt-1 h-4 w-4 shrink-0 text-abyss/70"
            strokeWidth={2.5}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NotTooOld() {
  return (
    <section className="event-detail-zoom-in min-h-screen bg-accent px-6 py-14 text-abyss sm:px-10 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-abyss/75 transition-colors hover:text-abyss focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-abyss"
        >
          <ArrowRight aria-hidden="true" className="h-4 w-4 rotate-180" />
          Back to events
        </Link>

        <header className="mt-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-abyss/65">
            Cygnet Project · Montreal, QC &amp; Online
          </p>
          <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Not Too Old: Thrive at Every Age
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-abyss/80">
            A welcoming wellness and connection program helping seniors stay
            active, supported, and engaged at every age.
          </p>
        </header>

        <div className="mt-10 h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-[26rem]">
          <picture>
            <source
              type="image/webp"
              srcSet="https://plus.unsplash.com/premium_photo-1682434988522-0998b2b78e84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1682434988522-0998b2b78e84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Cygnet Square community"
              className="h-full w-full object-cover"
              decoding="async"
            />
          </picture>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-abyss/15 bg-white/35 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">What the project offers</h2>
            <DetailList items={offerings} />
          </article>

          <article className="rounded-2xl border border-abyss/15 bg-white/35 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Who it’s for</h2>
            <DetailList items={audience} />
          </article>

          <article className="rounded-2xl border border-abyss/15 bg-white/35 p-6 sm:p-8 md:col-span-2">
            <h2 className="text-2xl font-semibold">What we aim to achieve</h2>
            <DetailList items={outcomes} />
          </article>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl bg-abyss p-6 text-accent sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/70">
              Peer-led
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Led by seniors</h2>
            <p className="mt-3 leading-relaxed text-accent/85">
              Participants help shape the program and support one another as
              peer facilitators.
            </p>
          </article>

          <article className="flex flex-col items-start justify-center rounded-2xl border border-abyss/15 bg-white/35 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Join us</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-abyss/80">
              Whether you’d like to take part, volunteer, or partner with us,
              we’d love to hear from you.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-abyss px-5 py-3 text-sm font-medium text-accent transition-colors hover:bg-abyss/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-abyss"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              Contact us
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default NotTooOld;
