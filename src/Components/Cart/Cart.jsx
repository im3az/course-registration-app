import PropTypes from "prop-types";
// import CartItem from "../Cart Items/CartItem";

const Cart = ({ cart }) => {
  
  return (
    <div className="md:w-96 px-6 pt-6 lg:ml-10 rounded-xl bg-white">
      <div>
        <h1 className="text-xl font-bold my-4">Course Name</h1>
        {cart.map((course, idx) => (
          <li key={idx} className="my-2 list-disc text-[#777676]">{course.title}</li>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
