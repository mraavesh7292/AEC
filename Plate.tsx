import * as React from "react";
import { cn } from "@/lib/utils";

type PlateProps = React.ComponentProps<"section"> & {
  surface?: "basalt" | "granite";
  compress?: boolean;
};

export function Plate({ className, surface = "basalt", compress = false, ...props }: PlateProps) {
  return (
    <section
      className={cn(
        "border",
        surface === "basalt" ? "bg-card" : "bg-popover",
        compress && "plate-compress",
        className,
      )}
      {...props}
    />
  );
}
