import { useLoaderData } from "react-router-dom";
import ProductBody from "../components/ShopBody/ProductBody/ProductBody";
import { getProductDetail } from "../lib/api";

const ProductDetail = () => {
  const productDetail = useLoaderData();

  console.log(productDetail);

  return <ProductBody productDetail={productDetail} />;
};

export default ProductDetail;

export const loader = ({ params }) => {
  const productId = params.id;

  return getProductDetail(productId);
};
