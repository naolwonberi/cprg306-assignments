"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items = [], onItemSelect }) {
  const [sortBy, setSortBy] = useState("name"); // "name" | "category"

  const sorted = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    const byCat = a.category.localeCompare(b.category);
    return byCat !== 0 ? byCat : a.name.localeCompare(b.name);
  });

  const btnBase = "px-3 py-1 rounded border text-sm transition-colors";
  const active = "bg-blue-600 text-white border-blue-600";
  const inactive =
    "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200";

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Sort by:</span>
        <button
          className={`${btnBase} ${sortBy === "name" ? active : inactive}`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`${btnBase} ${sortBy === "category" ? active : inactive}`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>

      <ul className="space-y-2">
        {sorted.map((it) => (
          <Item
            key={it.id}
            name={it.name}
            quantity={it.quantity}
            category={it.category}
            onSelect={() => onItemSelect && onItemSelect(it)}
          />
        ))}
      </ul>
    </section>
  );
}
