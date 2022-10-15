import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element={< ExerciseList />} />
          <Route path="/edit/:id" element={< EditExercise />} />
          <Route path="/create" element={< CreateExercise />} />
          <Route path="/user" element={< CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
