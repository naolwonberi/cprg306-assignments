"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  // From Week 4
  const [quantity, setQuantity] = useState(1); // initial 1

  const increment = () => setQuantity((q) => Math.min(20, q + 1)); // max 20
  const decrement = () => setQuantity((q) => Math.max(1, q - 1)); // min 1

  const handleSubmit = (event) => {
    event.preventDefault(); // don’t reload the page

    const item = {
      name: name.trim(),
      quantity,
      category,
    };

    console.log("New item:", item);
    alert(
      `Item: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`
    );

    // Reset to initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded border border-gray-200 p-4 bg-white"
    >
      {/* NAME */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Item Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., milk, 4 L 🥛"
          className="w-full rounded border px-3 py-2"
        />
      </div>

      {/* QUANTITY (from Week 4) */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Quantity (1–20)
        </label>

        <p className="mb-3">
          <span className="text-sm text-gray-600">Current:</span>{" "}
          <span className="text-xl font-semibold">{quantity}</span>
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="rounded px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="rounded px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white disabled:bg-blue-200"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <p className="mt-2 text-xs text-gray-500">Allowed range: 1–20</p>
      </div>

      {/* CATEGORY */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded border px-3 py-2 bg-white"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="rounded bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2"
      >
        Add Item
      </button>
    </form>
  );
}
