import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
    
    const data = useLoaderData();
    
  return (
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-80 text-center">
        <img 
          src={data.avatar_url} 
          alt="profile" 
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200"
        />
        <h2 className="text-xl font-semibold text-gray-800">
          {data.login}
        </h2>
        <p className="text-gray-600 mt-2">
          Followers: <span className="font-bold text-gray-900">{data.followers}</span>
        </p>
        <a 
          href={data.html_url} 
          target="_blank" 
          rel="noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        >
          View Profile
        </a>
      </div>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json();
}