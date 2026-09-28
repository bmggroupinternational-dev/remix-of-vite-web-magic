import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/investment-approach")({
  head: () => ({
    meta: [
      { title: "Investment Approach — Rafiki Al Nabeel" },
      {
        name: "description",
        content:
          "Disciplined capital allocation, asset screening, financing strategy and risk management across the maritime asset lifecycle.",
      },
      { property: "og:title", content: "Investment Approach — Rafiki Al Nabeel" },
      {
        property: "og:description",
        content:
          "How Rafiki Al Nabeel evaluates, finances and manages maritime assets through the ownership lifecycle.",
      },
    ],
  }),
  component: InvestmentApproach,
});

const criteria = [
  ["Technical suitability", "Condition, class, age profile and lifecycle maintenance outlook."],
  ["Commercial demand", "Charter or hire demand, counterparty depth and utilisation prospects."],
  ["Legal and regulatory", "Flag, class, ownership structure and compliance obligations."],
  ["Financial return", "Acquisition cost, income structure, financing terms and residual value."],
];

const risks = [
  ["Market risk", "Charter rate and asset value cycles across maritime segments."],
  ["Counterparty risk", "Charterer and operator performance under contract."],
  ["Technical risk", "Condition, maintenance, downtime and off-hire exposure."],
  ["Regulatory risk", "Evolving safety, emissions and compliance requirements."],
  ["Financing risk", "Leverage, covenant and interest-rate exposure."],
  ["Concentration risk", "Dependence on a single asset, counterparty or trade."],
];

function InvestmentApproach() {
  return (
    <>
      <PageHero
        eyebrow="Investment approach"
        title="Capital committed only where risk-adjusted criteria are met."
        intro="Rafiki evaluates assets through rigorous commercial and financial criteria, structures ownership and financing deliberately, and manages risk across the full ownership lifecycle."
      />

      <Section>
        <p className="eyebrow">Screening criteria</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">How assets are assessed</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-2">
          {criteria.map(([title, body]) => (
            <div key={title} className="bg-background p-8">
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Capital and financing</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Funding portfolio growth
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Rafiki's stated share capital provides an equity foundation for asset
              acquisition. Portfolio growth is expected to combine shareholder capital,
              maritime financing and reinvested cash flow, with cash allocated between
              operating needs, financing obligations, reserves, distributions and new
              acquisitions.
            </p>
          </div>
          <div>
            <p className="eyebrow">Commercial development funnel</p>
            <ol className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                "Market intelligence",
                "Relationship development",
                "Opportunity screening",
                "Counterparty assessment",
                "Commercial negotiation",
                "Contract",
                "Asset deployment",
                "Relationship management",
              ].map((s, i) => (
                <li key={s} className="flex gap-4 border-b border-border pb-3">
                  <span className="font-display font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <p className="eyebrow">Risk management</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Risks we actively manage</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-2 lg:grid-cols-3">
          {risks.map(([title, body]) => (
            <div key={title} className="bg-background p-8">
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          This page describes the company's strategic approach. It is not an offer of
          securities, a financing memorandum or investment advice.
        </p>
      </Section>
    </>
  );
}
