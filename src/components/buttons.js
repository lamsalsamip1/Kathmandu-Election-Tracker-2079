import { Routes, Route, Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div class="flex flex-row justify-center gap-x-10 mt-10">
      {/* <Link to="/">Federal Parliament</Link>
      <Link to="/provincial">Provincial Assembly</Link> */}
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <Link to="/">Federal Parliament</Link>
      </button>

      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <Link to="/provincial">Provincial Assembly</Link>
      </button>
    </div>
  );
};

export default Buttons;
