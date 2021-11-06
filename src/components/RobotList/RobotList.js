import { useEffect } from "react";
import useRobots from "../../hooks/useRobots";
import RobotCard from "../RobotCard/RobotCard";

const RobotList = () => {
  const { robots, loadRobots } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <>
      <ul>
        {robots.map((robot) => (
          <RobotCard
            key={robot._id}
            name={robot.name}
            image={robot.image}
            stats={robot.stats}
          ></RobotCard>
        ))}
      </ul>
    </>
  );
};

export default RobotList;
