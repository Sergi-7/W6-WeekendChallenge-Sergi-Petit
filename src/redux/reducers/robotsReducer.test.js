import RobotList from "../../components/RobotList/RobotList";
import {
  deleteRobotAction,
  loadRobotsAction,
} from "../actions/actionsCreators";
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
  describe("When it receives a deleteRobot action", () => {
    test("Then it should return a list of robots without the specified id", () => {
      const robotsList = [
        {
          name: "santi",
          image: "santi.dot",
          id: 1,
          stats: {
            speed: 3,
            stamina: 3,
            date: "131313",
          },
        },
        {
          name: "santi",
          image: "santi.dot",
          id: 2,
          stats: {
            speed: 3,
            stamina: 3,
            date: "131313",
          },
        },
      ];
      const deletedRobot = robotsList[0];

      const action = deleteRobotAction(deletedRobot.id);
      const newRobotsList = robotsReducer(robotsList, action);

      expect(newRobotsList).not.toContain(deletedRobot);
    });
  });
});
