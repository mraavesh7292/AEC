import { EngravedH1, EngravedLabel } from "@/components/bedrock/Engraved";
import { Plate } from "@/components/bedrock/Plate";
import { projects } from "@/content/aec";
import { usePageTitle } from "@/components/bedrock/usePageTitle";

import villaAlKhawaneej from "@/assets/projects-villa-alkhawaneej.jpg";
import villaDubaiSouth from "@/assets/projects-villa-dubaisouth.jpg";
import artGallery from "@/assets/projects-art-gallery.jpg";
import warehouse from "@/assets/projects-warehouse.jpg";
import mosque from "@/assets/projects-mosque.jpg";
import pavilion from "@/assets/projects-pavilion.jpg";

const imageMap = {
  villa_alkhawaneej: villaAlKhawaneej,
  villa_dubaisouth: villaDubaiSouth,
  art_gallery: artGallery,
  warehouse,
  mosque,
  pavilion,
} as const;

export default function Projects() {
  usePageTitle("AEC — Project Archive");

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-14">
      <EngravedLabel>PROJECT ARCHIVE</EngravedLabel>
      <EngravedH1 className="mt-5">Project Archive</EngravedH1>

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
    </div>
  );
}
