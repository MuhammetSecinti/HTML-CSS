import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import "./styles.css";

const Input = () => {
  const [items, setItems] = useState([
    { id: 1, label: "Spor yapmak", checked: false },
    { id: 2, label: "Kitap okumak", checked: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const handleCheckboxChange = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const inputChange = (e) => {
    const newTodo = {
      id: Date.now(),
      label: e.target.value,
      checked: false,
    };
    setInputValue(newTodo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prevItems) => [...prevItems, inputValue]);
    setInputValue("");
  };
  console.log(items);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control onChange={inputChange} type="search" placeholder="" />
      <Button className="text-end mt-3" type="submit">
        Ekle
      </Button>

      {items.map((item) => (
        <div
          key={item.id}
          className="mb-3 d-flex align-items-center justify-content-between"
          style={{ fontSize: "1.25rem" }}
        >
          <Form.Check
            type="checkbox"
            id={`checkbox-${item.id}`}
            label={
              <span
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.label}
              </span>
            }
            checked={item.checked}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <TiDeleteOutline
        
            className="ms-2 text-danger"
            style={{ cursor: "pointer" , transform: "scale(2)" }}
            onClick={() => handleDelete(item.id)}
          />
        </div>
      ))}
    </Form>
  );
};

export default Input;
