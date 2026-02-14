import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import ShopContext from "./Context/Context";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import UseFetch from "./Hook/UseFetch";
const App = () => {
  const { error,loading } = UseFetch("https://fakestoreapi.com/products");
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <ShopContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContext>
    </>
  );
};

export default App;
