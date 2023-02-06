import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomProduct } from "../../lib/api";

const ProductOfTheDay = () => {
  const [productOfTheDay, setProductOfTheDay] = useState(null);

  useEffect(() => {
    const getRandProduct = async () => {
      const product = await getRandomProduct();
      // console.log(product);
      setProductOfTheDay(product);
    };

    getRandProduct();
  }, []);

  return (
    <Link to={productOfTheDay ? productOfTheDay.id : ""}>
      <div
        style={{
          backgroundImage: `url(${
            productOfTheDay ? productOfTheDay.thumbnail : ""
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-11/12 mx-auto h-80"
      >
        <h1>PESSSSSSSSSSSSSSSS</h1>
      </div>
    </Link>
  );
};

export default ProductOfTheDay;
