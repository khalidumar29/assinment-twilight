import { Product } from "@/types/type";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface ModalProps {
  product: Product;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(10);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1); // I think this should be called when the quantity available i am just showing its workable
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white shadow-lg w-full max-w-md md:max-w-3xl relative">
        <button
          className="absolute top-2 right-2 mt-2 mr-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col md:flex-row md:gap-6 group">
          <img
            src={product.imageSrc}
            alt="Product Image"
            width={300}
            className="relative hidden lg:block md:block md:w-1/2 lg:w-1/2 h-auto md:h-full pl-10 py-10 object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
          />
          <div className="absolute w-7 h-7 items-center justify-center hidden md:block lg:block top-[50%] left-5 cursor-pointer rounded-full bg-gray-400">
            <ChevronLeft />
          </div>
          <div className="absolute w-7 h-7 hidden md:block lg:block items-center justify-center top-[50%] right-[45%] cursor-pointer rounded-full bg-gray-400">
            <ChevronRight />
          </div>
          <div className="flex flex-col justify-between ml-2 mr-2 md:ml-4 lg:ml-10 py-10 ">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                {product.title}
              </h2>
              <h3 className="pt-2 text-xl md:text-2xl font-semibold">
                ৳ {product.price}
              </h3>
              <p className="py-4">QTY: {quantity}</p>
              <p className="pt-2 font-thin text-sm">
                SELECT COLOR <span className="text-red-600">*</span>
              </p>
              <div className="flex pt-2 justify-start items-center gap-x-3">
                <button
                  className="w-10 h-10 rounded-full focus:ring-2 focus:ring-red-600 bg-[#facd95]"
                  onClick={handleIncreaseQuantity}
                ></button>
                <button
                  className="w-10 h-10 rounded-full focus:ring-2 focus:ring-red-600 bg-[#4a90e2]"
                  onClick={handleIncreaseQuantity}
                ></button>
                <button
                  className="w-10 h-10 rounded-full focus:ring-2 focus:ring-red-600 bg-[#417505]"
                  onClick={handleIncreaseQuantity}
                ></button>
              </div>
            </div>
            <div className="pt-10 pb-2 md:hidden lg:hidden">
              <hr />
            </div>
            <div className="flex  justify-between items-center gap-2 lg:gap-x-4">
              <button className="md:w-auto bg-white text-neutral-950 border border-neutral-950 flex justify-center items-center w-4/6 h-4 p-5 rounded-md ">
                Add to Cart
              </button>
              <button className="md:w-auto bg-white text-neutral-950 border border-neutral-950 flex justify-center items-center w-4/6 h-4 p-5 rounded-md ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
