import HomeProductItem from "./HomeProductItem";

const HomeProducts = ({ allProducts }) => {
  return (
    <div className="flex flex-wrap w-full justify-center mt-4 px-2">
      {allProducts.map((product) => (
        <HomeProductItem
          key={product.id}
          id={product.id}
          thumbnail={product.thumbnail}
          name={product.title}
          category={product.category}
          price={product.price}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default HomeProducts;
