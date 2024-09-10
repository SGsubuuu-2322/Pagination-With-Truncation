import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [products, setproducts] = useState([]);
  const [page, setpage] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setproducts(data.products);
    }
  };

  // console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (i) => {
    if (i >= 1 && i <= products.length / 10 && i !== page) {
      setpage(i);
    }
  };

  // fetchProducts();
  return (
    <>
      <div className="w-full h-screen">
        <div className="p-5 grid gap-5 grid-cols-3 w-[100%] list-none">
          {products.length > 0 &&
            products.slice(page * 10 - 10, page * 10).map((prod) => {
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
          <div className="pagination w-full py-5 flex justify-center items-center">
            <span
              className={page > 1 ? "cursor-pointer" : "cursor-not-allowed"}
              onClick={() => selectPageHandler(page - 1)}
            >
              ◀️
            </span>
            {[...Array(products.length / 10)].map((_, i) => {
              return (
                <span
                  key={i}
                  className={`cursor-pointer ${
                    page === i + 1
                      ? "underline font-bold scale-125 bg-slate-200"
                      : ""
                  }`}
                  onClick={() => selectPageHandler(i + 1)}
                >
                  {i + 1}
                </span>
              );
            })}
            <span
              className={
                page < products.length / 10
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }
              onClick={() => selectPageHandler(page + 1)}
            >
              ▶️
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
