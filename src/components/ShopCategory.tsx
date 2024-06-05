"use client";
import { categories } from "@/db/data";
import SectionContainer from "@/utils/SectionContainer";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import CategoryCard from "./ui/CategoryCard";
import TitleText from "./ui/TitleText";

const ShopCategory = () => {
  return (
    <SectionContainer>
      <div className="container mb-6 mt-12">
        <div className="flex items-center font-semibold mb-5 justify-between">
          <TitleText title="Shop by Category" />
          <Button text="View All">
            <ArrowRight size={16} strokeWidth={4} />
          </Button>
        </div>
      </div>
      <div className="shop-scroll flex flex-nowrap overflow-x-auto gap-5 overflow-y-hidden scrollbar-hide">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ShopCategory;
