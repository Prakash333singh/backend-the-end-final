import Product from "./Product";
import { useEffect, useState } from "react";
//import ProductsData from "./data";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  //const [total, setTotal] = useState(0);

  const getProducts = async () => {
    const res = await axios.get("/products");
    console.log(res.data.data);
    setProducts(res.data.data);
    //setTotal(res.data.length);
  };

  const handleClick = async (id) => {
    const res = await axios.delete(`/products/${id}`);
    console.log(res.data);
    if (res.data._id) {
      setProducts(products.filter((p) => p._id !== res.data._id));
    }
  };
  // const handlePage = async (page) => {
  //   const res = await axios.get("/products?page=" + page);
  //   console.log(res.data);
  //   setProducts(res.data);
  // };

  // const handleSort = async (e) => {
  //   const field = e.target.value.split(".");
  //   const res = await axios.get(`/products?sort=${field[0]}&order=${field[1]}`);
  //   console.log(res.data);
  //   setProducts(res.data);
  // };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {/* <select onChange={handleSort}>
        <option value="price.desc">Price High to Low</option>
        <option value="price.asc">Price Low to High</option>
        <option value="rating.desc">Rating High to Low</option>
        <option value="rating.asc">Rating Low to High</option>
      </select> */}

      {/* {Array(Math.ceil(total / 4))
        .fill(0)
        .map((e, i) => (
          <button onClick={() => handlePage(i + 1)}>{i + 1}</button>
        ))} */}
      {products.map((product, index) => (
        <Product {...product} key={index} handleClick={handleClick}></Product>
      ))}
    </>
  );
};

export default ProductList;
