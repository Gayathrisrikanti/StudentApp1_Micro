import React from "react";
import ReactDOM from "react-dom/client"; 
import StudentForm from './StudentForm';
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: StudentAPP1</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <StudentForm /> 
  </div>
);

const container = document.getElementById("app"); 
const root = ReactDOM.createRoot(container);
root.render(<App />); 
