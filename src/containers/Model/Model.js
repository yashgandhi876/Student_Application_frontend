import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Model.css";
import axios from "axios";

const Model = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      let data = {
        name,
        email,
        password,
      };
      const result = await axios.post(
        "http://localhost:9999/api/students",
        data
      );
      console.log(...result.data);
    } catch (e) {
      console.log(e.message);
    }
    window.location = window.location.href;
  };
  return (
    <div className="BackgroundModel">
      <form onSubmit={submitHandler}>
        <div className="models">
          <Input
            type="text"
            placeholder="Name"
            values={name}
            change={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="email"
            values={email}
            change={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            values={password}
            change={(e) => setPassword(e.target.value)}
          />
          <Button classname="success" name="Submit" />
          <Button click={props.cancel} classname="danger" name="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default Model;
