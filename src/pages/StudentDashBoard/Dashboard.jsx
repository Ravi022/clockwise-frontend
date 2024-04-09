import React, { useState } from "react";
import { Label } from "../../Components/Login/ui/label";
import { Input } from "../../Components/Login/ui/input";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [rollNumber, setRollNumber] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleRollNumberChange = (e) => {
    setRollNumber(e.target.value);
  };

  const handleUpload = async () => {
    // Simulate uploading by setting a timeout
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Display success message
    setSuccessMessage("Document uploaded successfully");

    // Reset form fields after successful upload
    setFile(null);
    setRollNumber("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-400">
      <div className="w-96 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-xl font-semibold mb-4">
          Upload Your Leave Application
        </h2>
        <div className="mb-4">
          <Label htmlFor="rollNumber">Roll Number</Label>
          <Input
            id="rollNumber"
            placeholder="2101235"
            type="text"
            value={rollNumber}
            onChange={handleRollNumberChange}
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="fromDate">From:</Label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="toDate">To:</Label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="fileUpload">Upload Document:</Label>
          <input
            type="file"
            id="fileUpload"
            name="fileUpload"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <button
          onClick={handleUpload}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Upload
        </button>

        {/* Success message */}
        {successMessage && (
          <div className="flex items-center mt-4">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-green-500">{successMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}
