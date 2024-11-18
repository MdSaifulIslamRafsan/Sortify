import { useEffect, useState } from "react";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
 
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
       
      });
  }, []);

 
  return <div></div>;
};

export default Products;
