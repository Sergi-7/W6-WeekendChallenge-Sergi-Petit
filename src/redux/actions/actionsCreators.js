import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const deleteRobotAction = (id) => ({
  type: actionTypes.deleteRobot,
  id,
});

export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});

export const updateRobotAction = (robot, id) => ({
  type: actionTypes.updateRobot,
  robot,
  id,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});
