import { products } from "@/db/data";

const page = ({ params }: { params: { slug: string } }) => {
  const product = products.find((product) => product.id === id.toString());
  return <div>My Post: {params.slug}</div>;
};

export default page;
