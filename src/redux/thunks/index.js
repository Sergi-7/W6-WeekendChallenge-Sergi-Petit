import {
  loadRobotsAction,
  deleteRobotAction,
  createRobotAction,
} from "../actions/actionsCreators";

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const response = await fetch(process.env.REACT_APP_URL);

    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};

export const deleteRobotThunk = (id) => {
  return async (dispatch) => {
    const response = await fetch(`${process.env.REACT_APP_URL}/delete/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch(deleteRobotAction(id));
    }
  };
};

export const createRobotThunk = (robot) => {
  return async (dispatch) => {
    const response = await fetch(`${process.env.REACT_APP_URL}/create`, {
      method: "POST",
      body: JSON.stringify(robot),
      headers: {
        "Content-type": "application/json",
      },
    });
    const newRobot = await response.json();
    dispatch(createRobotAction(newRobot));
  };
};
