export interface ProductCardProps {
  id: number;
  title: string;
  imageSrc: string;
  hoverImageSrc: string;
  label: string;
  price: number;
  old_price: number;
  product: Product;
  onCardClick: (product: Product) => void;
  className?: string;
}

export interface Product {
  id: number;
  title: string;
  imageSrc: string;
  hoverImageSrc: string;
  label: string;
  price: number;
  old_price: number;
}

export interface ProductCategory {
  latestProducts: Product[];
  bedroomKit: Product[];
  furniture: Product[];
}
