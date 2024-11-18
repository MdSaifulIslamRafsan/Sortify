import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return <div className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  max-w-7xl w-11/12 mx-auto">
        {
            productsData.map(product => <ProductCard key={product?.id} product={product}></ProductCard>)
        }
  </div>;
};

export default Products;
