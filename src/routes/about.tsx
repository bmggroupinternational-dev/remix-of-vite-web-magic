import { createFileRoute } from "@tanstack/react-router";
import dubai from "@/assets/dubai-port.jpg";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rafiki Al Nabeel" },
      {
        name: "description",
        content:
          "Rafiki Al Nabeel Limited, incorporated in 2024 under RAK ICC, is a maritime asset ownership and investment company based in Dubai.",
      },
      { property: "og:title", content: "About — Rafiki Al Nabeel" },
      {
        property: "og:description",
        content:
          "Corporate foundation, legal identity and strategic positioning of Rafiki Al Nabeel Limited.",
      },
    ],
  }),
  component: About,
});

const facts = [
  ["Legal name", "Rafiki Al Nabeel Limited"],
  ["Incorporated", "18 April 2024"],
  ["Structure", "Company limited by shares, RAK ICC Business Companies Regulations 2018"],
  ["Jurisdiction", "RAK ICC, United Arab Emirates"],
  ["Addresses", "Dubai Investment Park address; DIFC correspondence address"],
  ["Authorised share capital", "AED 10,000,000 divided into 10,000,000 shares of AED 1"],
  ["Issued share capital", "AED 10,000,000"],
  ["Activity schedule", "Includes activities of holding companies"],
];

const values = [
  ["Quality maritime assets", "Selection driven by technical, commercial and lifecycle merit."],
  ["Structured deployment", "Charter and hire arrangements with defined contractual roles."],
  ["Specialist execution", "Professional counterparties for operations and technical management."],
  ["Long-term relationships", "Commercial partnerships built for repeat, durable business."],
  ["Disciplined capital allocation", "Clear investment criteria applied before commitment."],
  ["Scalable portfolio", "A platform designed to grow asset by asset."],
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Rafiki"
        title="A maritime asset owner built on ownership, investment discipline and asset performance."
        intro="Rafiki Al Nabeel deploys capital into maritime assets, maintains ownership and economic exposure to those assets, and creates value through their commercial employment."
      />

      <Section>
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Corporate role</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Ownership separated from operation
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                A vessel-owning company can work with an operator, charterer and technical
                ship manager as separate counterparties. Rafiki separates ownership from
                operation where this creates clearer accountability, stronger specialist
                execution and better capital discipline.
              </p>
              <p>
                In practice, the same corporate group may perform more than one of these
                roles, but responsibilities are explicitly defined in contracts and
                governance documents.
              </p>
            </div>
          </div>
          <img
            src={dubai}
            alt="Dubai skyline and port at dusk"
            width={1200}
            height={912}
            loading="lazy"
            className="h-[400px] w-full rounded-lg object-cover"
          />
        </div>
      </Section>

      <Section muted>
        <p className="eyebrow">Company at a glance</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Corporate foundation</h2>
        <dl className="mt-10 divide-y divide-border overflow-hidden rounded-lg border border-border bg-background">
          {facts.map(([term, value]) => (
            <div key={term} className="grid gap-1 p-6 sm:grid-cols-[260px_1fr] sm:gap-8">
              <dt className="text-sm font-semibold">{term}</dt>
              <dd className="text-sm text-muted-foreground">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-xs text-muted-foreground">
          Corporate facts as stated in the company's constitutional documents.
        </p>
      </Section>

      <Section>
        <p className="eyebrow">Value proposition</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">What we stand for</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-2 lg:grid-cols-3">
          {values.map(([title, body]) => (
            <div key={title} className="bg-background p-8">
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
