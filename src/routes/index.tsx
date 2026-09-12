import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Subdomain Takeover PoC - Anshu Bind" },
      { name: "description", content: "Proof of concept demonstrating a subdomain takeover vulnerability by Anshu Bind." },
      { property: "og:title", content: "Subdomain Takeover PoC - Anshu Bind" },
      { property: "og:description", content: "Proof of concept demonstrating a subdomain takeover vulnerability by Anshu Bind." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="max-w-2xl text-center space-y-6">
        <span className="inline-block rounded-full border border-destructive/40 bg-destructive/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-destructive">
          Security PoC
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          This is a classic example of subdomain takeover
        </h1>
        <p className="text-lg text-muted-foreground">
          And this is a PoC of subdomain takeover.
        </p>
        <p className="text-base font-semibold text-foreground">
          Takeover by Anshu Bind
        </p>
      </div>
    </main>
  );
}
