import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/data/catalog";

type CartItem = { product: Product; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (p: Product) => void;
  remove: (id: string) => void;
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  qtyOf: (id: string) => number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = (p: Product) =>
    setItems((cur) => {
      const ex = cur.find((i) => i.product.id === p.id);
      if (ex) return cur.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...cur, { product: p, qty: 1 }];
    });

  const remove = (id: string) =>
    setItems((cur) =>
      cur
        .map((i) => (i.product.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    );

  const { count, total } = useMemo(() => {
    let c = 0;
    let t = 0;
    for (const i of items) {
      c += i.qty;
      t += i.qty * i.product.price;
    }
    return { count: c, total: t };
  }, [items]);

  const qtyOf = (id: string) => items.find((i) => i.product.id === id)?.qty ?? 0;

  return (
    <Ctx.Provider value={{ items, add, remove, count, total, open, setOpen, qtyOf }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be inside CartProvider");
  return c;
}
