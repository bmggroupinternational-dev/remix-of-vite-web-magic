import { createFileRoute, Link } from "@tanstack/react-router";
import { Anchor, Compass, LineChart, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-vessel.jpg";
import assetImage from "@/assets/asset-vessel.jpg";
import { Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rafiki Al Nabeel — Maritime Asset Ownership & Investment" },
      {
        name: "description",
        content:
          "Rafiki Al Nabeel acquires, owns and commercially deploys vessels through structured charter and hire arrangements with marine counterparties.",
      },
      {
        property: "og:title",
        content: "Rafiki Al Nabeel — Maritime Asset Ownership & Investment",
      },
      {
        property: "og:description",
        content:
          "A Dubai-based maritime asset ownership and investment company creating long-term value through disciplined ownership and commercial deployment.",
      },
    ],
  }),
  component: Home,
});

const cycle = [
  {
    step: "01",
    title: "Acquire",
    body: "Screen, assess and execute on maritime assets that meet technical, commercial, legal and financial criteria.",
  },
  {
    step: "02",
    title: "Own",
    body: "Hold legal and economic ownership, with clear accountability for insurance, compliance and asset integrity.",
  },
  {
    step: "03",
    title: "Deploy",
    body: "Place vessels with marine counterparties under structured charter or hire arrangements.",
  },
  {
    step: "04",
    title: "Grow",
    body: "Reinvest cash flow into additional assets when risk-adjusted opportunities meet investment criteria.",
  },
];

const pillars = [
  {
    icon: Anchor,
    title: "Asset Ownership",
    body: "We build value through productive maritime assets held with a long-term ownership horizon.",
  },
  {
    icon: Compass,
    title: "Commercial Deployment",
    body: "We connect assets with structured commercial demand through charter and hire relationships.",
  },
  {
    icon: LineChart,
    title: "Capital Discipline",
    body: "We evaluate every asset through rigorous commercial and financial criteria before capital is committed.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Ownership",
    body: "We protect asset integrity, safety and long-term compliance across the vessel lifecycle.",
  },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Cargo vessel at sea at blue hour"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="eyebrow">Maritime Asset Ownership & Investment</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] text-navy-foreground md:text-6xl">
            Own the asset. Deploy the asset. Generate value. Grow the portfolio.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-navy-foreground/80 md:text-lg">
            Rafiki Al Nabeel converts capital into productive maritime assets and seeks to
            create recurring income and long-term value through disciplined commercial
            deployment.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/business-model"
              className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Our business model
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-navy-foreground/30 px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
            >
              Business development
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              A maritime investment institution, built asset by asset.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Rafiki Al Nabeel is a Dubai-based maritime asset ownership and investment
              company established in 2024. The company is focused on building a portfolio of
              productive maritime assets and creating long-term value through disciplined
              acquisition, responsible ownership and commercial deployment.
            </p>
            <p>
              Its business model is centered on placing vessels into structured charter or
              hire arrangements with marine counterparties, while operational, technical and
              crewing responsibilities are allocated according to the relevant contractual
              structure.
            </p>
          </div>
        </div>
      </Section>

      <Section muted>
        <p className="eyebrow">Business model</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">The core business cycle</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-2 lg:grid-cols-4">
          {cycle.map((item) => (
            <div key={item.step} className="bg-background p-8">
              <span className="font-display text-sm font-semibold text-accent">
                {item.step}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <img
            src={assetImage}
            alt="Aerial view of a bulk carrier at sea"
            width={1200}
            height={912}
            loading="lazy"
            className="h-[420px] w-full rounded-lg object-cover"
          />
          <div>
            <p className="eyebrow">Messaging pillars</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              What our model is built on
            </h2>
            <div className="mt-10 space-y-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-4">
                  <pillar.icon className="mt-1 size-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-base font-semibold">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="panel flex flex-col items-start justify-between gap-8 p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Institutional business development
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We welcome enquiries from charterers, marine operators, brokers, ship managers,
              financiers and investors.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-deep"
          >
            Contact Rafiki Al Nabeel
          </Link>
        </div>
      </Section>
    </>
  );
}
