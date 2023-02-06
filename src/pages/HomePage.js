import { getAllProducts } from "../lib/api";
import { useLoaderData } from "react-router-dom";

import HomeBody from "../components/ShopBody/HomeBody/HomeBody";
import React from "react";
// const ProductOfTheDay = React.lazy(() =>
//   import("../components/ProductOfTheDay/ProductOfTheDay")
// );

const HomePage = () => {
  const allProducts = useLoaderData();

  return (
    <div>
      {/* <React.Suspense>
        <ProductOfTheDay />
      </React.Suspense> */}
      <HomeBody allProducts={allProducts} />
    </div>
  );
};

export default HomePage;

export const loader = () => {
  return getAllProducts();
};
