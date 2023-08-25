import React, { useEffect, useState } from "react";
import { NavBar } from "../Features/NavBar";
import { useNavigate } from "react-router-dom";

const Aichat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(""); // State to store chatbot response

  const addChat = async () => {
    const host = "http://localhost:5000";

    try {
      const response = await fetch(`${host}/api/chatbot/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ content: input }),
      });

      const chat = await response.json();
      console.log(chat)
      setResponse(chat); // Update the response state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar />
      <div className="aichat" id="Ai-chat">
        <section className="side-bar">
          <button type="button" className="button-primary">
            {" "}
            + New Chat{" "}
          </button>
          <ul className="search-history">
            <li> Java </li>
          </ul>
          <nav>
            <p> Ai Helper </p>
          </nav>
        </section>
        <section className="main-content">
          <h1> AI Helper </h1>
          <ul className="feed">
            <textarea
              value={response}
              readOnly
              rows={5}
              cols={40}
              placeholder="Chatbot response will appear here"
            />
          </ul>
          <div className="bottom-container">
            <div className="input-container">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message"
              />
              <div id="submit" onClick={addChat}>
                ▷
              </div>
            </div>
          </div>
          <p className="info">
            This is an AI helper provided to help the students with their work.
            It will help them to understand and perform more efficiently .
          </p>
        </section>
      </div>
    </>
  );
};

export default Aichat;
