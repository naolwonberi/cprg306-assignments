"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // create an id if NewItem didn't supply one
  const makeId = () => Math.random().toString(36).slice(2, 10);

  function handleAddItem(newItem) {
    const withId = newItem.id ? newItem : { id: makeId(), ...newItem };
    // immutably add new item
    setItems((prev) => [...prev, withId]);
  }

  // remove quantity notes and emojis to form a clean ingredient
  function cleanName(name) {
    // take text before the first comma
    let base = name.split(",")[0];
    // remove most emoji ranges
    const emojiRegex =
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDFFF])+/g;
    base = base.replace(emojiRegex, "");
    return base.trim().toLowerCase();
  }

  function handleItemSelect(item) {
    const ingredient = cleanName(item.name);
    setSelectedItemName(ingredient);
  }

  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping List + Meal Ideas</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: New item form + list */}
        <div className="space-y-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right: meal ideas */}
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
