import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rafiki Al Nabeel" },
      {
        name: "description",
        content:
          "Contact Rafiki Al Nabeel Limited for charter, ownership, brokerage, financing and investment enquiries.",
      },
      { property: "og:title", content: "Contact — Rafiki Al Nabeel" },
      {
        property: "og:description",
        content:
          "Institutional business development enquiries for Rafiki Al Nabeel Limited, Dubai, United Arab Emirates.",
      },
    ],
  }),
  component: Contact,
});

const enquiries = [
  ["Chartering and commercial", "Charter, hire and vessel deployment discussions."],
  ["Brokerage and acquisitions", "Asset opportunities, sale and purchase enquiries."],
  ["Financing and investment", "Lenders, maritime financiers and investor relations."],
  ["Corporate and legal", "Corporate information and professional adviser enquiries."],
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Institutional business development enquiries."
        intro="We welcome contact from charterers, marine operators, ship managers, brokers, insurers, financiers, investors and professional advisers."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">Corporate details</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Rafiki Al Nabeel Limited</h2>
            <dl className="mt-8 space-y-6 text-sm">
              <div>
                <dt className="font-semibold">Registered structure</dt>
                <dd className="mt-1 text-muted-foreground">
                  Company limited by shares, RAK ICC, United Arab Emirates. Incorporated 18
                  April 2024.
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Office address</dt>
                <dd className="mt-1 text-muted-foreground">
                  Dubai Investment Park, Dubai, United Arab Emirates
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Correspondence address</dt>
                <dd className="mt-1 text-muted-foreground">DIFC, Dubai, United Arab Emirates</dd>
              </div>
              <div>
                <dt className="font-semibold">Email and telephone</dt>
                <dd className="mt-1 text-muted-foreground">
                  To be confirmed by management — share your official contact details and
                  they will be published here.
                </dd>
              </div>
            </dl>
          </div>

          <div className="panel p-8">
            <p className="eyebrow">Enquiry routes</p>
            <div className="mt-6 space-y-6">
              {enquiries.map(([title, body]) => (
                <div key={title} className="border-b border-border pb-5 last:border-0 last:pb-0">
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
