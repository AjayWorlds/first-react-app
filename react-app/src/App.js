import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function TodoList({ todo, index, markTodo, removeTodo, undoTodo, deleteTodo }) {
  return (
    <>
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" } , { display: todo.deleted ? "none" : ""}}>{todo.text}</span>
      <div style={{ display: todo.deleted ? "none" : ""}}>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
      <div style={{ display: todo.deleted ? "" : "none"}}>
       <>
        <Button variant="outline-success" onClick={() => undoTodo(index)}>UNDO</Button>
        <Button variant="outline-danger" onClick={() => deleteTodo(index)} >Delete</Button> 
        </>
      </div>
    </div>
    </>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <>
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Todo</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  </>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sampe todo",
      isDone: false,
      deleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    //newTodos.splice(index, 1);
    newTodos[index].deleted = true;
    setTodos(newTodos);
  };

  const undoTodo = index => {
    const newTodos = [...todos];
    //newTodos.splice(index, 1);
    newTodos[index].deleted = false;
    setTodos(newTodos);
  };
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <TodoList
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                undoTodo={undoTodo}
                deleteTodo={deleteTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;