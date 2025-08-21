"use client";

import { useState, useEffect } from "react";

// Fetch meals that include a given ingredient
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        ingredient
      )}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    // API returns { meals: [...] } or { meals: null }
    return data.meals ?? [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const list = await fetchMealIdeas(ingredient);
    setMeals(list);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">
        Meal ideas {ingredient ? `for “${ingredient}”` : "(select an item)"}
      </h3>

      {!ingredient && (
        <p className="text-sm text-gray-500">Choose an item to see ideas.</p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-sm text-gray-500">No meals found.</p>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {meals.map((m) => (
          <li key={m.idMeal} className="border rounded p-2">
            <p className="font-medium">{m.strMeal}</p>
            {/* Optional image:
            <img src={m.strMealThumb} alt={m.strMeal} className="mt-1 rounded" />
            */}
          </li>
        ))}
      </ul>
    </div>
  );
}
