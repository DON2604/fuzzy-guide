import React from 'react'

const Aichat = () => {
  return (
    <div className="aichat" id ="Ai-chat">
        <section className="side-bar">
            <button type="button" className="button-primary"> + New Chat </button>
            <ul className="search-history">
                <li> Java </li>
            </ul>
            <nav>
                <p> Ai Helper </p>
            </nav>
        </section>
        <section className="main-content">
            <h1> AI Helper </h1>
            <ul className="feed"></ul>
            <div className="bottom-container">
                <div className="input-container">
                    <input/>
                    <div id ="submit">▷</div>
                </div>
            </div>
            <p className="info">
                This is an AI helper provided  to help the students with their work.
                It will help them to understand and perform more efficiently .

            </p>

        </section>

    </div>
  )
}

export default Aichat