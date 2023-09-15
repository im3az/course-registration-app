import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (card) => {
    const isExist = cart.find((item) => item.id == card.id);
    if (isExist) {
      return alert("Already added");
    } else {
      setCart([...cart, card]);
    }
  };

  return (
    <div className="bg-[#F3F3F3]">
      <Navbar></Navbar>
      <div className="md:flex justify-center md:justify-around w-11/12 mx-auto">
        <Cards handleAddToCart={handleAddToCart}></Cards>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
