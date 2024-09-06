"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

interface TweenVars {
  yoyo: boolean;
  x: number;
  duration: number;
  repeat: number;
  backgroundColor?: string;
  borderRadius?: number;
}

const Page = () => {
  useEffect(() => {
    // box1
    const tweenVars: TweenVars = {
      x: 200,
      duration: 3,
      repeat: -1,
      yoyo: true,
    };
    gsap.to("#box1", tweenVars);
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold capitalize my-3">
        gsap properties to
      </h1>

      <div className="px-4 mb-10">
        <p className="text-xl whitespace-nowrap">
          {" "}
          <span className="font-bold ">to</span> : is use for animate the
          elements from initial to final
        </p>
      </div>

      <div
        id="box1"
        className="bg-orange w-[100px] h-[100px] rounded-[12px]"
        style={{ backgroundColor: "orange", borderRadius: 12 }}
      ></div>
    </div>
  );
};

export default Page;
