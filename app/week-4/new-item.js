"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1); // initial 1

  const increment = () => {
    // max 20
    setQuantity((q) => Math.min(20, q + 1));
  };

  const decrement = () => {
    // min 1
    setQuantity((q) => Math.max(1, q - 1));
  };

  return (
    <section className="rounded border border-gray-200 p-4 bg-white">
      <p className="mb-3">
        <span className="text-sm text-gray-600">Quantity:</span>{" "}
        <span className="text-xl font-semibold">{quantity}</span>
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="rounded px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
          aria-label="Decrease quantity"
        >
          −
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className="rounded px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white disabled:bg-blue-200"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <p className="mt-2 text-xs text-gray-500">Allowed range: 1–20</p>
    </section>
  );
}
