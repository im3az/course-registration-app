import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [cart, setCart] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const handleAddToCart = (card) => {
    const isExist = cart.find((item) => item.id == card.id);

    let count = card.credit_hour;
    if (isExist) {
      return alert("Already added");
    } else {
      cart.forEach((item) => {
        count = count + item.credit_hour;
      });
      const totalRemaining = 20 - count;
      setTotalCost(count);
      setRemaining(totalRemaining);
      setCart([...cart, card]);
    }
  };

  return (
    <div className="bg-[#F3F3F3]">
      <Navbar></Navbar>
      <div className="md:flex justify-center md:justify-around w-11/12 mx-auto">
        <Cards handleAddToCart={handleAddToCart}></Cards>
        <Cart remaining={remaining} totalCost={totalCost} cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
