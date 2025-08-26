import { useState } from "react";

const FoodCard = ({ food }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {food.title} - {food.country}
      </h2>

      <img
        src={food.image}
        alt={food.title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      <p className="text-gray-600 mb-4">{food.description}</p>

      <div>
        <h3
          className="text-xl font-semibold text-gray-700 mt-6 mb-2 cursor-pointer select-none flex items-center justify-between"
          onClick={() => setShowIngredients(!showIngredients)}
        >
          ส่วนผสม
          <span className="text-gray-500 text-sm">
            {showIngredients ? "ซ่อน" : "แสดง"}
          </span>
        </h3>

        <ul
          className={`list-disc list-inside text-gray-600 space-y-1 overflow-hidden transition-all duration-300 ${
            showIngredients ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {food.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3
          className="text-xl font-semibold text-gray-700 mt-6 mb-2 cursor-pointer select-none flex items-center justify-between"
          onClick={() => setShowInstructions(!showInstructions)}
        >
          วิธีทำ
          <span className="text-gray-500 text-sm">
            {showInstructions ? "ซ่อน" : "แสดง"}
          </span>
        </h3>

        <ol
          className={`list-decimal list-inside text-gray-600 space-y-2 overflow-hidden transition-all duration-300 ${
            showInstructions ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {food.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default FoodCard;
