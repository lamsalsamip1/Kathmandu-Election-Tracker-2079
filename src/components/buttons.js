import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

const Buttons = () => {
  const btn_styles =
    "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ";

  const [active, setActive] = useState("1");

  const handleClick = (event) => {
    setActive(event.target.id);
  };
  return (
    <div className="flex flex-row justify-center gap-x-10 mt-10">
      {/* <Link to="/">Federal Parliament</Link>
      <Link to="/provincial">Provincial Assembly</Link> */}
      <Link to="/">
        <button
          className={
            btn_styles + (active == "1" ? "bg-blue-500 !text-white" : "")
          }
          id={1}
          onClick={handleClick}
        >
          Federal Parliament
        </button>
      </Link>
      <Link to="/provincial">
        <button
          className={
            btn_styles + (active == "2" ? "bg-blue-500 !text-white" : "")
          }
          id={2}
          onClick={handleClick}
        >
          Provincial Assembly
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
