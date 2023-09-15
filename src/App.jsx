import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (card) => {
    console.log("adding soon");
  };

  return (
    <div className="bg-[#F3F3F3]">
      <Navbar></Navbar>
      <div className="flex justify-around w-11/12 mx-auto">
        <Cards handleAddToCart={handleAddToCart}></Cards>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
