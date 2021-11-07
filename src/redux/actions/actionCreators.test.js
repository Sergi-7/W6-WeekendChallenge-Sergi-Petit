import actionTypes from "./actionTypes";
import {
  createRobotAction,
  deleteRobotAction,
  loadRobotsAction,
} from "./actionsCreators";

describe("Given a loadRobotsAction", () => {
  describe("When it receives a list of robots", () => {
    test("Then it should return a loadRobotsAction with robots received", () => {
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
      const expectedAction = {
        type: actionTypes.loadRobots,
        robots: robotsList,
      };

      const actionResult = loadRobotsAction(robotsList);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteRobotAction", () => {
  describe("When it receives an id", () => {
    test("Then it should return a type action with the id", () => {
      const id = 1;
      const expectedAction = {
        type: actionTypes.deleteRobot,
        id,
      };

      const actionResult = deleteRobotAction(id);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a createRobotAction", () => {
  describe("When it receives a robot", () => {
    test("Then it should create a type action with the new robot", () => {
      const newRobot = {
        name: "santi",
        image: "santi.dot",
        stats: {
          speed: 3,
          stamina: 3,
          date: "131313",
        },
      };

      const expectedAction = {
        type: actionTypes.createRobot,
        robot: newRobot,
      };

      const actionResult = createRobotAction(newRobot);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
