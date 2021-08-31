import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../api";
import Question from "../../components/Question";
import styles from "./Quiz.module.css";
import Constants from "../../constants/index";
const Quiz = ({ location }) => {
  const History = useHistory();
  const [ErrorText, setErrorText] = useState("");
  const { state } = location;
  const [Qeustions, setQeustions] = useState([]);
  const [QuestionCounter, setQuestionCounter] = useState(0);
  const [Score, setScore] = useState(0);
  useEffect(() => {
    api
      .GetQuestions(state?.Category, state?.Difficulty)
      .then((d) => setQeustions(d))
      .catch(() => setErrorText("Something went wrong"));
  }, []);
  const restartHandler = () => {
    setQuestionCounter(0);
    setScore(0);
  };
  const newGameHandler = () => {
    History.push(Constants.PAGE_MAIN);
  };
  if (ErrorText != "") {
    return <div>Some thing went wrong</div>;
  }
  return (
    <div className={styles.gameContainer}>
      <h1 className={styles.gameHeading}>Quiz Game</h1>
      {QuestionCounter < 10 ? (
        <Question
          Question={Qeustions[QuestionCounter]}
          setQuestionCounter={setQuestionCounter}
          setScore={setScore}
        />
      ) : (
        <div className={styles.finalScoreContainer}>
          <h3>Final Score is: {Score}</h3>
          <div className={styles.buttonContainer}>
            <button onClick={restartHandler} className={styles.button}>
              Restart
            </button>
            <button onClick={newGameHandler} className={styles.button}>
              new Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
Quiz.propTypes = {
  location: Proptypes.object,
};

export default Quiz;
