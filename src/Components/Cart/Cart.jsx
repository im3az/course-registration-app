import PropTypes from "prop-types";
// import CartItem from "../Cart Items/CartItem";

const Cart = ({ cart, remaining, totalHour }) => {
  return (
    <div className="md:w-96 px-6 pt-6 lg:ml-10 rounded-xl h-[488px] bg-base-100 shadow-xl">
      <div>
        <h1 className="text-xl font-bold text-[#2E80ED] mb-3">
          Credit Hour Remaining {remaining} hr
        </h1>
        <hr />
        <h1 className="text-xl font-bold my-4">Course Name</h1>
        {cart.map((course, idx) => (
          <li key={idx} className="my-2 list-decimal text-[#777676]">
            {course.title}
          </li>
        ))}
        <hr />
        <h1 className="mt-3 text-base font-medium text-[#494949]">
          Total Credit Hour: {totalHour} hr
        </h1>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
  remaining: PropTypes.number,
  totalHour: PropTypes.number,
};

export default Cart;
