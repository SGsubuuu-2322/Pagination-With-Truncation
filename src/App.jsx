import { useEffect } from "react";

function App() {
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // fetchProducts();
  return (
    <>
      <p className="bg-red-200">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
