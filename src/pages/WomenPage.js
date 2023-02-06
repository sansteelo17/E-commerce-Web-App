import { useLoaderData } from "react-router-dom";
import WomenBody from "../components/ShopBody/WomenBody/WomenBody";
import { getProductsByCategory } from "../lib/api";

const WomenPage = () => {
  const womensProducts = useLoaderData();

  return <WomenBody womensProducts={womensProducts} />;
};

export default WomenPage;

export const loader = () => {
  return getProductsByCategory("womens-dresses");
};
