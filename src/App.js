import logo from "./logo.svg";
import "./App.css";
import Buttons from "./components/buttons.js";
import { Routes, Route, Router } from "react-router-dom";
import ProvincialAssembly from "./components/province";
import FederalParliament from "./components/federal";
const App = () => {

  return (

    <div className="App pt-10 pb-10 bg-light-grey">


      <h1 className="font-bold text-center text-3xl  font-['Roboto'] uppercase text-dark-blue tracking-wider">
        Kathmandu Election tracker
      </h1>


      <Buttons />

      <Routes>
        <Route path="/" element={<FederalParliament />}></Route>
        <Route path="/provincial" element={<ProvincialAssembly />}></Route>
      </Routes>

      <div className="mt-10 px-20 footer flex flex-row justify-between">

        <p className="text-dark-blue">Developed by <a className="text-blue-600 cursor-pointer">Samip Lamsal</a></p>
        <a className="text-blue-600 cursor-pointer">API</a>
        <p className="text-dark-blue">Last updated: <a className="text-blue-600">9:00 pm</a></p>


      </div>



    </div >
  );
};

export default App;
