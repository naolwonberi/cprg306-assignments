export default function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    if (onSelect) onSelect({ name, quantity, category });
  };

  return (
    <li
      onClick={handleClick}
      className="border p-2 rounded cursor-pointer hover:bg-gray-50"
    >
      <p className="font-medium">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}
