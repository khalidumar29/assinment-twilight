import { products } from "@/db/data";

type Props = {};

export default function page({ params }: { params: { productId: number } }) {
  const productId = Number(params.productId);

  const product = products[0].latestProducts.find(
    (product: any) => product.id === productId
  );

  /*const product = allproducts.find(
  (product: any) => product.id === productId
);*/

  return <div></div>;
}
