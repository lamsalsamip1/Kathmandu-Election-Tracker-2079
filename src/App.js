import logo from "./logo.svg";
import "./App.css";
import Buttons from "./components/buttons.js";
import { Routes, Route, Router } from "react-router-dom";
import ProvincialAssembly from "./components/province";
import FederalParliament from "./components/federal";
import axios from "axios";
import { useState, useEffect } from "react";
import HotSeats from "./components/hotseats";
const App = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get("https://lamsalsamip1.github.io/json-api/electiondata.json")
      .then((res) => setResults(res.data[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App pt-10 pb-10 bg-light-grey">
      <h1 className="font-bold text-center text-3xl  font-['Roboto'] uppercase text-dark-blue tracking-wider">
        Kathmandu Election tracker
      </h1>

      <Buttons />

      <Routes>
        <Route
          path="/"
          element={<FederalParliament data={results.data} />}
        ></Route>
        <Route
          path="/provincial"
          element={<ProvincialAssembly data={results.data} />}
        ></Route>
      </Routes>

      <h3 className="font-bold text-center text-3xl  font-['Roboto'] text-dark-blue tracking-wider mt-10">
        Hot Seats
      </h3>
      <HotSeats data={results.data} />

      <div className="mt-10 px-20 footer flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-4">
        <p className="text-dark-blue text-center">
          Developed by{" "}
          <a
            className="text-blue-600 cursor-pointer "
            href="https://github.com/lamsalsamip1"
            target="_blank"
          >
            Samip Lamsal ,{" "}
          </a>
          <a
            className="text-blue-600 cursor-pointer"
            href="https://github.com/Anupamaraie"
            target="_blank"
          >
            Anupama Rai
          </a>
        </p>
        <a
          className="text-blue-600 cursor-pointer"
          href="https://electionapi.herokuapp.com/"
          target="_blank"
        >
          {" "}
          API
        </a>
        <p className="text-dark-blue">
          Last updated: <a className="text-blue-600">{results.updated_time}</a>
        </p>
      </div>
    </div>
  );
};

export default App;
