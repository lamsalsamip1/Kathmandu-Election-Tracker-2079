import Card from "./card.js";
const ProvincialAssembly = () => {
  const constituencies = [
    "1 'A'",
    "1 'B'",
    "2 'A'",
    "2 'B'",
    "3 'A'",
    "3 'B'",
    "4 'A'",
    "4 'B'",
    "5 'A'",
    "5 'B'",
    "6 'A'",
    "6 'B'",
    "7 'A'",
    "7 'B'",
    "8 'A'",
    "8 'B'",
    "9 'A'",
    "9 'B'",
    "10 'A'",
    "10 'B'",
  ];
  const electionCards = constituencies.map((number) => (
    <Card key={number} area={number}></Card>
  ));
  return (
    <div className="flex justify-center gap-10 w-100 px-20 pt-20 flex-wrap gap-y-14">
      {electionCards}
    </div>
  );
};

export default ProvincialAssembly;
