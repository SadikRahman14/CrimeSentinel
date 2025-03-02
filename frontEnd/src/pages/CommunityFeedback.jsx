import React from "react";
import "./CommunityFeedback.css";

const feedbacks = [
  {
    title: "Robbery Incident Reported",
    text: "I witnessed the incident and immediately contacted the authorities. We need to work together to increase neighborhood watch programs to prevent further occurrences.",
    author: "Anonymous",
  },
  {
    title: "Snatching Incident on Main Road",
    text: "This is alarming! We should organize a community meeting to discuss safety measures and possibly install more street lights in the area.",
    author: "Anonymous",
  },
  {
    title: "Addressing Gang Rape",
    text: "This is a devastating incident that requires urgent action. We must support the victims and advocate for stronger community support services and educational programs.",
    author: "Anonymous",
  },
];

const CommunityFeedback = () => {
  return (
    <section className="feedback-section">
      <h2>Response From People On Complaints</h2>
      <p>
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id...
      </p>
      <div className="feedback-container">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="feedback-card">
            <h3>{feedback.title}</h3>
            <p className="feedback-text">{feedback.text}</p>
            <div className="feedback-footer">
              <div className="avatar"></div>
              <span className="author">{feedback.author}</span>
              <span className="quote">“</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityFeedback;
