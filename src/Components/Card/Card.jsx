import PropTypes from "prop-types";
import { BsCurrencyDollar, BsBook } from "react-icons/bs";

const Card = ({ course, handleAddToCart }) => {
  const { title, image, details, price, credit_hour } = course;

  return (
    <div className="mb-6 ">
      <div className="card md:w-96 lg:w-[370px] bg-base-100 shadow-xl">
        <figure className="pt-5">
          <img src={image} alt="Course" className="w-72 h-36 rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <h1 className="text-sm font-normal text-justify text-[#777676]">
            {details}
          </h1>
        </div>
        <div className="flex items-center justify-between w-4/5 mx-auto">
          <div className="flex items-center gap-2">
            <BsCurrencyDollar />
            <h1 className="font-medium text-[#777676]">Price: {price}$</h1>
          </div>
          <div className="flex items-center gap-2">
            <BsBook />
            <h1 className="font-medium text-[#777676]">
              Credit: {credit_hour}hr
            </h1>
          </div>
        </div>
        <div className="mb-5 items-center text-center">
          <button
            onClick={() => handleAddToCart(course)}
            className="btn btn-primary mt-3 w-72"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.object,
  handleAddToCart: PropTypes.func,
};

export default Card;
