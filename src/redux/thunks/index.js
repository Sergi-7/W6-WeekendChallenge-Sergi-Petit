import {
  loadRobotsAction,
  deleteRobotAction,
  createRobotAction,
} from "../actions/actionsCreators";

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://robots-api-sergi.herokuapp.com/robots/"
    );

    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};

export const deleteRobotThunk = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://robots-api-sergi.herokuapp.com/robots/delete/${id}`,
      { method: "DELETE" }
    );
    if (response.ok) {
      dispatch(deleteRobotAction(id));
    }
  };
};

export const createRobotThunk = (robot) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://robots-api-sergi.herokuapp.com/robots/create`,
      {
        method: "POST",
        body: JSON.stringify(robot),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const newRobot = await response.json();
    dispatch(createRobotAction(newRobot));
  };
};
