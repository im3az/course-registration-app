import PropTypes from "prop-types";

const Card = ({ course }) => {
  const { title } = course;

  return (
    <div>
      <h2 className="text-3xl">{title}</h2>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.object,
};

export default Card;
