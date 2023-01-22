import React,{ useEffect} from "react";

function QuestionList({questions, setQuestions}) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => {
      setQuestions(data)
    })
  },[questions] )

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions.map((question)=> {<QuestionItem question={question} key={question.id} />})}

      </ul>
    </section>
  );
}

export default QuestionList;
