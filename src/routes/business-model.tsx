import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/business-model")({
  head: () => ({
    meta: [
      { title: "Business Model — Rafiki Al Nabeel" },
      {
        name: "description",
        content:
          "An asset-backed model: capital, acquisition, ownership, charter or hire deployment, cash flow, asset value preservation and reinvestment.",
      },
      { property: "og:title", content: "Business Model — Rafiki Al Nabeel" },
      {
        property: "og:description",
        content:
          "How Rafiki Al Nabeel converts capital into productive maritime assets and recurring charter or hire income.",
      },
    ],
  }),
  component: BusinessModel,
});

const chain = [
  "Capital",
  "Acquire",
  "Own",
  "Charter / Hire",
  "Cash flow",
  "Asset value",
  "Reinvest",
  "Grow fleet",
];

const cycle = [
  "Identify an attractive maritime asset opportunity.",
  "Assess technical, commercial, legal, regulatory and financial suitability.",
  "Secure capital or financing.",
  "Acquire or otherwise obtain ownership of the vessel.",
  "Establish appropriate technical and operational responsibilities.",
  "Secure a charter, hire or other commercial deployment arrangement.",
  "Generate contracted or market-linked income.",
  "Maintain asset value and compliance throughout the vessel lifecycle.",
  "Allocate cash flow between operating needs, financing, reserves, distributions and reinvestment.",
  "Reinvest capital into additional assets when opportunities meet investment criteria.",
];

const components = [
  ["Capital", "Capital allocation and funding strategy", "Banks, investors, shareholders"],
  ["Acquisition", "Asset selection and transaction execution", "Brokers, sellers, advisers"],
  ["Ownership", "Legal and economic ownership", "SPV, lenders, legal advisers"],
  ["Commercial deployment", "Charter strategy and contract oversight", "Charterer, broker, operator"],
  ["Technical management", "Oversight and contractual accountability", "Ship manager / operator"],
  ["Operations", "Only where retained by Rafiki", "Marine operator"],
];

function BusinessModel() {
  return (
    <>
      <PageHero
        eyebrow="Our business"
        title="An asset-backed model that turns capital into productive maritime assets."
        intro="Rafiki's economic engine begins with capital and an asset acquisition decision, then converts the vessel into a productive commercial asset through charter or hire."
      />

      <Section>
        <p className="eyebrow">Economic chain</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {chain.map((node, i) => (
            <span key={node} className="flex items-center gap-3">
              <span className="rounded-sm border border-border bg-card px-4 py-2 font-display text-sm font-semibold">
                {node}
              </span>
              {i < chain.length - 1 && <span className="text-accent">→</span>}
            </span>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Core cycle</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Ten steps from opportunity to portfolio growth
            </h2>
          </div>
          <ol className="space-y-4">
            {cycle.map((step, i) => (
              <li key={step} className="flex gap-5 border-b border-border pb-4">
                <span className="font-display text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <p className="eyebrow">Responsibilities</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Who does what in each arrangement
        </h2>
        <div className="mt-10 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="p-5 font-semibold">Component</th>
                <th className="p-5 font-semibold">Rafiki responsibility</th>
                <th className="p-5 font-semibold">Potential external party</th>
              </tr>
            </thead>
            <tbody>
              {components.map(([a, b, c]) => (
                <tr key={a} className="border-t border-border align-top">
                  <td className="p-5 font-semibold">{a}</td>
                  <td className="p-5 text-muted-foreground">{b}</td>
                  <td className="p-5 text-muted-foreground">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section muted>
        <div className="panel p-10">
          <p className="eyebrow">Charter and hire</p>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">Contractual structures</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Vessels may be deployed under time charter, bareboat charter, other charter
            forms or hybrid arrangements. The structure applied to each asset determines how
            operational, technical, crewing and commercial responsibilities are allocated
            between Rafiki and its marine counterparties. Specific structures, counterparties
            and vessel details are published only once confirmed and supported by
            documentation.
          </p>
        </div>
      </Section>
    </>
  );
}
