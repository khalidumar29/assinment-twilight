import React from "react";

interface CategoryCardProps {
  imageUrl: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="group flex-shrink-0 w-32 md:w-44 h-32 md:h-44 rounded-md relative overflow-hidden cursor-pointer ">
      <div className="w-full h-full overflow-hidden relative overflow-y-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-md transition-transform duration-300 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 " />
      </div>
      <div className="absolute bottom-3 left-0 w-full flex items-end">
        <p className="text-[14px] font-semibold text-white w-full text-center">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
