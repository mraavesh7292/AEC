import { useMemo, useState } from "react";
import { EngravedH1, EngravedLabel } from "@/components/bedrock/Engraved";
import { Plate } from "@/components/bedrock/Plate";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { usePageTitle } from "@/components/bedrock/usePageTitle";

type FormState = {
  name: string;
  email: string;
  phone: string;
  requirements: string;
};

export default function Contact() {
  usePageTitle("AEC — Contact / Get a Quote");
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", requirements: "" });

  const canSubmit = useMemo(() => {
    return Boolean(form.name.trim() && form.email.trim() && form.requirements.trim());
  }, [form]);

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-14">
      <EngravedLabel>ENGAGE / REQUEST</EngravedLabel>
      <EngravedH1 className="mt-5">Contact</EngravedH1>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
        <Plate className="md:col-span-7 p-10" surface="granite">
          <div className="font-display engraved text-base uppercase tracking-[0.14em]">Submit Request</div>
          <p className="mt-4 font-body text-sm leading-7 text-foreground/90">
            Provide project requirements. AEC will respond with a structured process and next steps.
          </p>

          <form
            className="mt-8 space-y-5"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!canSubmit || submitting) return;
              setSubmitting(true);
              try {
                // Frontend-only placeholder: wire to Cloud email/db later.
                await new Promise((r) => setTimeout(r, 650));
                toast({
                  title: "Request recorded",
                  description: "Your submission has been captured for follow-up.",
                });
                setForm({ name: "", email: "", phone: "", requirements: "" });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <div className="mb-2 font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">Full Name</div>
                <Input
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Full Name"
                  autoComplete="name"
                />
              </div>
              <div>
                <div className="mb-2 font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">Email</div>
                <Input
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  placeholder="Email"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div>
                <div className="mb-2 font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">Phone</div>
                <Input
                  value={form.phone}
                  onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                  placeholder="Phone"
                  type="tel"
                  autoComplete="tel"
                />
              </div>
              <div className="md:col-span-2">
                <div className="mb-2 font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">
                  Project Requirements
                </div>
                <Textarea
                  value={form.requirements}
                  onChange={(e) => setForm((s) => ({ ...s, requirements: e.target.value }))}
                  placeholder="Scope, location, timeline, constraints"
                />
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" variant="structuralFilled" size="lg" disabled={!canSubmit || submitting}>
                {submitting ? "Submitting" : "Submit Request"}
              </Button>
            </div>
          </form>
        </Plate>

        <Plate className="md:col-span-5 p-10" compress>
          <div className="font-display engraved text-base uppercase tracking-[0.14em]">Direct</div>
          <div className="mt-6 space-y-4">
            <div className="border p-5">
              <div className="font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">Email</div>
              <div className="mt-3 font-body text-sm">info@agileeng.net</div>
            </div>
            <div className="border p-5">
              <div className="font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">Telephone</div>
              <div className="mt-3 font-body text-sm">04 339 9925</div>
            </div>
            <div className="border p-5">
              <div className="font-ui text-xs uppercase tracking-[0.26em] text-muted-foreground">Region</div>
              <div className="mt-3 font-body text-sm">Dubai / UAE</div>
            </div>
          </div>
        </Plate>
      </div>
    </div>
  );
}
