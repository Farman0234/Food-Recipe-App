import React from "react";
import Mainpage from "./Components/Mainpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mealinfo from "./Components/Mealinfo";
import FunnyErrorPage from "./Components/FunnyErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:mealid" element={<Mealinfo />} />z
      </Routes>
      
      </>
  );
}

export default App;
