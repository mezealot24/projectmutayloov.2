import React from "react";
import { Plus, Minus, Trash, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import { Separator } from "@/components/ui/separator";

const CartItem = ({ item, selectItems, setSelectItems }) => {
  const { updateItem, removeItem } = useCart();
  const product = item.product;

  const handleSelect = () => {
    setSelectItems((prev) => {
      if (prev.includes(item.product._id)) {
        return prev.filter((id) => id !== item.product._id);
      } else {
        return [...prev, item.product._id];
      }
    });
  };

  const increaseQuantity = () => {
    updateItem(item.product._id, item.quantity + 1);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateItem(item.product._id, item.quantity - 1);
    }
  };

  const handleRemove = async () => {
    await removeItem(item.product._id);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-8 lg:col-span-8">
          <div className="flex gap-4">
            <div className="flex items-center md:px-2 lg:px-4">
              <input
                type="checkbox"
                checked={selectItems.includes(product._id)}
                onChange={handleSelect}
                className="w-4 h-4 md:w-4 md:h-4 rounded border-gray-300 text-checkbox focus:ring-checkbox checked:bg-checkbox checked:border-checkbox"
              />
            </div>
            <figure className="min-w-32 min-h-32 max-w-32 max-h-32 lg:min-w-56 lg:min-h-56 lg:max-w-56 lg:max-h-56">
              <img
                src={product.image.thumbnail}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="w-full flex flex-col gap-2 justify-center">
              <p className="text-lg lg:text-2xl font-bold">{product.name}</p>
              <p className="hidden md:block text-sm lg:text-base">
                Color: {product.color}
              </p>
              <p className="text-sm font-medium lg:hidden">
                {product.price} Bath
              </p>
            </div>
          </div>
        </div>
        <p className="hidden col-span-1 text-xl font-medium lg:flex justify-center items-center">
          {product.price} Bath
        </p>
        <div className="col-span-4 sm:col-span-3 lg:col-span-2 flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <div className="flex justify-end sm:hidden">
              <Button variant="ghost" size="icon" onClick={handleRemove}>
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="flex items-center gap-2 border rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                className="w-6 md:w-8"
                onClick={decreaseQuantity}
              >
                <Minus className="w-2 h-2 md:w-4 md:h-4" />
              </Button>
              <span className="md:px-2 py-1.5 text-sm md:text-lg font-semibold">
                {item.quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 md:w-8"
                onClick={increaseQuantity}
              >
                <Plus className="w-2 h-2 md:w-4 md:h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden col-span-1 sm:flex justify-center items-center">
          <Button variant="destructive" size="icon" onClick={handleRemove}>
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default CartItem;
