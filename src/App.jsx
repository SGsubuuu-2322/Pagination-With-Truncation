import { useState } from "react";
import { useEffect } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [products, setproducts] = useState([]);
  const [page, setpage] = useState(1);
  const [totalPages, settotalPages] = useState(0);
  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=12&skip=${page * 12 - 12}`
    );
    const data = await res.json();

    // console.log(Math.floor(data.total / 12));

    if (data && data.products) {
      setproducts(data.products);
      settotalPages(Math.floor(data.total / 12));
    }
  };

  // console.log(products);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  // fetchProducts();
  return (
    <>
      <div className="w-full h-screen">
        <div className="p-5 grid gap-5 grid-cols-3 w-[100%] list-none">
          {products.length > 0 &&
            products.map((prod) => {
              return (
                <span
                  className="h-64 border-2 border-black rounded p-5 bg-[rgb(220, 220, 220)] text-center cursor-pointer flex flex-col items-center justify-center"
                  key={prod.id}
                >
                  <img
                    className="h-[95%] w-[85%] custom-shadow bg-cover mb-1"
                    src={prod.thumbnail}
                    alt={prod.title}
                  />
                  <span>{prod.title}</span>
                </span>
              );
            })}
        </div>
        {products.length > 0 && (
          <Pagination page={page} totalPages={totalPages} setPage={setpage} />
        )}
      </div>
    </>
  );
}

export default App;
