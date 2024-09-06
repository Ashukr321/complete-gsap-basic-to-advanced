import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <header className="px-10 py-3 font-bold bg-gray-200 uppercase text-[15px]">
        <nav className="flex justify-between">
          <Link href={"/"} className="uppercase">
            Gsap
          </Link>
          <ul className="flex space-x-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/features"}>Features</Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
