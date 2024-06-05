import Carousel from "@/components/Carousel";
import ShopCategory from "@/components/ShopCategory";
import BottomNav from "@/components/navbar/BottomNav";

export default function Home() {
  return (
    <main className="h-screen">
      {/* Carsoule section  */}
      <Carousel />
      <div className="py-5 mt-3">
        <ShopCategory />
      </div>
      <div className="lg:hidden md:block sm:block ">
        <BottomNav />
      </div>
    </main>
  );
}
