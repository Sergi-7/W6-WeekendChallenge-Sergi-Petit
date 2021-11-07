import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk, deleteRobotThunk } from "../redux/thunks";

const useRobots = () => {
  const dispatch = useDispatch();
  const robots = useSelector(({ robots }) => robots);

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const deleteRobotById = (id) => {
    dispatch(deleteRobotThunk(id));
  };

  return {
    robots,
    loadRobots,
    deleteRobotById,
  };
};

export default useRobots;
