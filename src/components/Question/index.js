/* eslint-disable jsx-a11y/no-static-element-interactions */
import Proptypes from "prop-types";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Question.module.css";
const Question = ({ Question, setQuestionCounter, setScore }) => {
  if (!Question) {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
  let AnswersArray = [
    ...Question.incorrect_answers,
    Question.correct_answer,
  ].sort(() => Math.floor(Math.random() - 0.5));

  const clickhanlder = (e) => {
    if (e.target.innerText === Question.correct_answer) {
      e.target.classList.add(styles.correct);
      setTimeout(() => {
        e.target.classList.remove(styles.correct);
        setQuestionCounter((prev) => prev + 1);
        setScore((prev) => prev + 1);
      }, 1000);
    } else {
      e.target.classList.add(styles.incorrect);
      setTimeout(() => {
        e.target.classList.remove(styles.incorrect);
        setQuestionCounter((prev) => prev + 1);
      }, 1000);
    }
  };
  return (
    <div className={styles.quiestionContainer}>
      <h1
        className={styles.question}
        dangerouslySetInnerHTML={{ __html: Question.question }}
      ></h1>
      <hr className={styles.Line} />
      <div className={styles.answerContainer}>
        {AnswersArray.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className={styles.answer}
            onClick={(e) => clickhanlder(e)}
            dangerouslySetInnerHTML={{ __html: item }}
          ></div>
        ))}
      </div>
    </div>
  );
};
Question.propTypes = {
  Question: Proptypes.object,
  setQuestionCounter: Proptypes.func,
  setScore: Proptypes.func,
};

export default Question;
