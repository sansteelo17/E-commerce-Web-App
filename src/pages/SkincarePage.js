import { useLoaderData } from "react-router-dom";
import SkincareBody from "../components/ShopBody/SkincareBody/SkincareBody";
import { getProductsByCategory } from "../lib/api";

const SkincarePage = () => {
  const skincareProducts = useLoaderData();

  return <SkincareBody skincareProducts={skincareProducts} />;
};

export default SkincarePage;

export const loader = () => {
  return getProductsByCategory("skincare");
};
