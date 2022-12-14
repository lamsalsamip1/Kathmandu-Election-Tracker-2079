import List from "./list.js";
import React from "react";
const card = (props) => {
  if (props.candidates) {
    const candidates = props.candidates;
    console.log(props);
    const leaderboard = candidates.map((candidate, index) => (
      <List
        rank={index + 1}
        party={candidate.party}
        name={candidate.name}
        votes={candidate.vote}
      ></List>
    ));

    return (
      <div
        className="card bg-white flex flex-col gap-4 max-h-72 shadow-lg"
        key={Math.random()}
      >
        <div className="p-3 bg-dark-blue/[.9] mb-5">
          <p className=" text-center md:text-right text-white text-lg">
            {props.area}
          </p>
        </div>
        {leaderboard}
        {/* <List
          rank={1}
          party={"congress"}
          name={"Gagan Thapa"}
          votes={15380}
        ></List>
        <List rank={2} party={"uml"} name={"Rajan Bhattarai"} votes={9833}></List>
        <List rank={3} party={"rsp"} name={"Pukar Bam"} votes={5660}></List> */}
      </div>
    );
  }
};
export default card;
