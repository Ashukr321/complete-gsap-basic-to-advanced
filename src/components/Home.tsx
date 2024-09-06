"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

const Home = () => {
  useEffect(()=>{
    gsap.to('Link',{
       y:20,
      opacity:1,
      stagger:1,
    })

  },[])
  
  return (
    <div className="p-2 ">
      <h1 className="text-2xl md:text-3xl font-bold  text-center mt-3">
        GreenSock Animation Platform.
      </h1>
      <div className="flex justify-center md:justify-start md:p-10 mt-3 gap-2 flex-wrap">
        <Link href={"/to"}>
          <button flex-1 className="btn">
            to
          </button>
        </Link>

        <Link href={"/from"}>
          <button flex-1 className="btn">
            from
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
