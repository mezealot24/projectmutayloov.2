import React, { useState } from "react";
// icons
import { Star } from "lucide-react";
import { Share2 } from "lucide-react";
import { Heart } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { ShoppingCart } from "lucide-react";

// components
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

//
import useCart from "@/hooks/useCart";

const ProductAction = ({ product }) => {
  const { toast } = useToast();
  const { addItem } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleAddToCart = () => {
    addItem(product._id, quantity);
    toast({
      title: "Product added to cart successfully.",
      description: `Added ${quantity} ${product.name} to cart`,
      duration: 3000,
      variant: "success",
    });
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  // Star rating logic
  const filledStars = Math.floor(product.rating);
  const emptyStars = 5 - filledStars;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          {Array.from({ length: filledStars }, (_, index) => (
            <Star
              fill="#FFC107"
              className="w-4 h-4 text-[#FFC107]"
              key={index}
            />
          ))}
          {Array.from({ length: emptyStars }, (_, index) => (
            <Star
              className="w-4 h-4 text-[#FFC107]"
              key={index + filledStars}
            />
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <p>Share</p>
          <Share2 className="w-4 h-4" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">{product.price} Bath</p>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="relative flex items-center justify-center focus:outline-none"
          >
            <Heart
              className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                isFavorite
                  ? "text-[#FFC107] transform scale-125"
                  : "text-gray-400"
              }`}
              fill={isFavorite ? "#FFC107" : "none"}
              stroke={isFavorite ? "#FFC107" : "currentColor"}
            />
          </button>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-base-600">Power</p>
        <p className="text-xl font-extrabold uppercase">
          {product.power}{" "}
          {product.power === "luck"
            ? "🍀"
            : product.power === "love"
            ? "❤️"
            : product.power === "success"
            ? "🏆"
            : product.power === "strength"
            ? "💪"
            : ""}
        </p>
      </div>

      {/* color */}
      <div className="flex items-center gap-4 my-4">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold text-base-600">Choose Color</p>
          <ChevronRight className="w-4 h-4 text-base-600" />
        </div>
        <div className="flex justify-center gap-2">
          {["teal-400", "pink-600", "amber-100"].map((color, index) => (
            <label
              key={index}
              className={`w-6 h-6 rounded-full cursor-pointer bg-${color} ${
                selectedColor === color
                  ? "ring-2 ring-offset-2 ring-gray-800"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="color"
                value={color}
                className="hidden"
                onChange={() => setSelectedColor(color)}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-semibold">Select Size</p>
          <p className="text-sm cursor-pointer">Size Guide</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {["10", "20", "30", "40", "50"].map((size, index) => (
            <label
              key={index}
              className={`w-16 h-10 flex items-center justify-center border rounded-md cursor-pointer ${
                selectedSize === size ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
            >
              <input
                type="radio"
                name="size"
                value={size}
                className="hidden"
                onChange={() => setSelectedSize(size)}
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      {/* quantity */}
      <div className="flex gap-4 items-center mt-4 lg:mt-8">
        <p>Quantity</p>
        <div className="flex items-center gap-2 border rounded-lg">
          <Button
            variant="none"
            size="icon"
            onClick={decreaseQuantity}
            className="w-8"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="px-2 py-1.5 text-lg font-semibold">{quantity}</span>
          <Button
            variant="none"
            size="icon"
            onClick={increaseQuantity}
            className="w-8"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <p>{product.qty_instock} pieces available</p>
      </div>

      {/* add to cart and buy */}
      <div className="flex gap-4 mt-4 lg:mt-8">
        <Button
          variant="accent"
          onClick={handleAddToCart}
          className="w-48 flex items-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <p>Add to cart</p>
        </Button>
        <Button variant="default" className="w-48 flex items-center gap-2">
          <p>Buy now</p>
        </Button>
      </div>
    </section>
  );
};

export default ProductAction;
