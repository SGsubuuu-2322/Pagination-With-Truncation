import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [products, setproducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setproducts(data.products);
    }
  };

  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  // fetchProducts();
  return (
    <>
      <div className="p-0 m-5 grid gap-5 grid-cols-3 w-full h-screen list-none">
        {products.length > 0 &&
          products.map((prod) => {
            return (
              <span className="border-2 border-black rounded" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
      </div>
    </>
  );
}

export default App;
