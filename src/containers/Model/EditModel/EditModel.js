import React, { useState } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

import "./EditModel.css";

const EditModel = (props) => {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);

  const submitHandler = () => {};

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
          <Button
            click={() => props.save(name, email, props.id)}
            classname="success"
            name="Save"
          />
          <Button click={props.cancel} classname="danger" name="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default EditModel;
