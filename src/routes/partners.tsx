import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Stakeholders — Rafiki Al Nabeel" },
      {
        name: "description",
        content:
          "Charterers, marine operators, ship managers, brokers, financiers, insurers and investors working with Rafiki Al Nabeel.",
      },
      { property: "og:title", content: "Partners & Stakeholders — Rafiki Al Nabeel" },
      {
        property: "og:description",
        content:
          "The counterparties and stakeholders in Rafiki Al Nabeel's maritime ownership platform.",
      },
    ],
  }),
  component: Partners,
});

const stakeholders = [
  ["Shareholders and investors", "Capital discipline, returns, governance and growth."],
  ["Banks and financiers", "Asset quality, contracts, cash flow and compliance."],
  ["Charterers", "Reliable assets, contractual certainty and responsive ownership."],
  ["Operators and managers", "Clear ownership, decisions, funding and accountability."],
  ["Brokers", "Asset specifications, availability and commercial authority."],
  ["Insurers and P&I", "Accurate asset and risk information."],
  ["Authorities", "Compliance and responsible ownership."],
  ["Professional advisers", "Accurate corporate and transaction information."],
];

const priorities = [
  "Develop a qualified network of charterers and marine operators.",
  "Build relationships with shipbrokers and maritime advisers.",
  "Develop relationships with banks and maritime financiers.",
  "Maintain strong relationships with ship managers, classification societies and insurers.",
  "Maintain an institutional-quality corporate and asset information package.",
  "Track market intelligence by vessel segment.",
];

function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partners and stakeholders"
        title="A platform built on institutional maritime relationships."
        intro="Rafiki's commercial model is built around professional counterparties and specialist execution, with each relationship carrying clearly defined responsibilities."
      />

      <Section>
        <p className="eyebrow">Stakeholder architecture</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Who we work with</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-2">
          {stakeholders.map(([title, body]) => (
            <div key={title} className="bg-background p-8">
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <p className="eyebrow">Business development priorities</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {priorities.map((p) => (
            <li
              key={p}
              className="border-l-2 border-accent bg-background p-6 text-sm leading-relaxed text-muted-foreground"
            >
              {p}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
