import { Minus, Plus, ShoppingBag, Zap } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const { open, setOpen, items, add, remove, total } = useCart();
  const deliveryFree = total >= 99;
  const delivery = deliveryFree ? 0 : 25;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b bg-muted/40 px-5 py-4">
          <SheetTitle className="flex items-center gap-2 text-base">
            <ShoppingBag className="h-5 w-5" /> My Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="text-6xl">🛒</div>
            <div className="font-bold">Your cart is empty</div>
            <p className="text-sm text-muted-foreground">
              Add some fresh groceries to get started.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-yellow-foreground">
              <Zap className="h-4 w-4 fill-current" />
              Delivery in 9 minutes
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="space-y-4">
                {items.map(({ product, qty }) => (
                  <div key={product.id} className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-muted text-2xl">
                      {product.emoji}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold">{product.name}</div>
                      <div className="text-xs text-muted-foreground">{product.unit}</div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-primary px-1.5 py-1 text-primary-foreground">
                      <button
                        onClick={() => remove(product.id)}
                        className="flex h-6 w-6 items-center justify-center rounded hover:bg-white/15"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-[1ch] text-sm font-bold">{qty}</span>
                      <button
                        onClick={() => add(product)}
                        className="flex h-6 w-6 items-center justify-center rounded hover:bg-white/15"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="w-14 text-right text-sm font-bold">
                      ₹{qty * product.price}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2 rounded-xl border bg-muted/40 p-4 text-sm">
                <div className="flex justify-between">
                  <span>Item total</span>
                  <span className="font-semibold">₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-semibold">
                    {deliveryFree ? (
                      <span className="text-primary">FREE</span>
                    ) : (
                      `₹${delivery}`
                    )}
                  </span>
                </div>
                <div className="mt-2 flex justify-between border-t pt-2 text-base font-extrabold">
                  <span>To pay</span>
                  <span>₹{total + delivery}</span>
                </div>
                {!deliveryFree && (
                  <div className="text-xs text-muted-foreground">
                    Add ₹{99 - total} more for free delivery.
                  </div>
                )}
              </div>
            </div>

            <div className="border-t bg-card px-5 py-4">
              <Button className="h-12 w-full rounded-xl bg-primary text-base font-bold text-primary-foreground hover:bg-primary/90">
                Proceed to checkout · ₹{total + delivery}
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
