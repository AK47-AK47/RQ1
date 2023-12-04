import StudentForm from "./StudentForm.jsx";
import Results from "./Results.jsx";
import './App.css';
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    isValid:false,
  });
  
  return (
    <>
      <header><h1>Student Data Form</h1></header>
      <main>
        <div className="container">
          <div className="container-item"><StudentForm formData={formData} setFormData={setFormData} ></StudentForm></div>
          <div className="container-item"><Results formData={formData} ></Results></div>
        </div>
      </main>
    </>
  )
};
