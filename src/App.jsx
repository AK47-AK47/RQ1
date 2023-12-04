import StudentForm from "./StudentForm.jsx";
import Results from "./Results.jsx";
import './App.css';
import { useState } from "react";

export default function App() {
  

  const [resultsData, setResultsData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    isValid: false,
  });
  
  return (
    <>
      <header><h1>Student Data Form</h1></header>
      <main>
        <div className="container">
          <div className="container-item"><StudentForm setResultsData={setResultsData} ></StudentForm></div>
          <div className="container-item"><Results resultsData={resultsData} ></Results></div>
        </div>
      </main>
    </>
  )
};
