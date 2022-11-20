import Card from "./card.js";
const ProvincialAssembly = (props) => {
  if (props.data) {
    const provincialResults = props.data.slice(10, 30);
    const electionCards = provincialResults.map((constituency) => (
      <Card
        key={constituency.id}
        area={constituency.election_area}
        candidates={constituency.candidates}
      ></Card>
    ));
    return (
      <div className="flex justify-center gap-10 w-100 px-20 pt-10 md:pt-20 flex-wrap gap-y-14">
        {electionCards}
      </div>
    );
  }
};

export default ProvincialAssembly;
