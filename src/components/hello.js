import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";

import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, TextField } from "@mui/material";

const Hello = () => {
  const [message, setMessage] = useState("");
  const [newTodo, setNewTodo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setTodo(data.tasks));
  });

  const addTodo = async () => {
    try {
      const response = await axios.post("http://localhost:5000/", {
        task: newTodo,
      });
      console.log(newTodo);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/${id}`);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box
      sx={{
        // width: "50%",
        // backgroundColor: "white",
        textAlign: "center",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      {/* <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      /> */}
      <TextField
        id="outlined-basic"
        label="Add Task"
        variant="outlined"
        type="text"
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
          backgroundColor: "#DBDFEA",
          borderRadius: "10px",
        }}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button onClick={addTodo}>
        <AddIcon
          sx={{
            marginTop: "5px",
            color: "lightgreen",
          }}
        />
      </Button>
      {/* <Typography variant="h5"> There are {todo.length} task listed</Typography> */}
      <table
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#0C134F",
          borderRadius: "10px",
        }}
      >
        <ol>
          {todo.map((todo) => (
            <li key={todo.id}>
              <tr>
                <td>{todo.task}</td>
                <td style={{ textAlign: "right" }}>
                  <Button onClick={() => deleteTodo(todo.id)}>
                    <DeleteIcon
                      sx={{
                        marginLeft: "auto",
                        alignContent: "right",
                        marginRight: "0px",
                        color: "red",
                        backgroundColor: "white",
                      }}
                    />
                  </Button>
                </td>
              </tr>
            </li>
          ))}
        </ol>
      </table>
    </Box>
  );
};

export default Hello;
