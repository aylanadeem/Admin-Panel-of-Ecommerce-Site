import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
  const { images = [], name, productId, description, price } = location.state || {};

  return (
    <div className="min-h-screen bg-white pl-10 pt-5">
      <h1 className="font-bold text-xl mb-4">Product Details</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex space-x-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${name} image ${index + 1}`}
                className="w-32 h-32 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl">{name}</h2>
          <p className="text-gray-500 mb-2">Product ID: {productId}</p>
          <p className="text-gray-500 mb-4">{description}</p>
          <p className="font-bold text-2xl">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
