import React, { useState } from "react";
import "./App.css";
import KanbanBoard from "./Components/KanbanBoard";

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">Mercor Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
};

export default App;
