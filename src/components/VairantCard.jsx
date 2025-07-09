const VariantCard = ({ variant }) => {
    const title = variant.name || "Room Option";
  
    const displayMap = {};
    if (Array.isArray(variant.display_properties)) {
      variant.display_properties.forEach(prop => {
        displayMap[prop.name] = prop.value;
      });
    }
  
    const bed = displayMap["bed_type"] || "Bed info N/A";
    const capacity = displayMap["adult_occupancy"] || "Guest info N/A";
    const meal = displayMap["meals_included"] || "";
  
    const price = Math.round(variant?.total_price?.discounted_price || 0);
    const original = Math.round(variant?.total_price?.total_price || price);
    const discount = original > price ? Math.round(((original - price) / original) * 100) : 0;
  
    return (
      <div className="border rounded-md p-4 shadow-sm mb-3 bg-white">
        <ul className="text-sm space-y-1">
          <li>🍽️ {meal}</li>
          <li>🛌 {bed}</li>
          <li>👥 {capacity}</li>
        </ul>
  
        <div className="mt-3 text-sm text-gray-500">
          Price for 1 night (incl. taxes & fees)
        </div>
  
        <div className="flex items-center justify-between mt-1">
          <div>
            {original > price && (
              <span className="line-through text-gray-400 mr-2">RM{original}</span>
            )}
            <span className="font-semibold text-lg text-blue-600">RM{price}</span>
          </div>
          {discount > 0 && (
            <span className="text-xs font-semibold text-white bg-blue-600 rounded px-2 py-1">
              {discount}% off
            </span>
          )}
        </div>
  
        <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
          Select
        </button>
      </div>
    );
  };
  
  export default VariantCard;
  