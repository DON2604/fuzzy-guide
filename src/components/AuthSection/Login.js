import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import PopupNotification from "./popup";

export default function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPopup, setShowPopup] = useState(false);
  let navigate = useNavigate();

  const host = "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //refirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      setShowPopup(true);
    } 
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <Container className="my-3">
    <h2>Login to continue to PathForge</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={onChange}
          value={credentials.email}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={onChange}
          value={credentials.password}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link className="btn btn-primary mx-3" to="/signup">Signup</Link>
    </Form>
    {showPopup && <PopupNotification message="You are successfully logged in....." />}
    </Container>
  );
}
