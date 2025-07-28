import { Component } from "react";
import { Link } from "react-router-dom";
import { GrFormPreviousLink  , GrFormNextLink } from "react-icons/gr";
const apiStatus = {
  initial: "INITIAL",
  inprocess: "INPROCESS",
  success: "SUCCESS",
  fail: "FAIL",
};
class Physics extends Component {
  state = {
    list: [],
    currentQuestionIndex: 0,
    answers: {},
    score: null,
    apiStatusIs: apiStatus.initial,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({ apiStatusIs: apiStatus.inprocess });
    const url = "https://quiz-data-67qu.onrender.com/physics/qquestions/";
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        this.setState({ list: data.slice(0,3), apiStatusIs: apiStatus.success });
      } else {
        this.setState({ apiStatusIs: apiStatus.fail });
      }
    } catch (err) {
      this.setState({ apiStatusIs: apiStatus.fail });
      console.log(err);
    }
  };

  handleOptionChange = (questionId, selectedOption) => {
    this.setState((prevState) => ({
      answers: {
        ...prevState.answers,
        [questionId]: selectedOption,
      },
    }));
  };

  goToNext = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
    }));
  };

  goToPrevious = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex - 1,
    }));
  };

  calculateScore = () => {
    const { list, answers } = this.state;
    let score = 0;
    list.forEach((item) => {
      if (answers[item.id] === item.answer) {
        score += 1;
      }
    });
    this.setState({ score });
  };

 apiInprocess = () =>(
    <div className="spinner-card">
      <div className="spinner"></div>
      <p className="load">Loading...</p>
    </div>
  )
  apiInFail = () => <h1>Fetching failed. Please try again.</h1>;

  apiInSuccess = () => {
    const { list, currentQuestionIndex, answers, score } = this.state;

    if (score !== null) {
      return <div className="result-card">
         <img src="https://tse2.mm.bing.net/th/id/OIP.Ub6nv4BtGwuK3YUy59RvGwHaE8?w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3"
              className="score-img" alt='Image'/>
                <h2 className="score-display"> Your Score: {score} / {list.length}</h2>
               <Link to='/'> <button className="submit-button">Home</button> </Link>  
            </div>
    }

    const currentQuestion = list[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === list.length - 1;
    const isFirstQuestion = currentQuestionIndex === 0;
    const isOptionSelected = answers[currentQuestion.id] !== undefined;

    return (
      <div className="animal-bg-container" >
        <p className="quation"> <span className="num">{currentQuestionIndex + 1}</span>. {currentQuestion.question}</p>
        {Object.entries(currentQuestion.options).map(([optionKey, optionValue]) => (
          <div key={optionKey} className="options-card">
            <label 
             className={`label ${
            answers[currentQuestion.id] === optionKey ? "selected" : ""
            }`}
            >
              <input
                hidden
                className="input"
                type="radio"
                name={`question-${currentQuestion.id}`}
                value={optionKey}
                checked={answers[currentQuestion.id] === optionKey}
                onChange={() =>
                  this.handleOptionChange(currentQuestion.id, optionKey)
                }
              />
              {optionKey}: {optionValue}
            </label>
          </div>
        ))}

        <div>
          {!isFirstQuestion && (
            <button onClick={this.goToPrevious} className="previous-button"><GrFormPreviousLink/></button>
          )}
          {!isLastQuestion && (
            <button disabled={!isOptionSelected} onClick={this.goToNext} className="previous-button" ><GrFormNextLink /> </button>
          )}

          {isLastQuestion && (
            <button disabled={!isOptionSelected} onClick={this.calculateScore} className="submit-button"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    );
  };

  displayQuiz = () => {
    const { apiStatusIs } = this.state;

    switch (apiStatusIs) {
      case apiStatus.inprocess:
        return this.apiInprocess();
      case apiStatus.fail:
        return this.apiInFail();
      case apiStatus.success:
        return this.apiInSuccess();
      default:
        return null;
    }
  };

  render() {
    return <>{this.displayQuiz()}</>;
  }
}

export default Physics;
