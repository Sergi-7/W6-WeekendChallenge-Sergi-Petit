import RobotList from "../../components/RobotList/RobotList";
import { loadRobotsAction } from "../actions/actionsCreators";
import actionTypes from "../actions/actionTypes";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer", () => {
  describe("When it receives a loadRobots action", () => {
    test("Then it should return a list with all the robots", () => {
      const initialRobotsList = [];
      const robotsList = [
        {
          name: "santi",
          image: "santi.dot",
          stats: {
            speed: 3,
            stamina: 3,
            date: "131313",
          },
        },
        {
          name: "santi",
          image: "santi.dot",
          stats: {
            speed: 3,
            stamina: 3,
            date: "131313",
          },
        },
      ];

      const action = { type: actionTypes.loadRobots, robots: robotsList };

      const newList = robotsReducer(initialRobotsList, action);

      expect(newList).toEqual(robotsList);
    });
  });
});
