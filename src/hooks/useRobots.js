import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadRobotsThunk,
  deleteRobotThunk,
  createRobotThunk,
  updateRobotThunk,
} from "../redux/thunks";

const useRobots = () => {
  const dispatch = useDispatch();
  const robots = useSelector(({ robots }) => robots);

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const deleteRobotById = (id) => {
    dispatch(deleteRobotThunk(id));
  };

  const createRobot = (robot) => {
    dispatch(createRobotThunk(robot));
  };

  const updateRobot = (robot, id) => {
    dispatch(updateRobotThunk(robot, id));
  };

  return {
    robots,
    loadRobots,
    deleteRobotById,
    createRobot,
    updateRobot,
  };
};

export default useRobots;
