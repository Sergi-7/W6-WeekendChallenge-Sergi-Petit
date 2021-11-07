const RobotCard = ({ name, image, stats, deleteAction, editAction }) => {
  return (
    <li>
      <h2>{name}</h2>
      <img src={image} alt={name} width="300" height="300"></img>
      <p>{`Speed : ${stats.speed}`}</p>
      <p>{`Stamina : ${stats.stamina}`}</p>
      <p>{`Date of creation : ${stats.date} `}</p>
      <button onClick={deleteAction}>Delete</button>
      <button onClick={editAction}>Edit</button>
    </li>
  );
};

export default RobotCard;
