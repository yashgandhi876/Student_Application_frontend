import React from "react";
import Button from "../../Button/Button";
import "./Student.css";

const Student = (props) => {
  return (
    <div className="student">
      <div className="details">
        <h3>{props.name}</h3>
        <h3>{props.email}</h3>
      </div>
      <div>
        <Button click={props.editClick} classname="success" name="Edit" />
        <Button click={props.deleteClick} classname="danger" name="Delete" />
      </div>
    </div>
  );
};

export default Student;
