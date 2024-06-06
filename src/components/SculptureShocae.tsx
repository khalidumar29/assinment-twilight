import { products } from "@/db/data";
import { Product } from "@/types/type";
import SectionContainer from "@/utils/SectionContainer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "./ui/ProductCard";

interface SculptureShoCaseProps {
  handleCardClick: (product: Product) => void;
}

const SculptureShoCase: React.FC<SculptureShoCaseProps> = ({
  handleCardClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + products[0].sculpture.length) %
        products[0].sculpture.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % products[0].sculpture.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <SectionContainer>
      <div className="container mt-12">
        <div className="flex justify-center items-center bg-[#F6F6F6] flex-col md:flex-row lg:flex-row">
          <div className="w-full md:w-2/4 h-2/3 group overflow-hidden">
            <div className="w-full h-full">
              <img
                src="/image_26.webp"
                alt="Image"
                height="620"
                width="800"
                className="w-full md:h-[80vh] lg:max-h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-2/4 h-2/3">
            <div className="relative w-full mx-auto h-[55vh] lg:h-[88vh] pt-5">
              <div className="rounded-xl overflow-hidden h-full relative">
                <div
                  className="flex transition-transform duration-500 h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {products[0].sculpture.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      imageSrc={product.imageSrc}
                      hoverImageSrc={product.hoverImageSrc}
                      label={product.label}
                      price={product.price}
                      old_price={product.old_price}
                      product={product}
                      onCardClick={handleCardClick}
                    />
                  ))}
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 -translate-y-1/2 left-4 z-10 p-2 bg-[#23232370] rounded-full text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                >
                  <ArrowLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 -translate-y-1/2 right-4 z-10 p-2 bg-[#23232370] rounded-full text-white focus:outline-none "
                >
                  <ArrowRight className="w-8 h-8" />
                </button>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                  {products[0].sculpture.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentIndex === index ? "bg-[#C29D04]" : "bg-white/50"
                      } hover:bg-[#C29D04] focus:bg-[#C29D04] focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SculptureShoCase;
