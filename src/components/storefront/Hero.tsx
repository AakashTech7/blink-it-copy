import heroImg from "@/assets/hero-groceries.jpg";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-10 md:grid-cols-2 md:py-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-yellow">
            ⚡ Delivery in 9 minutes
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-yellow-foreground md:text-6xl">
            Groceries delivered <span className="text-primary">in minutes.</span>
          </h1>
          <p className="mt-3 max-w-md text-base text-brand-yellow-foreground/80 md:text-lg">
            Fresh fruits, daily essentials, snacks & more — at your door before the kettle boils.
          </p>
        </div>
        <div className="relative">
          <img
            src={heroImg}
            alt="Fresh groceries in a paper bag"
            width={1280}
            height={768}
            className="rounded-3xl shadow-[var(--shadow-elegant)]"
          />
        </div>
      </div>
    </section>
  );
}
