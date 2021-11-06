import { loadRobotsAction } from "../actions/actionsCreators";

const loadRobotsThunk = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://robots-api-sergi.herokuapp.com/robots/"
    );

    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};

export default loadRobotsThunk;
