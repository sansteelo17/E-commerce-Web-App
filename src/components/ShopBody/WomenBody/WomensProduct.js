import WomenProductItem from "./WomenProductItem";

const WomensProducts = ({ womensProducts }) => {
  return (
    <div className="flex flex-wrap w-full justify-center mt-4 px-2">
      {womensProducts.map((product) => (
        <WomenProductItem
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

export default WomensProducts;
