import HomeProducts from "./HomeProducts";

const HomeBody = ({ allProducts }) => {
  const truncatedProducts = allProducts.filter(
    (prod) => prod.id <= 26 && prod.id !== 11 && prod.id !== 24 //11 and 24 are in lowercase
  );

  return <HomeProducts allProducts={truncatedProducts} />;
};

export default HomeBody;
