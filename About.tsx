import { EngravedH1, EngravedH2, EngravedLabel } from "@/components/bedrock/Engraved";
import { Plate } from "@/components/bedrock/Plate";
import { company } from "@/content/aec";
import { usePageTitle } from "@/components/bedrock/usePageTitle";

export default function About() {
  usePageTitle("AEC — About");

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-14">
      <EngravedLabel>INSTITUTIONAL PROFILE</EngravedLabel>
      <EngravedH1 className="mt-5">About AEC</EngravedH1>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
        <Plate className="md:col-span-7 p-10" surface="granite">
          <EngravedH2>Who AEC Is</EngravedH2>
          <p className="mt-5 font-body text-sm leading-7 text-foreground/90">
            {company.name} is an architectural and engineering consultancy operating in the United Arab Emirates. Our work
            is structured around compliance, disciplined documentation, and coordination across architectural, structural,
            and MEP systems.
          </p>
          <p className="mt-5 font-body text-sm leading-7 text-foreground/90">
            We support real projects—villas, mosques, warehouses, galleries, and infrastructure—delivered as engineered
            assets with traceable decisions.
          </p>
        </Plate>

        <Plate className="md:col-span-5 p-10" compress>
          <EngravedH2>Operating Region</EngravedH2>
          <div className="mt-6 border p-5">
            <div className="font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">UAE</div>
            <div className="mt-3 font-body text-sm">Dubai / Abu Dhabi and surrounding emirates.</div>
          </div>
          <div className="mt-4 border p-5">
            <div className="font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">Credibility</div>
            <div className="mt-3 font-body text-sm">Authority-focused submissions, coordinated drawings, site-ready detailing.</div>
          </div>
          <div className="mt-4 border p-5">
            <div className="font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">Team Expertise</div>
            <div className="mt-3 font-body text-sm">Multi-discipline engineering practice with project management control.</div>
          </div>
        </Plate>
      </div>

      <div className="mt-10">
        <Plate className="p-10" surface="granite">
          <EngravedLabel>Vision</EngravedLabel>
          <div className="mt-5 font-display engraved text-xl uppercase tracking-[0.14em] md:text-2xl">
            “{company.vision}”
          </div>
        </Plate>
      </div>
    </div>
  );
}
