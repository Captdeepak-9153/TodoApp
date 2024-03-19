import { useState } from "react";
import Header from "./components/Header";
import Todoitem from "./components/Todoitem";
import Button from "./components/Button";
import "./App.css";

function App() {
  //here i can use useState and all the Hooks to make changes on todo app of adding list and removing list and all other opearations
  return (
    <>
      <div className="container mx-auto p-6 lg:w-3/4 xl:w-1/2 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-lg shadow-lg">
        <Header />
        <Button />
      </div>
    </>
  );
}

export default App;
