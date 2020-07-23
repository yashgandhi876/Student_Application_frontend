import React, { useState } from "react";
import "./App.css";
import Button from "./containers/Button/Button";
import Model from "./containers/Model/Model";
import ShowStudents from "./containers/ShowStudents/ShowStudents";

function App() {
  const [showModel, setShowModel] = useState(false);

  const addStudentHandler = () => {
    setShowModel(true);
  };
  const cancelHandler = () => {
    setShowModel(false);
  };

  return (
    <div className="App">
      {showModel && <Model cancel={() => cancelHandler()} />}
      <div className="Model">
        <Button
          click={() => addStudentHandler()}
          classname="success"
          name="Add Student"
        />
      </div>
      <div className="showstudents">
        <ShowStudents />
      </div>
    </div>
  );
}

export default App;
