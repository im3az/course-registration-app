import PropTypes from "prop-types";

const Card = ({ card }) => {
  const { title } = card;

  return (
    <div>
      <h2 className="text-3xl">{title}</h2>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
