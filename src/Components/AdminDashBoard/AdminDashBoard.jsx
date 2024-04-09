import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { FaCheck, FaTimes } from "react-icons/fa";
import classNames from "classnames";

export default function AdminDashboard() {
  const location = useLocation();
  const [leaveList, setLeaveList] = useState([]);
  const [acceptedItems, setAcceptedItems] = useState([]);
  const [discardedItems, setDiscardedItems] = useState([]);

  useEffect(() => {
    if (location.state && location.state.leaveList) {
      setLeaveList(location.state.leaveList);
    }
  }, [location]);

  const handleStatusChange = (leaveId, newStatus) => {
    if (newStatus === 1) {
      setAcceptedItems([...acceptedItems, leaveId]);
      setDiscardedItems(discardedItems.filter((id) => id !== leaveId));
    } else {
      setDiscardedItems([...discardedItems, leaveId]);
      setAcceptedItems(acceptedItems.filter((id) => id !== leaveId));
    }
  };

  return (
    <div>
      <h1 className="flex justify-center text-2xl font-bold">
        Admin Dashboard
      </h1>
      <div className="flex flex-wrap-row gap-3">
        {leaveList.map((leave) => (
          <Card
            key={leave.id}
            variant="outlined"
            className={classNames("w-full", {
              "bg-green-100": acceptedItems.includes(leave.id),
              "bg-red-100": discardedItems.includes(leave.id),
            })}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Leave Details
              </Typography>
              <Typography variant="body1">
                Student ID: {leave.student_id}
              </Typography>
              <Typography variant="body1">
                Student Name: {leave.student_name}
              </Typography>
              <Typography variant="body1">
                Start Date: {leave.start_date}
              </Typography>
              <Typography variant="body1">
                End Date: {leave.end_date}
              </Typography>
              <Typography variant="body1">
                Status: {leave.status === 1 ? "Accepted" : "Pending"}
              </Typography>
              <div className=" flex gap-2">
                <Button
                  onClick={() => handleStatusChange(leave.id, 0)}
                  variant="contained"
                  color="error"
                  className="mt-2 mr-2"
                >
                  Discard
                </Button>
                <Button
                  onClick={() => handleStatusChange(leave.id, 1)}
                  variant="contained"
                  color="primary"
                  className="mt-2"
                >
                  Accept
                </Button>
              </div>
              <div className="absolute ">
                {acceptedItems.includes(leave.id) && (
                  <FaCheck className="text-green-500 ml-2" />
                )}
                {discardedItems.includes(leave.id) && (
                  <FaTimes className="text-red-500 ml-2" />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
