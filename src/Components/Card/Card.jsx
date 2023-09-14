import PropTypes from "prop-types";

const Card = ({ course }) => {
  const { title, image, details } = course;

  return (
    <div className="mb-3">
      <div className="card w-[370px] h bg-base-100 shadow-xl">
        <figure className="pt-5">
          <img src={image} alt="Course" className="w-72 h-36 rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <h1 className="text-sm font-normal text-justify text-[#777676]">{details}</h1>
          <div className="card-actions">
            <button className="btn btn-primary mt-3 w-72">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.object,
};

export default Card;
