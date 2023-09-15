import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ handleAddToCart }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="w-2/3 grid grid-cols-3">
      {/* <h1 className="text-4xl ">Courses:{courses.length}</h1> */}
      {courses.map((course) => (
        <Card
          key={course.id}
          course={course}
          handleAddToCart={handleAddToCart}
        ></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleAddToCart: PropTypes.func,
};

export default Cards;
