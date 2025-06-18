interface BingoGoalProps {
  goal: string;
  position: [number, number];
}
export const BingoGoal = (props:BingoGoalProps) => {
    const style = `row-${props.position[0]} col-${props.position[1]} text-black bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center`;
  return (
    <div className={style}>
      <p className="mx-auto">{props.goal}</p>
    </div>
  );
}