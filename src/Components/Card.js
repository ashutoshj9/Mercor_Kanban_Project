import React from "react";
import "../Styles/Card.css";

const Card = ({
  id,
  title,
  column,
  moveCard,
  description,
  comments,
  files,
}) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", id);
    e.dataTransfer.dropEffect = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("text/plain");
    moveCard(cardId, column);
  };

  const DESCRIPTION = () => {
    if (id === 4) {
      return (
        <div>
          <img
            src="https://images.unsplash.com/photo-1530903677198-7c9f3577a63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1904&q=80"
            height={"200px"}
            width={"100%"}
            style={{ borderRadius: 10 }}
            className="card-description"
          />
        </div>
      );
    } else if (id === 5) {
      return (
        <div>
          <img
            src="https://images.unsplash.com/photo-1502920873987-ac48e660a95d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            height={"79"}
            width={"131px"}
            style={{ borderRadius: 10 }}
            className="card-description"
          />
          <img
            src="https://images.unsplash.com/photo-1601758123927-4f7acc7da589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            height={"79px"}
            width={"131px"}
            style={{ borderRadius: 10 }}
            className="card-description"
          />
        </div>
      );
    } else if (id === 6) {
      return (
        <div>
          <img
            src="https://cdn.dribbble.com/users/3094188/screenshots/16909051/media/edc8ced34849e83f32b3a05c2df09b5d.png?compress=1&resize=1000x750&vertical=center"
            height={"250px"}
            width={"100%"}
            style={{ borderRadius: 10 }}
            className="card-description"
          />
        </div>
      );
    } else {
      return <p className="card-description">{description}</p>;
    }
  };

  return (
    <div
      className="card"
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="count">
          <span className="count_name">{comments} comments</span>
          <span className="count_name">{files} files</span>
        </div>
      </div>
      {DESCRIPTION()}
    </div>
  );
};

export default Card;
