import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          User Profile
        </h1>
        <p className="text-lg text-gray-600">
          <span className="font-semibold text-orange-600">User ID:</span> {userId}
        </p>
      </div>
    </div>
  );
};

export default User;
