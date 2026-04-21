import { Minus, Plus } from "lucide-react";
import type { Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { add, remove, qtyOf } = useCart();
  const qty = qtyOf(product.id);
  const off = product.mrp ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;

  return (
    <div className="group relative flex flex-col rounded-2xl border bg-card p-3 shadow-[var(--shadow-card)] transition-[var(--transition-smooth)] hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      {off > 0 && (
        <div className="absolute left-0 top-2 rounded-r-md bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">
          {off}% OFF
        </div>
      )}
      <div className="flex h-28 items-center justify-center rounded-xl bg-muted text-6xl">
        {product.emoji}
      </div>
      <div className="mt-2 inline-flex w-fit items-center gap-1 rounded bg-secondary px-1.5 py-0.5 text-[10px] font-bold text-secondary-foreground">
        ⚡ {product.eta}
      </div>
      <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-tight">{product.name}</h3>
      <p className="text-xs text-muted-foreground">{product.unit}</p>
      <div className="mt-auto flex items-center justify-between pt-3">
        <div>
          <div className="text-base font-extrabold">₹{product.price}</div>
          {product.mrp && (
            <div className="text-xs text-muted-foreground line-through">₹{product.mrp}</div>
          )}
        </div>
        {qty === 0 ? (
          <button
            onClick={() => add(product)}
            className="rounded-lg border-2 border-primary bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            ADD
          </button>
        ) : (
          <div className="flex items-center gap-2 rounded-lg bg-primary px-1.5 py-1 text-primary-foreground">
            <button
              onClick={() => remove(product.id)}
              aria-label="decrease"
              className="flex h-6 w-6 items-center justify-center rounded hover:bg-white/15"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="min-w-[1ch] text-sm font-bold">{qty}</span>
            <button
              onClick={() => add(product)}
              aria-label="increase"
              className="flex h-6 w-6 items-center justify-center rounded hover:bg-white/15"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
