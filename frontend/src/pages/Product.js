import { useState, useEffect, useRef } from "react";
import SingleProduct from "../components/SingleProduct";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services/prodService";

const Products = (cart) => {
  

  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const [catPath, setCatPath] = useState("all categories");

  const para = useRef(null);
  
  const categories = [
    'smartphone',
    'laptop',
    'smartwatch',
    "earbuds",
    "Keyboard",
    "graphics card",
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await getAllProducts();
        if (res && res.status === 200)
          console.log('Receiving all products data from db');
        else
          console.log('Error when trying to get all products: ' + res);

        setIsLoading(false);
        setProducts(res.data);
        setFilterProducts(res.data);
      } catch (err) {
        setIsLoading(false);
        setErr(err.message);
      }
    };
    getData();
  },[]);

  if (isLoading)
    return (
      <p className="h-screen flex flex-col justify-center items-center text-2xl">
        Loading...
      </p>
    );
  if (err)
    return (
      <p className="h-screen flex flex-col justify-center items-center text-2xl">
        <span>{err}</span>
        <Link to="/product" className="text-lg text-gray-500 font-semibold">
          &larr;Refresh page
        </Link>
      </p>
    );

  return (
    
    <div className="container mx-auto pb-20">
      <h2 className="text-center text-3xl py-10">All Products</h2>
      <div className="flex justify-between gap-10">
        <div className="w-[20%] bg-gray-50 flex flex-col gap-3 px-3 pt-2">
          <h3
            className="select-none cursor-pointer flex justify-between"
            onClick={() => {
              setFilterProducts(products);
              setCatPath("all categories");
            }}
          >
            <span className="font-semibold">All Categories</span>
            <span>{`(${products.length})`}</span>
          </h3>
          {categories.map((cat, i) => (
            <p
              ref={para}
              className='select-none cursor-pomointer capitalize font-semibold'
              id={cat}
              key={i}
              onClick={() => {
                const filters = products.filter(
                  (product) => product.category === cat
                );
                setFilterProducts(filters);
                setCatPath(categories[i]);
              }}
            >
              <span>{cat}</span>
            </p>
          ))}
        </div>
        <div>
          <p className="text-gray-500 pb-4">
            {<Link to="/">Home </Link>}/
            <span id='currentCategorie' className="text-sky-400 px-1">{catPath}</span>
          </p>
          <div className="grid grid-cols-3 gap-10 ">
            {filterProducts &&
              filterProducts.map((product) => (
                <SingleProduct key={product.id} product={product} cart={cart.cart} setCart={cart.setCart} cartSize={cart.cartSize} setCartSize={cart.setCartSize} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
