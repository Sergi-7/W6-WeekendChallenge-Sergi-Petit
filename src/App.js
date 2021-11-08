import "./App.css";
import Form from "./components/Form/Form";
import RobotList from "./components/RobotList/RobotList";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <h1>My Robot Page</h1>
      <Login />
      <Form />
      <RobotList />
    </>
  );
}

export default App;
