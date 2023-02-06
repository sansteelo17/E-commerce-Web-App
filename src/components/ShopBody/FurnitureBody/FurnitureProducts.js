import FurnitureProductItem from "./FurnitureProductItem";

const FurnitureProducts = ({ furnitureProducts }) => {
  return (
    <div className="flex flex-wrap w-full justify-center mt-4 px-2">
      {furnitureProducts.map((product) => (
        <FurnitureProductItem
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

export default FurnitureProducts;
