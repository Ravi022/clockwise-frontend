import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function StudentDashBoard() {
  // Get the location object
  const location = useLocation();
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    if (location.state && location.state.courseData) {
      setCourseData(location.state.courseData);
      console.log(courseData);
    }
  }, [location.state]);

  // Render the courseData
  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        {courseData.map((course, index) => (
          <li key={index}>
            Course Name: {course.name}, Present: {course.present}, Absent:{" "}
            {course.absent}
          </li>
        ))}
      </ul>
    </div>
  );
}
