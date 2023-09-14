import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

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
      {courses.map((course) => (
        <Card key={course.id} course={course}></Card>
      ))}
    </div>
  );
};

export default Cards;
