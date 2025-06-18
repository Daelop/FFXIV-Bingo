import { BingoGoal } from "./BingoGoal";

interface BingoBoardProps {
  goals: string[];
  size: [number, number];
  players: {
    name: string;
    color: string;
  }[];
}
export const BingoBoard = (props: BingoBoardProps) => {
  const className = `grid grid-cols-${props.size[0]} grid-rows-${props.size[1]} gap-2 p-2 aspect-square max-h-screen mx-auto`;
  return (
    <>
      <div className={className} style={{scale: "0.75"}}>
        {props.goals.map((goal, index) => {
          const row = Math.floor(index / props.size[0]);
          const col = Math.floor(index / props.size[1]);
          return (
            <BingoGoal position={[row+1,col+1]} goal={goal} key={index}/>
          );
        })}
      </div>
    </>
  );
};
