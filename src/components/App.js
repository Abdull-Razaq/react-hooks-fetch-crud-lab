import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function getData(newQuestion) {
    const newQuestion = [...questions, newQuestion]
    setQuestions(newQuestion)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm getData={getData}/> : <QuestionList questions={questions} setQuestions={setQuestions}/>}
    </main>
  );
}

export default App;
