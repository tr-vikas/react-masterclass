import "./App.css";
import Square from "./Square.jsx";
import Persons from "./Persons.jsx";
import WelcomeForm from "./WelcomeForm.jsx";
import TimerCounter from "./TimerCounter.jsx";

const personslist = [
  { name: "Vikas", gender: "male", age: 32 },
  { name: "Satbir", gender: "male", age: 25 },
  { name: "Neha", gender: "female", age: 30 },
  { name: "Rahul", gender: "male", age: 28 },
];

function App() {
  return (
    <div className="App">
      <TimerCounter />
      <WelcomeForm />
      <Square num={10} name="Vikas" gender="male" age={32} />
      <Square num={20} name="Satbir" gender="male" />
      <Square num={30} />
      <Square num={40} />
      <Square num={50} />
      <Square num={60} />
      <Square num={70} />
      <Square num={80} />
      <Square num={90} />
      <Persons peopleList={personslist} />
    </div>
  );
}

export default App;
