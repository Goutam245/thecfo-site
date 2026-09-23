import { Check, Download } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { PageHero, PageCTA } from "@/components/site/PageHero";
import { guides } from "./guideData";

export default function Guides() {
  return (
    <>
      <PageHero
        overline="Guides & Templates"
        title="Free downloads built for"
        accent="operators"
        subtitle="Free downloads — no email required."
        crumbs={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "Guides" }]}
      />
      <section className="bg-white section-pad">
        <div className="container-page">
          <Stagger className="grid md:grid-cols-3 gap-6">
            {guides.map((g) => (
              <StaggerItem key={g.title}>
                <div className="card-warm card-hover p-7 h-full flex flex-col">
                  <div className="text-[32px] leading-none mb-4" aria-hidden="true">{g.emoji}</div>
                  <h3 className="h3 mb-1">{g.title}</h3>
                  <p className="text-xs uppercase tracking-wider text-amber font-semibold mb-3">{g.desc}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {g.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-amber mt-0.5 shrink-0" /><span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={g.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    Download Free <Download className="w-4 h-4" />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <PageCTA title="Need something" accent="more tailored?" body="We'll send a templated model adapted to your business model on request." cta="Talk to Us" />

    </>
  );
}