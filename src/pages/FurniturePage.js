import { useLoaderData } from "react-router-dom";
import FurnitureBody from "../components/ShopBody/FurnitureBody/FurnitureBody";
import { getProductsByCategory } from "../lib/api";

const FurniturePage = () => {
  const furnitureProducts = useLoaderData();

  return <FurnitureBody furnitureProducts={furnitureProducts} />;
};

export default FurniturePage;

export const loader = () => {
  return getProductsByCategory("furniture");
};
