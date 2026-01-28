import { EngravedH1, EngravedH2, EngravedLabel } from "@/components/bedrock/Engraved";
import { Plate } from "@/components/bedrock/Plate";
import { services } from "@/content/aec";
import { usePageTitle } from "@/components/bedrock/usePageTitle";

const bayText: Record<(typeof services)[number]["key"], string> = {
  architecture:
    "Architectural layouts and authority-ready submissions engineered for buildability, coordination, and site control.",
  structural:
    "Structural design engineered from loads to detailing—calculations, drawings, and reinforcement logic aligned to compliance.",
  mep: "MEP engineering coordinated across systems with maintainable routing, compliant sizing, and disciplined documentation.",
  pm: "Project management focused on schedule control, approvals, discipline coordination, and measurable site progress.",
};

export default function Services() {
  usePageTitle("AEC — Services");

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-14">
      <EngravedLabel>ENGINEERING DISCIPLINES</EngravedLabel>
      <EngravedH1 className="mt-5">Services</EngravedH1>

      <div className="mt-10 space-y-8">
        {services.map((s) => (
          <Plate key={s.key} className="p-10" surface="granite">
            <EngravedH2>{s.title}</EngravedH2>
            <p className="mt-5 max-w-3xl font-body text-sm leading-7 text-foreground/90">{bayText[s.key]}</p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="border p-5">
                <div className="font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">Deliverables</div>
                <div className="mt-3 font-body text-sm">Drawings, specifications, and submission packages.</div>
              </div>
              <div className="border p-5">
                <div className="font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">Compliance</div>
                <div className="mt-3 font-body text-sm">Authority requirements mapped and verified.</div>
              </div>
              <div className="border p-5">
                <div className="font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">Coordination</div>
                <div className="mt-3 font-body text-sm">Disciplines aligned to reduce site conflict.</div>
              </div>
            </div>
          </Plate>
        ))}
      </div>
    </div>
  );
}
