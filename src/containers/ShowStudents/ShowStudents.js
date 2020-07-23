import React, { useState, useEffect } from "react";
import "./ShowStudents.css";
import Student from "./Student/Student";
import axios from "axios";
import EditModel from "../Model/EditModel/EditModel";

const ShowStudents = (props) => {
  const [student, setStudent] = useState([]);
  const [changes, setChanges] = useState(true);
  const [showEditModel, setEditModel] = useState(false);
  const [names, setNames] = useState("");
  const [ids, setIds] = useState("");
  const [emails, setEmails] = useState("");

  const deleteHandler = async (id) => {
    const result = await axios.delete(
      `http://localhost:9999/api/students/${id}`
    );
    console.log(result);
    setChanges(true);
  };

  const cancelEditHandler = () => {
    setEditModel(false);
  };

  const editHandler = (name, id, email) => {
    setEditModel(true);
    setNames(name);
    setEmails(email);
    setIds(id);
  };

  const saveDatabase = async (name, email, id) => {
    console.log(`name:${name}\nemail:${email}\nid:${id}`);

    const result = await axios.put(
      `http://localhost:9999/api/students/${ids}`,
      {
        name,
        email,
      }
    );
    console.log(result.data);
    setChanges(true);
  };

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("http://localhost:9999/api/students");
        let result = data.map((e) => (
          <Student
            key={e._id}
            id={e._id}
            deleteClick={() => deleteHandler(e._id)}
            editClick={() => editHandler(e.name, e._id, e.email)}
            name={e.name}
            email={e.email}
          />
        ));
        setStudent(result);
        setChanges(false);
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, [student.length, changes]);

  return (
    <div className="ShowStudents">
      {showEditModel && (
        <EditModel
          name={names}
          id={ids}
          email={emails}
          save={saveDatabase}
          cancel={() => cancelEditHandler()}
        />
      )}
      {student}
    </div>
  );
};

export default ShowStudents;
