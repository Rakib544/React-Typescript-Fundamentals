import "./App.css";
import Greets from "./components/Greets";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const person = {
    fName: "Md",
    lName: "Rakib",
    age: 21,
  };

  const nameList = [
    {
      name: "DPI",
      location: "Dhaka",
    },
    {
      name: "Bormi Union High School",
      location: "Bormi",
    },
  ];
  return (
    <div className="App">
      <Greets name="Rakib" projectCount={30} />
      <Person name={person} />
      <PersonList names={nameList} />
      <Status status="loading" />
    </div>
  );
}

export default App;
