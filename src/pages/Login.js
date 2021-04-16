import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Login = () => {
  const [input, setInput] = useState({});

  const HandleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };
  
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("auth", input);
      localStorage.setItem("token", data);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-100 mt-5">
        <h2 className="text-center">Vlog Primer Amor</h2>
      </div>
      <div className="login">
        <Form onSubmit={HandleSubmit} className="FormLogin card">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => HandleChange(e)}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => HandleChange(e)}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <div>
            <a href="">No tienes cuenta?, create una cuenta</a>
          </div>
          <Button variant="primary" type="submit">
            Iniciar Sesion
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Login;
