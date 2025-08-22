"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const Loading = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const res = await fetch("/Loading.json"); // public/Loading.json
      const data = await res.json();
      setAnimationData(data);
    };
    loadAnimation();
  }, []);

  if (!animationData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-20 mx-auto">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Loading;
