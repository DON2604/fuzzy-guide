import React, { useEffect, useState } from "react";
import { NavBar } from "../Features/NavBar";
import { useNavigate } from "react-router-dom";

const host = "http://localhost:5000";

const Aichat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(""); // State to store chatbot response
  const chatsInitial = [];
  const [chats, setChats] = useState(chatsInitial);

  // const reloadChat = async (chat) => {
  //   setInput(chat)
  // }

  const getChats = async () => {
    try {
      const prevRes = await fetch(`${host}/api/oldchat/fetchallchats`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await prevRes.json();
      console.log(json);
      setChats(json);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addChat = async () => {
    try {
      const response = await fetch(`${host}/api/chatbot/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ content: input }),
      });
      const ResChat = await fetch(`${host}/api/oldchat//addchat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title: input }),
      });

      const newChat = await ResChat.json()
      const chat = await response.json()
      console.log(newChat);
      getChats();
      console.log(chat);
      setResponse(chat); // Update the response state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  let navigate = useNavigate();

  useEffect(() => {
    getChats();
    // eslint-disable-next-line
  }, []);

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
          <ul className="search-history">
            <li>Search History</li>
            {chats.length===0?<li>Nothing to show</li>:""}
            {chats.map((chat) => (
              <li>{chat.title}</li>
            ))}
          </ul>
        </section>
        <section className="main-content">
          <h1> AI Helper </h1>
          <ul className="feed">
            <textarea
              className="response-textarea"
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
                className="input-field"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What do you want to learn?"
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
