import { useLoaderData } from "react-router-dom";
import MenBody from "../components/ShopBody/MenBody/MenBody";
import { getProductsByCategory } from "../lib/api";

const MenPage = () => {
  const mensProducts = useLoaderData();

  return <MenBody mensProducts={mensProducts} />;
};

export default MenPage;

export const loader = () => {
  return getProductsByCategory("mens-shirts");
};
