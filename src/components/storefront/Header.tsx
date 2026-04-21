import { MapPin, Search, ShoppingCart, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { count, setOpen, total } = useCart();
  return (
    <header className="sticky top-0 z-40 bg-brand-yellow text-brand-yellow-foreground shadow-[var(--shadow-card)]">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:gap-6">
        <div className="flex shrink-0 items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-brand-yellow">
            <Zap className="h-5 w-5 fill-current" />
          </div>
          <span className="hidden text-xl font-extrabold tracking-tight sm:block">
            quickbasket
          </span>
        </div>

        <div className="hidden min-w-0 shrink-0 items-center gap-2 border-l border-foreground/15 pl-4 md:flex">
          <div>
            <div className="text-xs font-bold uppercase">Delivery in 9 minutes</div>
            <div className="flex items-center gap-1 text-xs opacity-80">
              <MapPin className="h-3 w-3" />
              <span className="max-w-[180px] truncate">Home — 221B Baker Street</span>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder='Search "milk", "atta", "chips"…'
            className="h-11 rounded-xl border-transparent bg-background pl-9 text-foreground"
          />
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="h-11 rounded-xl bg-primary px-3 font-bold text-primary-foreground hover:bg-primary/90 sm:px-5"
        >
          <ShoppingCart className="h-5 w-5" />
          {count > 0 ? (
            <span className="ml-2 hidden sm:inline">
              {count} item{count > 1 ? "s" : ""} · ₹{total}
            </span>
          ) : (
            <span className="ml-2 hidden sm:inline">My Cart</span>
          )}
        </Button>
      </div>
    </header>
  );
}
