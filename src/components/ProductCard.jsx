import React from "react";
import { Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  const productImage = product?.image?.thumbnail || "default-image-url";
  const productAlt = product?.image?.alt || "Product Image";

  return (
    <div className="flex flex-col justify-center bg-base-100 rounded-tr-3xl rounded-bl-3xl">
      <div className="flex gap-2.5 justify-between p-4 w-full">
        <div className="flex flex-col text-base font-bold leading-4 text-center uppercase whitespace-nowrap">
          <div className="justify-center px-3.5 py-1 bg-white rounded-lg text-base-900 uppercase shadow-lg shadow-base-200">
            NEW
          </div>
          <div className="justify-center px-3.5 py-1 mt-2 text-white bg-accent rounded-lg uppercase shadow-lg shadow-base-200">
            -50%
          </div>
        </div>
        <button
          className="flex justify-center items-center p-1.5 my-auto w-8 h-8 bg-white shadow-lg rounded-[32px] hover:scale-110 hover:shadow-xl duration-300"
          aria-label="Add to Wishlist"
        >
          <Heart className="w-6 h-6" />
        </button>
      </div>
      <figure className="w-full">
        <img
          src={productImage}
          alt={productAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </figure>
      <div className="flex flex-col items-center px-4 py-6 w-full">
        <p className="self-stretch text-xl font-bold leading-4 text-center uppercase text-stone-700">
          {product?.name || "Product Name"}
        </p>
        <div className="flex gap-3 mt-2 text-sm leading-5 whitespace-nowrap">
          <p className="font-semibold text-neutral-900">
            {product?.discount
              ? `$${product.discount}`
              : `$${product?.price || "0.00"}`}
          </p>
          <p className="text-base-700 line-through">
            {product?.discount ? `$${product?.price}` : null}
          </p>
        </div>
        <div className="flex gap-2 justify-center mt-2">
          <div className="shrink-0 w-4 h-4 bg-teal-400 rounded-xl" />
          <div className="shrink-0 w-4 h-4 bg-pink-600 rounded-xl" />
          <div className="shrink-0 w-4 h-4 bg-amber-100 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
