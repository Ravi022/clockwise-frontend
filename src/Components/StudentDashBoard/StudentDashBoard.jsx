import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default function StudentDashboard() {
  const navigate = useNavigate(); // Access navigate function for navigation
  const location = useLocation();
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    if (location.state && location.state.courseData) {
      setCourseData(location.state.courseData);
    }
  }, [location.state]);

  const handleClick = () => {
    navigate("/"); // Navigate to "/home" when button is clicked
  };

  return (
    <div className="relative bg-gradient-to-r from-green-400 to-blue-400 w-full h-full ">
      <div className="absolute top-0 right-0">
        <button
          className="bg-blue-700 text-white font-bold py-2 px-4 rounded-md transform transition-transform  animate-pulse"
          onClick={handleClick}
        >
          Apply For Leave Application
        </button>
      </div>

      <div className="top-1 left-2">
        <div className="flex justify-center  text-xl font-bold">
          <h1>Student Dashboard</h1>
        </div>
        <div className="flex flex-wrap justify-start gap-4">
          {courseData.map((course, index) => (
            <Card key={index} style={{ width: 300 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <div className="w-full p-2 mx-5">
                    Course Name: {course.name}
                  </div>
                </Typography>
                <Typography variant="body1">
                  <div className="flex justify-around">
                    <div>Present: {course.present}</div>
                    <div> Absent: {course.absent}</div>
                  </div>
                </Typography>
                <div className="mt-4">
                  <PieChart
                    series={[
                      {
                        data: [
                          { name: "Present", value: course.present },
                          { name: "Absent", value: course.absent },
                        ],
                        colors: ["#16a34a", "#e11d48"],
                        highlightScope: {
                          faded: "global",
                          highlighted: "item",
                        },
                        faded: {
                          innerRadius: 30,
                          additionalRadius: -30,
                          color: "#e11d48",
                        },
                      },
                    ]}
                    height={200}
                  />
                </div>
                <Typography variant="body1">
                  Present:{" "}
                  {(
                    (course.present / (course.present + course.absent)) *
                    100
                  ).toFixed(1)}
                  %
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
