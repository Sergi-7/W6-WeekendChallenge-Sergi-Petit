import {
  loadRobotsAction,
  deleteRobotAction,
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
