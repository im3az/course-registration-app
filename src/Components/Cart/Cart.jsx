import PropTypes from "prop-types";
// import CartItem from "../Cart Items/CartItem";

const Cart = ({ cart, remaining, totalCost }) => {
  console.log(remaining, totalCost);
  return (
    <div className="md:w-96 px-6 pt-6 lg:ml-10 rounded-xl bg-white h-[700px]">
      <div>
        <h1 className="text-xl font-bold my-4">Course Name</h1>
        {cart.map((course, idx) => (
          <li key={idx} className="my-2 list-decimal text-[#777676]">
            {course.title}
          </li>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
  remaining: PropTypes.number,
  totalCost: PropTypes.number,
};

export default Cart;
