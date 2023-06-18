import React, { useState } from "react";
import Card from "./Card";
import "../Styles/KanbanBoard.css";

const KanbanBoard = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Brainstorming",
      description:
        "Brainstorming brings team members' diverse experience into play.",
      column: "To Do",
      comments: 12,
      files: 0,
    },
    {
      id: 2,
      title: "Research",
      description:
        "User research helps you to create an optimal product for users.",
      column: "To Do",
      comments: 10,
      files: 3,
    },
    {
      id: 3,
      title: "Wireframes",
      description:
        "Low fidelity wireframes include the most basic content and visuals.",
      column: "To Do",
      comments: 2,
      files: 0,
    },
    {
      id: 4,
      title: "Onboarding Illustrations",
      description: "",
      column: "In Progress",
      comments: 14,
      files: 15,
    },
    {
      id: 5,
      title: "Moodboard",
      description: "",
      column: "In Progress",
      comments: 9,
      files: 10,
    },
    {
      id: 6,
      title: "Mobile App Design",
      description: "",
      column: "Done",
      comments: 12,
      files: 15,
    },
    {
      id: 7,
      title: "Design System",
      description: "It just needs to adapt the UI from what you did before",
      column: "Done",
      comments: 12,
      files: 15,
    },
  ]);

  const moveCard = (cardId, newColumn) => {
    const updatedCards = cards.map((card) =>
      card.id === parseInt(cardId) ? { ...card, column: newColumn } : card
    );
    setCards(updatedCards);
  };

  const getCardCount = (columnName) => {
    return cards.filter((card) => card.column === columnName).length;
  };

  return (
    <div className="kanban-board">
      <div
        className="column"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const cardId = e.dataTransfer.getData("text/plain");
          moveCard(cardId, "To Do");
        }}
      >
        <h2 className="column-title">
          <span className="bullet blue-bullet"></span>To Do
          <span className="card-count">{getCardCount("To Do")}</span>
        </h2>
        <hr className="horizontal-line blue-line" />
        {/* <div
          className="card-container"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const cardId = e.dataTransfer.getData("text/plain");
            moveCard(cardId, "To Do");
          }}
        > */}
        {cards
          .filter((card) => card.column === "To Do")
          .map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              column={card.column}
              comments={card.comments}
              files={card.files}
              moveCard={moveCard}
            />
          ))}
        {/* </div> */}
      </div>
      <div
        className="column"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const cardId = e.dataTransfer.getData("text/plain");
          moveCard(cardId, "In Progress");
        }}
      >
        <h2 className="column-title">
          <span className="bullet orange-bullet"></span>In Progress
          <span className="card-count">{getCardCount("In Progress")}</span>
        </h2>
        <hr className="horizontal-line orange-line" />
        {/* <div
          className="card-container"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const cardId = e.dataTransfer.getData("text/plain");
            moveCard(cardId, "In Progress");
          }}
        > */}
        {cards
          .filter((card) => card.column === "In Progress")
          .map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              column={card.column}
              moveCard={moveCard}
              description={card.description}
              comments={card.comments}
              files={card.files}
            />
          ))}
        {/* </div> */}
      </div>
      <div
        className="column"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const cardId = e.dataTransfer.getData("text/plain");
          moveCard(cardId, "Done");
        }}
      >
        <h2 className="column-title">
          <span className="bullet green-bullet"></span>Done
          <span className="card-count">{getCardCount("Done")}</span>
        </h2>
        <hr className="horizontal-line green-line" />
        {/* <div
          className="card-container"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const cardId = e.dataTransfer.getData("text/plain");
            moveCard(cardId, "Done");
          }}
        > */}
        {cards
          .filter((card) => card.column === "Done")
          .map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              column={card.column}
              moveCard={moveCard}
              description={card.description}
              comments={card.comments}
              files={card.files}
            />
          ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default KanbanBoard;
