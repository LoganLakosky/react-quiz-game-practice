function App() {
  const questions = ["Who is the president", "What is my dogs name"];
  const correctAnswers = ["Joe Biden", "Carbone"];

  const questionInformation = ["My dog", "You", "me", "Dog", "Meow"];

  function handleQuestionSubmit() {
    //    setCurrentQuestionValue(currentQuestionInformation[0]);
  }

  return (
    <main className="mainContainer">
      <div className="quizContainer">
        <section className="questionContainer">
          <h1>{}</h1>
        </section>
        <section className="answersContainer">
          <div className="firstTwoAnswers"></div>
          <div className="lastTwoAnswers"></div>
        </section>
        <div className="submitBtnContainer">
          <button onClick={handleQuestionSubmit}>Submit</button>
        </div>
      </div>
    </main>
  );
}

export default App;
