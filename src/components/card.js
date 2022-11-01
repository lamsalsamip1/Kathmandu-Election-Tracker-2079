import List from "./list.js";
const card = (props) => {
  return (
    <div className="card bg-white flex flex-col gap-4 max-h-72 shadow-lg">
      <div className="p-3 bg-dark-blue/[.9] mb-5">
        <p className=" text-right text-white text-lg">
          Kathmandu - {props.area}
        </p>
      </div>

      <List
        rank={1}
        party={"congress"}
        name={"Gagan Thapa"}
        votes={15380}
      ></List>
      <List rank={2} party={"uml"} name={"Rajan Bhattarai"} votes={9833}></List>
      <List rank={3} party={"rsp"} name={"Pukar Bam"} votes={5660}></List>
    </div>
  );
};
export default card;
