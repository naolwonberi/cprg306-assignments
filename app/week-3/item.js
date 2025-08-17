// app/week-3/item.js
export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 rounded">
      <p className="font-medium">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}
