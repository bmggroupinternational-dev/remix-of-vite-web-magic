import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/responsible-ownership")({
  head: () => ({
    meta: [
      { title: "Responsible Ownership — Rafiki Al Nabeel" },
      {
        name: "description",
        content:
          "Safety, compliance, asset integrity and sustainability across the maritime asset lifecycle at Rafiki Al Nabeel.",
      },
      { property: "og:title", content: "Responsible Ownership — Rafiki Al Nabeel" },
      {
        property: "og:description",
        content:
          "How Rafiki Al Nabeel protects asset integrity, safety and long-term regulatory compliance.",
      },
    ],
  }),
  component: ResponsibleOwnership,
});

const commitments = [
  [
    "Safety first",
    "Safety of crew, cargo and vessel is a precondition of commercial performance, not a trade-off against it.",
  ],
  [
    "Asset integrity",
    "Maintenance, survey and class obligations are planned and funded across the vessel lifecycle.",
  ],
  [
    "Regulatory compliance",
    "Flag, class, insurance and international maritime requirements are tracked and met.",
  ],
  [
    "Environmental responsibility",
    "Emissions and efficiency requirements are treated as core asset criteria as regulation evolves.",
  ],
  [
    "Accountable counterparties",
    "Operational and technical duties are allocated by contract to specialists with clear accountability.",
  ],
  [
    "Accurate disclosure",
    "Asset and risk information provided to insurers, financiers and authorities is accurate and complete.",
  ],
];

function ResponsibleOwnership() {
  return (
    <>
      <PageHero
        eyebrow="Responsible ownership"
        title="Protecting asset integrity, safety and long-term compliance."
        intro="Responsible ownership is an economic discipline as much as an ethical one: well-maintained, compliant assets hold value, attract quality counterparties and sustain long-term income."
      />

      <Section>
        <div className="grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-2 lg:grid-cols-3">
          {commitments.map(([title, body]) => (
            <div key={title} className="bg-background p-8">
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="panel p-10">
          <p className="eyebrow">Governance</p>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            Decisions made within a defined framework
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            The company's Articles provide broad director powers, including powers concerning
            indebtedness, together with provisions relating to distributions, accounts and
            audit. Investment, financing and contracting decisions are taken within this
            framework, with responsibilities to counterparties defined in contract.
          </p>
        </div>
      </Section>
    </>
  );
}
