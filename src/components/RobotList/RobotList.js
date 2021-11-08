import { useEffect } from "react";
import useRobots from "../../hooks/useRobots";
import RobotCard from "../RobotCard/RobotCard";
import "./RobotList.css";

const RobotList = () => {
  const { robots, loadRobots, deleteRobotById } = useRobots();

  // useEffect(() => {
  //   loadRobots();
  // }, [loadRobots, robots]);

  const onClickDeleteRobot = (id) => {
    deleteRobotById(id);
  };

  return (
    <>
      <ul className="list">
        {robots.map((robot) => (
          <RobotCard
            key={robot._id}
            name={robot.name}
            image={robot.image}
            stats={robot.stats}
            deleteAction={() => onClickDeleteRobot(robot._id)}
          ></RobotCard>
        ))}
      </ul>
    </>
  );
};

export default RobotList;
