import PropTypes from "prop-types";

const Cart = ({ cart }) => {

  return (
    <div className=" w-1/3">
      <h1 className="text-4xl">Courses: {cart.length}</h1>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
