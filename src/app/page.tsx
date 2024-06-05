import ShopCategory from "@/components/ShopCategory";
import BottomNav from "@/components/navbar/BottomNav";

export default function Home() {
  return (
    <main className="h-screen">
      {/* Carsoule section  */}
      <div className="py-5">
        <ShopCategory />
      </div>
      <div className="lg:hidden md:block sm:block ">
        <BottomNav />
      </div>
    </main>
  );
}
