export type Product = {
  id: string;
  name: string;
  unit: string;
  price: number;
  mrp?: number;
  eta: string;
  emoji: string;
  category: string;
};

export const categories = [
  { id: "fruits", name: "Fruits & Veggies", emoji: "🥬", color: "oklch(0.92 0.12 140)" },
  { id: "dairy", name: "Dairy & Bread", emoji: "🥛", color: "oklch(0.94 0.06 90)" },
  { id: "snacks", name: "Snacks", emoji: "🍿", color: "oklch(0.93 0.12 60)" },
  { id: "beverages", name: "Beverages", emoji: "🥤", color: "oklch(0.92 0.1 220)" },
  { id: "atta", name: "Atta, Rice & Dal", emoji: "🌾", color: "oklch(0.94 0.1 75)" },
  { id: "masala", name: "Masala & Oils", emoji: "🌶️", color: "oklch(0.92 0.13 35)" },
  { id: "personal", name: "Personal Care", emoji: "🧴", color: "oklch(0.92 0.08 320)" },
  { id: "household", name: "Household", emoji: "🧽", color: "oklch(0.93 0.08 250)" },
];

export const products: Product[] = [
  { id: "p1", name: "Fresh Tomato", unit: "500 g", price: 24, mrp: 35, eta: "8 MINS", emoji: "🍅", category: "fruits" },
  { id: "p2", name: "Onion", unit: "1 kg", price: 38, mrp: 50, eta: "8 MINS", emoji: "🧅", category: "fruits" },
  { id: "p3", name: "Banana Robusta", unit: "6 pcs", price: 42, mrp: 60, eta: "8 MINS", emoji: "🍌", category: "fruits" },
  { id: "p4", name: "Baby Spinach", unit: "100 g", price: 29, eta: "8 MINS", emoji: "🥬", category: "fruits" },
  { id: "p5", name: "Amul Taaza Milk", unit: "500 ml", price: 27, eta: "10 MINS", emoji: "🥛", category: "dairy" },
  { id: "p6", name: "Brown Bread", unit: "400 g", price: 50, mrp: 55, eta: "10 MINS", emoji: "🍞", category: "dairy" },
  { id: "p7", name: "Farm Eggs", unit: "6 pcs", price: 65, mrp: 78, eta: "10 MINS", emoji: "🥚", category: "dairy" },
  { id: "p8", name: "Amul Butter", unit: "100 g", price: 58, eta: "10 MINS", emoji: "🧈", category: "dairy" },
  { id: "p9", name: "Lay's Classic Salted", unit: "52 g", price: 20, eta: "9 MINS", emoji: "🥔", category: "snacks" },
  { id: "p10", name: "Dark Fantasy Choco", unit: "75 g", price: 35, mrp: 40, eta: "9 MINS", emoji: "🍪", category: "snacks" },
  { id: "p11", name: "Haldiram Bhujia", unit: "200 g", price: 60, eta: "9 MINS", emoji: "🌾", category: "snacks" },
  { id: "p12", name: "KitKat 4 Finger", unit: "37 g", price: 40, eta: "9 MINS", emoji: "🍫", category: "snacks" },
  { id: "p13", name: "Coca-Cola", unit: "750 ml", price: 40, mrp: 45, eta: "9 MINS", emoji: "🥤", category: "beverages" },
  { id: "p14", name: "Real Mixed Fruit", unit: "1 L", price: 110, mrp: 130, eta: "9 MINS", emoji: "🧃", category: "beverages" },
  { id: "p15", name: "Red Bull Energy", unit: "250 ml", price: 125, eta: "9 MINS", emoji: "🥫", category: "beverages" },
  { id: "p16", name: "Tata Tea Gold", unit: "250 g", price: 165, mrp: 185, eta: "10 MINS", emoji: "🍵", category: "beverages" },
  { id: "p17", name: "Aashirvaad Atta", unit: "5 kg", price: 245, mrp: 280, eta: "12 MINS", emoji: "🌾", category: "atta" },
  { id: "p18", name: "India Gate Basmati", unit: "1 kg", price: 130, eta: "12 MINS", emoji: "🍚", category: "atta" },
  { id: "p19", name: "Toor Dal", unit: "1 kg", price: 175, mrp: 200, eta: "12 MINS", emoji: "🫘", category: "atta" },
  { id: "p20", name: "Fortune Sunflower Oil", unit: "1 L", price: 145, mrp: 170, eta: "12 MINS", emoji: "🛢️", category: "masala" },
  { id: "p21", name: "MDH Garam Masala", unit: "100 g", price: 75, eta: "10 MINS", emoji: "🌶️", category: "masala" },
  { id: "p22", name: "Tata Salt", unit: "1 kg", price: 28, eta: "10 MINS", emoji: "🧂", category: "masala" },
  { id: "p23", name: "Colgate Strong Teeth", unit: "150 g", price: 95, mrp: 110, eta: "11 MINS", emoji: "🪥", category: "personal" },
  { id: "p24", name: "Dove Soap", unit: "100 g", price: 65, eta: "11 MINS", emoji: "🧼", category: "personal" },
  { id: "p25", name: "Surf Excel Matic", unit: "1 kg", price: 230, mrp: 260, eta: "11 MINS", emoji: "🧺", category: "household" },
  { id: "p26", name: "Vim Dishwash Bar", unit: "300 g", price: 30, eta: "11 MINS", emoji: "🧽", category: "household" },
];
