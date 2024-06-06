"use client";
import Carousel from "@/components/Carousel";
import Headline from "@/components/Headline";
import LatestArrival from "@/components/LatestArrival";
import ShoCase from "@/components/ShoCase";
import ShopCategory from "@/components/ShopCategory";
import BottomNav from "@/components/navbar/BottomNav";
import Modal from "@/components/ui/Modal";
import { Product } from "@/types/type";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  return (
    <main className="relative">
      {/* Carsoule section  */}
      <Carousel />
      <div className="py-5 mt-3 mb-10">
        <ShopCategory />
        <LatestArrival handleCardClick={handleCardClick} />
      </div>
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
      <Headline />
      <ShoCase />
      <div className="lg:hidden md:block sm:block ">
        <BottomNav />
      </div>
    </main>
  );
}
