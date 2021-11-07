import { render, screen } from "@testing-library/react";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When it receives a robot", () => {
    test("Then it should render a title and img and three paragraphs", () => {
      const robot = {
        name: "santi",
        image: "santi.dot",
        stats: {
          speed: 3,
          stamina: 3,
          date: "131313",
        },
      };
      render(
        <RobotCard name={robot.name} image={robot.image} stats={robot.stats} />
      );
      const name = screen.getByRole("heading", { Name: robot.name });
      const image = screen.getByRole("img");
      const speed = screen.getByText(`Speed : ${robot.stats.speed}`);
      const stamina = screen.getByText(`Stamina : ${robot.stats.stamina}`);
      const date = screen.getByText(`Date of creation : ${robot.stats.date}`);

      expect(name).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(speed).toBeInTheDocument();
      expect(stamina).toBeInTheDocument();
      expect(date).toBeInTheDocument();
    });
  });
});
