import Carousel from "@/components/Carousel";
import Headline from "@/components/Headline";
import LatestArrival from "@/components/LatestArrival";
import ShopCategory from "@/components/ShopCategory";
import BottomNav from "@/components/navbar/BottomNav";

export default function Home() {
  return (
    <main>
      {/* Carsoule section  */}
      <Carousel />
      <div className="py-5 mt-3 mb-10">
        <ShopCategory />
        <LatestArrival />
      </div>
      <Headline />
      <div className="lg:hidden md:block sm:block ">
        <BottomNav />
      </div>
    </main>
  );
}
