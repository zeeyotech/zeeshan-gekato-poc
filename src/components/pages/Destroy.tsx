import React, { useRef } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { apiRequest } from "../api/Api";

const Destroy = () => {
  // Using ref to access the input element
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePost = async () => {
    try {
      const response = await apiRequest({
        url: "/users",
        method: "POST",
        body: { name: "John Doe", email: "john@example.com" },
      });
      console.log("Post Response:", response.data);
    } catch (error) {
      console.error("Post Error:", error);
    }
  };
  //   };

  return (
    <div className="mx-auto w-full sm:w-8/12 lg:w-1/3 p-4 rounded-lg shadow-lg">
      <Card className="mt-auto p-4">
        <h2 className="mb-4 text-lg font-semibold text-gray-800 text-center">
          Enter Name
        </h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type file name here"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-center">
          <Button onClick={handlePost} className="px-4 py-2  rounded-md ">
            Send
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Destroy;
