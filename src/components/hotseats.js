import Card from "./card.js";

const HotSeats = (props) => {
  if (props.data) {
    const parliamentResults = props.data.slice(30, 40);
    console.log(parliamentResults[0].candidates);
    const electionCards = parliamentResults.map((constituency) => (
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

export default HotSeats;
