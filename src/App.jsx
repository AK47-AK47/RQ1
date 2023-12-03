import StudentForm from "./StudentForm.jsx";
import Results from "./Results.jsx";
import './App.css';

export default function App() {
  return (
    <>
      <header><h1>Student Data Form</h1></header>
      <main>
        <div class="container">
          <div class="container-item"><StudentForm></StudentForm></div>
          <div class="container-item"><Results></Results></div>
        </div>
      </main>
    </>
  )
};

 App;
