import PropTypes from "prop-types";

const Card = ({ course }) => {
  const { title, image, details } = course;

  return (
    <div >
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Course" className="w-72 h-36 rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
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
