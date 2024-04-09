import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default function StudentDashboard() {
  const location = useLocation();
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    if (location.state && location.state.courseData) {
      setCourseData(location.state.courseData);
    }
  }, [location.state]);

  return (
    <div className="m-3">
      <div className="flex justify-center m-4 text-xl font-bold">
        <h1>Student Dashboard</h1>
      </div>
      <div className="flex flex-wrap justify-start gap-4">
        {courseData.map((course, index) => (
          <Card key={index} style={{ width: 300 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Course Name: {course.name}
              </Typography>
              <Typography variant="body1">
                Present: {course.present}, Absent: {course.absent}
              </Typography>
              <div className="mt-4">
                <PieChart
                  series={[
                    {
                      data: [
                        {
                          name: "Present",
                          value: course.present,
                          fill: "green",
                        },
                        { name: "Absent", value: course.absent, fill: "red" },
                      ],
                      highlightScope: { faded: "global", highlighted: "item" },
                      faded: {
                        innerRadius: 30,
                        additionalRadius: -30,
                        color: "gray",
                      },
                    },
                  ]}
                  height={200}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
