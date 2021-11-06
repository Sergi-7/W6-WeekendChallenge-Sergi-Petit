const RobotCard = ({ name, image, stats }) => {
  return (
    <li>
      <h2>{name}</h2>
      <img src={image} alt={name}></img>
      <p>{stats.speed}</p>
      <p>{stats.stamina}</p>
      <p>{stats.date}</p>
    </li>
  );
};

export default RobotCard;
