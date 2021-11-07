import { useState } from "react";
import useRobots from "../../hooks/useRobots";

const Form = () => {
  const initialRobot = {
    name: "",
    image: "",
    stats: {
      speed: "",
      stamina: "",
      date: new Date(),
    },
  };
  const { createRobot } = useRobots();
  const [robot, setNewRobot] = useState(initialRobot);

  const handleSubmit = (event) => {
    event.preventDefault();
    createRobot(robot);
    setNewRobot(initialRobot);
  };

  const handleNameOnChange = (event) => {
    setNewRobot({ ...robot, name: event.target.value });
  };
  const handleImageOnChange = (event) => {
    setNewRobot({ ...robot, image: event.target.value });
  };

  const handleSpeedOnChange = (event) => {
    setNewRobot({
      ...robot,
      stats: { ...robot.stats, speed: event.target.value },
    });
  };

  const handleStaminaOnChange = (event) => {
    setNewRobot({
      ...robot,
      stats: { ...robot.stats, stamina: event.target.value },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Robot Name :</label>
      <input
        type="text"
        id="name"
        value={robot.name}
        onChange={handleNameOnChange}
      ></input>
      <label htmlFor="image">Image Url :</label>
      <input
        type="url"
        id="image"
        value={robot.image}
        onChange={handleImageOnChange}
      ></input>
      <label htmlFor="speed">Speed :</label>
      <input
        type="number"
        id="speed"
        min="0"
        max="10"
        value={robot.stats.speed}
        onChange={handleSpeedOnChange}
      ></input>
      <label htmlFor="stamina">Stamina :</label>
      <input
        type="number"
        id="stamina"
        min="0"
        max="10"
        value={robot.stats.stamina}
        onChange={handleStaminaOnChange}
      ></input>
      <button type="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
