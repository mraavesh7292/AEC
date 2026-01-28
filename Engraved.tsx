import * as React from "react";
import { cn } from "@/lib/utils";

export function EngravedH1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "font-display engraved uppercase leading-[0.9] tracking-[0.12em] text-3xl sm:text-4xl md:text-5xl",
        className,
      )}
      {...props}
    />
  );
}

export function EngravedH2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-display engraved uppercase tracking-[0.14em] text-xl sm:text-2xl md:text-3xl",
        className,
      )}
      {...props}
    />
  );
}

export function EngravedLabel({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "font-ui uppercase tracking-[0.22em] text-xs text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
