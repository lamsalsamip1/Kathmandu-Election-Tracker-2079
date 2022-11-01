import congress from "../icons/congress.png";
import uml from "../icons/uml.png";
import rsp from "../icons/rsp.png";
const list = (props) => {
  const colors = ["bg-dark-blue/[.95]", "bg-light-green", "bg-light-yellow"];
  let { rank, party, name, votes } = props;
  const ranks = ["1st", "2nd", "3rd"];
  const chooseImage = () => {
    if (party == "congress") return congress;
    else if (party == "uml") return uml;
    else if (party == "rsp") return rsp;
  };

  return (
    <div className="item flex flex-row  bg-cust-grey">
      <div className={colors[rank - 1] + ` p-3 w-12`}>
        <p className="text-white  text-center ">{ranks[rank - 1]}</p>
      </div>
      <div className="flex flex-row justify-between w-60 p-3">
        <img src={chooseImage()} className="max-h-8 max-w-8"></img>
        <p className="text-light-black ">{name}</p>
        <p className="vote-count text-black font-bold">{votes}</p>
      </div>
    </div>
  );
};
export default list;
