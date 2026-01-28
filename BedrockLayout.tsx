import { NavLink as RouterNavLink, Outlet } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import logoMark from "@/assets/aec-logo-half.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function BedrockLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-popover">
        <div className="mx-auto flex w-full max-w-[1400px] items-stretch gap-6 px-6">
          <div className="flex items-center gap-4 border-r pr-6">
            <img
              src={logoMark}
              alt="Agile Engineering Consultants (AEC) logo mark"
              className="h-10 w-10 object-contain"
              loading="eager"
            />
            <div className="hidden md:block">
              <div className="font-display engraved text-sm tracking-[0.18em]">AEC</div>
              <div className="font-ui text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
                Engineered Bedrock
              </div>
            </div>
          </div>

          <nav className="flex flex-1 items-stretch justify-between">
            <div className="flex items-stretch gap-1">
              {navItems.map((item) => (
                <RouterNavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center border-x border-transparent px-4 font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground",
                      isActive && "border-border text-foreground",
                    )
                  }
                >
                  {item.label}
                </RouterNavLink>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <div className="font-ui text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
                UAE / Compliance
              </div>
              <Button asChild variant="structural" size="sm">
                <NavLink to="/contact">Get a Quote</NavLink>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="bedrock-seam">
        <Outlet />
      </main>

      <footer className="border-t bg-popover">
        <div className="mx-auto grid min-h-[45vh] max-w-[1400px] grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 border p-5">
              <img
                src={logoMark}
                alt="AEC logo"
                className="h-12 w-12 object-contain"
                loading="lazy"
              />
              <div>
                <div className="font-display engraved text-sm tracking-[0.18em]">AGILE ENGINEERING CONSULTANTS</div>
                <div className="font-ui text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Architectural / Structural / MEP
                </div>
              </div>
            </div>

            <div className="mt-6 border p-5">
              <div className="font-ui text-xs uppercase tracking-[0.24em] text-muted-foreground">Address</div>
              <div className="mt-3 font-body text-sm leading-6">
                Dubai, United Arab Emirates
                <br />
                P.O. Box 89804
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="border p-5">
              <div className="font-ui text-xs uppercase tracking-[0.24em] text-muted-foreground">Navigation</div>
              <ul className="mt-4 space-y-3">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className="font-ui text-xs uppercase tracking-[0.26em] text-foreground underline-offset-4 hover:underline"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="border p-5">
              <div className="font-ui text-xs uppercase tracking-[0.24em] text-muted-foreground">Contact</div>
              <div className="mt-4 space-y-3 font-body text-sm">
                <div>info@agileeng.net</div>
                <div>Tel. 04 339 9925</div>
              </div>
              <div className="mt-6">
                <Button asChild variant="structuralFilled" size="lg">
                  <NavLink to="/contact">Contact / Request</NavLink>
                </Button>
              </div>
            </div>

            <div className="mt-6 border p-5">
              <div className="flex flex-wrap gap-6">
                <a className="font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground underline-offset-4 hover:underline" href="#">
                  Privacy
                </a>
                <a className="font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground underline-offset-4 hover:underline" href="#">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
