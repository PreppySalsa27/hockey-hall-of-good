import InducteeTable from "@/components/InducteeTable";
import { players } from "@/data/players";

const AllInductees = () => {
  return (
    <InducteeTable players={players} />
  );
};

export default AllInductees;
