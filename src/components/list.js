import congress from "../icons/congress.png";
import uml from "../icons/uml.png";
import rsp from "../icons/rsp.png";
import lsp from "../icons/lsp.png";
import jsp from "../icons/jsp.png";
import rpp from "../icons/rpp.png";
import maoist from "../icons/maoist.png";
import socialist from "../icons/socialist.png";
import independent from "../icons/independent.png";
import lauro from "../icons/lauro.jpg";
const List = (props) => {
  const colors = ["bg-dark-blue/[.95]", "bg-light-green", "bg-light-yellow"];

  if (props) {
    let { name, party, rank, votes } = props;
    console.log(props);
    const chooseImage = () => {
      if (party === "Nepali Congress") return congress;
      else if (party === "CPN UML") return uml;
      else if (party === "Rastriya Prajatantra Party") return rpp;
      else if (party === "CPN Maoist") return maoist;
      else if (party === "Loktantrik Samajwadi Party") return lsp;
      else if (party === "Janata Samajwadi Party") return jsp;
      else if (party === "CPN (Unified Socialist)") return socialist;
      else if (party === "Rastriya Swatantra Party") return rsp;
      else if (party === "Hamro Nepali Party") return lauro;
      else return independent;
    };
    let nameArr = name.split(" ");
    let finalName = nameArr[0] + " " + nameArr.slice(-1);
    return (
      <div className="item flex flex-row  bg-cust-grey">
        <div className={colors[rank - 1] + ` p-3 w-12`}>
          <p className="text-white  text-center ">{rank}</p>
        </div>
        <div className="flex flex-row justify-between w-60 p-3">
          <img src={chooseImage()} className="max-h-8 max-w-8"></img>
          <p className="text-light-black ">{finalName}</p>
          <p className="vote-count text-black font-bold">{votes}</p>
        </div>
      </div>
    );
  }
};
export default List;
