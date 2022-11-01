import Card from "./card.js";

const FederalParliament = () => {
  const constituencies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const electionCards = constituencies.map((number) => (
    <Card key={number} area={number}></Card>
  ));
  return (
    <div className="flex justify-center gap-10 w-100 px-20 pt-20 flex-wrap gap-y-14">
      {electionCards}
    </div>
  );
};

export default FederalParliament;
