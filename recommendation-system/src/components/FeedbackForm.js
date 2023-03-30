import axios from "axios";
import React, { useState } from "react";
import "../css/feedback.css";

function FeedbackForm() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleFeedback(e) {
    e.preventDefault();
    console.log(email + " " + feedback);
    axios
      .post(`http://localhost:3001/feedbackR`, {
        email,
        feedback,
      })
      .then((resp) => {
        alert(resp.data);
      });
    setEmail("");
    setFeedback("");
  }

  return (
    <div className="form-body">
      <div className="card">
        <div className="form-heading">
          <center>
            <h3 style={{ color: "whitesmoke" }}>
              Feedback<span className="crop_icon">✍🏻</span>
            </h3>
          </center>
        </div>
        <div className="card-body">
          <form onSubmit={handleFeedback}>
            <div className="input-group input-group-outline mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="input-group input-group-outline mb-4">
              <input
                type="text"
                required
                className="form-control"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Feedback"
                id="floatingTextarea"
              ></input>
            </div>
            <button style={{ color: "whitesmoke" }} className="btn custom-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
