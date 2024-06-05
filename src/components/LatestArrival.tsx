import { latestProducts } from "@/db/data";
import SectionContainer from "@/utils/SectionContainer";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import ProductCard from "./ui/ProductCard";
import TitleText from "./ui/TitleText";

const LatestArrival = () => {
  return (
    <SectionContainer>
      <div className="container mb-6 mt-12">
        <div className="flex items-center font-semibold mb-5 justify-between">
          <TitleText title="Latest Arrivals" />
          <Button text="View All">
            <ArrowRight size={16} strokeWidth={4} />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {latestProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageSrc={product.imageSrc}
            hoverImageSrc={product.hoverImageSrc}
            label={product.label}
            price={product.price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default LatestArrival;
