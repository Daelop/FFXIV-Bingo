import { BingoBoard } from "@/components/BingoBoard";
import { testGoals } from "@/data/goals";

export default function Home() {
  return (
  <BingoBoard goals={testGoals} players={[]} size={[5,5]}/>
  );
}
