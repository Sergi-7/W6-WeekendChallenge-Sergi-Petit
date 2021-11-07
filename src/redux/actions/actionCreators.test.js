import actionTypes from "./actionTypes";
import { loadRobotsAction } from "./actionsCreators";

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
