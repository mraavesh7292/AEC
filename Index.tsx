import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { EngravedH1, EngravedH2, EngravedLabel } from "@/components/bedrock/Engraved";
import { Plate } from "@/components/bedrock/Plate";
import { company, projects, services, values } from "@/content/aec";
import { usePageTitle } from "@/components/bedrock/usePageTitle";

import heroImg from "@/assets/projects-villa-alkhawaneej.jpg";
import villaDubaiSouth from "@/assets/projects-villa-dubaisouth.jpg";
import artGallery from "@/assets/projects-art-gallery.jpg";
import warehouse from "@/assets/projects-warehouse.jpg";
import mosque from "@/assets/projects-mosque.jpg";
import pavilion from "@/assets/projects-pavilion.jpg";

const imageMap = {
  villa_alkhawaneej: heroImg,
  villa_dubaisouth: villaDubaiSouth,
  art_gallery: artGallery,
  warehouse,
  mosque,
  pavilion,
} as const;

export default function Index() {
  usePageTitle("AEC — Agile Engineering Consultants");

  return (
    <div>
      {/* 1. Hero – The Authority Block */}
      <section className="relative overflow-hidden border-b bg-background">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Concrete foundation slab"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <EngravedLabel>THE AUTHORITY BLOCK</EngravedLabel>
              <EngravedH1 className="mt-5">{company.name}</EngravedH1>
              <p className="mt-6 max-w-2xl font-ui text-sm uppercase tracking-[0.22em] text-muted-foreground">
                {company.tagline}
              </p>
              <p className="mt-6 max-w-2xl font-body text-base leading-7 text-foreground/90">{company.subtext}</p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild variant="structural" size="lg">
                  <NavLink to="/contact">Get a Quote</NavLink>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <NavLink to="/projects">Project Archive</NavLink>
                </Button>
              </div>
            </div>

            <div className="md:col-span-4">
              <Plate surface="granite" className="p-6">
                <EngravedLabel>Scope</EngravedLabel>
                <div className="mt-4 space-y-3 font-ui text-xs uppercase tracking-[0.26em] text-foreground">
                  <div className="border p-3">Architecture</div>
                  <div className="border p-3">Structural Design</div>
                  <div className="border p-3">MEP Design</div>
                  <div className="border p-3">Project Management</div>
                </div>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction – Who We Are */}
      <section className="mx-auto max-w-[1400px] px-6 py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <Plate className="md:col-span-5 p-8" surface="granite">
            <EngravedLabel>Who We Are</EngravedLabel>
            <EngravedH2 className="mt-4">Architectural Engineering Consultancy</EngravedH2>
            <p className="mt-6 font-body text-sm leading-7 text-foreground/90">
              AEC operates as a compliance-driven engineering consultancy in the UAE—engineering architectural intent into
              buildable systems, checked against authority requirements and site realities.
            </p>
          </Plate>

          <Plate className="md:col-span-7 p-8" compress>
            <EngravedLabel>Expertise</EngravedLabel>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.key} className="border p-5">
                  <div className="font-display engraved text-sm uppercase tracking-[0.14em]">{s.title}</div>
                  <p className="mt-3 font-body text-sm leading-6 text-foreground/90">{s.description}</p>
                </div>
              ))}
            </div>
          </Plate>
        </div>
      </section>

      {/* 3. Services – Engineering Disciplines */}
      <section className="border-y bg-popover">
        <div className="mx-auto max-w-[1400px] px-6 py-14">
          <EngravedLabel>Engineering Disciplines</EngravedLabel>
          <EngravedH2 className="mt-4">Services</EngravedH2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((s) => (
              <Plate key={s.key} className="p-8" compress>
                <div className="font-display engraved text-base uppercase tracking-[0.14em]">{s.title}</div>
                <p className="mt-4 font-body text-sm leading-7 text-foreground/90">{s.description}</p>
              </Plate>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Projects – Built Assets */}
      <section className="mx-auto max-w-[1400px] px-6 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <EngravedLabel>Built Assets</EngravedLabel>
            <EngravedH2 className="mt-4">Featured Projects</EngravedH2>
          </div>
          <Button asChild variant="structural" size="sm">
            <NavLink to="/projects">Open Archive</NavLink>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p) => (
            <Plate key={p.slug} className="overflow-hidden" compress>
              <img
                src={imageMap[p.imageKey]}
                alt={`${p.title} — ${p.location}`}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="border-t p-6">
                <div className="font-display engraved text-sm uppercase tracking-[0.14em]">{p.title}</div>
                <div className="mt-2 font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">{p.location}</div>
              </div>
            </Plate>
          ))}
        </div>
      </section>

      {/* 5. Core Values – Engineering Principles */}
      <section className="border-y bg-popover">
        <div className="mx-auto max-w-[1400px] px-6 py-14">
          <EngravedLabel>Engineering Principles</EngravedLabel>
          <EngravedH2 className="mt-4">Core Values</EngravedH2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((v) => (
              <Plate key={v.title} className="p-8" surface="granite" compress>
                <div className="font-display engraved text-base uppercase tracking-[0.14em]">{v.title}</div>
                <p className="mt-4 font-body text-sm leading-7 text-foreground/90">{v.text}</p>
              </Plate>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Vision Section */}
      <section className="mx-auto max-w-[1400px] px-6 py-14">
        <Plate className="p-10 md:p-14" surface="granite">
          <EngravedLabel>Vision</EngravedLabel>
          <div className="mt-6 font-display engraved text-xl uppercase tracking-[0.14em] md:text-2xl">
            “{company.vision}”
          </div>
        </Plate>
      </section>

      {/* 7. CTA – Engage the System */}
      <section className="border-t bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <Plate className="p-10 md:p-14" compress>
            <EngravedLabel>Engage the System</EngravedLabel>
            <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="font-display engraved text-2xl uppercase tracking-[0.14em] md:text-3xl">
                  Start Your Project With AEC
                </div>
                <p className="mt-4 max-w-2xl font-body text-sm leading-7 text-foreground/90">
                  Submit requirements. Receive a structured response. Move to engineered deliverables.
                </p>
              </div>
              <Button asChild variant="structuralFilled" size="lg">
                <NavLink to="/contact">Contact Us</NavLink>
              </Button>
            </div>
          </Plate>
        </div>
      </section>
    </div>
  );
}
