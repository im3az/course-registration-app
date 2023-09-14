import { useEffect } from "react";
import { useState } from "react";

const Cards = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="w-2/3">
      <h1 className="text-4xl ">Courses:{courses.length}</h1>
    </div>
  );
};

export default Cards;
