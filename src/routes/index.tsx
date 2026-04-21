import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/storefront/Header";
import { Hero } from "@/components/storefront/Hero";
import { CategoryRail } from "@/components/storefront/CategoryRail";
import { ProductCard } from "@/components/storefront/ProductCard";
import { CartDrawer } from "@/components/storefront/CartDrawer";
import { categories, products } from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "quickbasket — Groceries delivered in 9 minutes" },
      {
        name: "description",
        content:
          "Order fresh fruits, vegetables, dairy, snacks and daily essentials online. Delivered to your door in minutes.",
      },
      { property: "og:title", content: "quickbasket — Groceries in 9 minutes" },
      {
        property: "og:description",
        content: "Fresh groceries & daily essentials delivered to your door in minutes.",
      },
    ],
  }),
  component: Index,
});

function Storefront() {
  const [active, setActive] = useState<string | null>(null);

  const grouped = useMemo(() => {
    const list = active ? products.filter((p) => p.category === active) : products;
    const map = new Map<string, typeof products>();
    for (const p of list) {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category)!.push(p);
    }
    return [...map.entries()].map(([catId, items]) => ({
      cat: categories.find((c) => c.id === catId)!,
      items,
    }));
  }, [active]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategoryRail active={active} onSelect={setActive} />

      <main className="mx-auto max-w-7xl px-4 pb-16">
        {grouped.map(({ cat, items }) => (
          <section key={cat.id} className="mb-10">
            <div className="mb-4 flex items-end justify-between">
              <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">
                <span className="mr-2">{cat.emoji}</span>
                {cat.name}
              </h2>
              <span className="text-sm text-muted-foreground">{items.length} items</span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t bg-muted/40 py-8 text-center text-sm text-muted-foreground">
        <div>quickbasket · Groceries in minutes · Demo storefront</div>
      </footer>

      <CartDrawer />
    </div>
  );
}

function Index() {
  return (
    <CartProvider>
      <Storefront />
    </CartProvider>
  );
}
