// type: tee | tank | shorts | hoodie | cap
// To use real photos later, add  image: "/photos/name.jpg"  to any product.
export const products = [
  { id: 1, name: "LTG Heat Tee", type: "tee", price: 25000, body: "#f5f2ee", ink: "#e10600", drop: true },
  { id: 2, name: "Blackout Tee", type: "tee", price: 25000, body: "#111111", ink: "#ffffff", drop: true },
  { id: 3, name: "Heat Tank", type: "tank", price: 17777, body: "#ffffff", ink: "#e10600", drop: true },
  { id: 4, name: "Red Rage Shorts", type: "shorts", price: 27000, body: "#e10600", ink: "#111111", drop: true },
  { id: 5, name: "Midnight Hoodie", type: "hoodie", price: 45000, body: "#1b1b1b", ink: "#e10600", drop: true, soon: true },
  { id: 6, name: "Graphic Tee V2", type: "tee", price: 28000, body: "#d9d4cc", ink: "#111111", drop: true, soon: true },
  { id: 7, name: "LTG Cap", type: "cap", price: 15000, body: "#111111", ink: "#ffffff" },
  { id: 8, name: "Crimson Hoodie", type: "hoodie", price: 48000, body: "#c40500", ink: "#ffffff" },
  { id: 9, name: "Street Tank", type: "tank", price: 18500, body: "#111111", ink: "#e10600" },
  { id: 10, name: "Off-White Shorts", type: "shorts", price: 26000, body: "#f5f2ee", ink: "#e10600" },
];

export const categories = [
  { key: "all", label: "All" },
  { key: "tee", label: "Tees" },
  { key: "tank", label: "Tanks" },
  { key: "shorts", label: "Shorts" },
  { key: "hoodie", label: "Hoodies" },
  { key: "cap", label: "Caps" },
];

export const sizes = ["S", "M", "L", "XL"];
