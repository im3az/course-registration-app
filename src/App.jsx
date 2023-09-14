import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-around w-11/12 mx-auto">
        <Cards></Cards>
        <Cart></Cart>
      </div>
    </>
  );
}

export default App;
