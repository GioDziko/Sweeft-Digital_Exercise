import { useState } from "react";
import { useHistory } from "react-router-dom";
import Selects from "../../components/Selects";
import constants from "../../constants";
import styles from "./Main.module.css";
const MainPage = () => {
  const History = useHistory();
  const [GameDetails, setGameDetails] = useState({
    Difficulty: "",
    Category: "",
  });
  const StartGame = () => {
    History.push(constants.PAGE_QUIZ, GameDetails);
  };

  return (
    <div className={styles.mainConatiner}>
      <h1>Quiz Application</h1>
      <Selects setGameDetails={setGameDetails} />
      <button
        disabled={
          GameDetails.Category === "" || GameDetails.Difficulty === ""
            ? true
            : false
        }
        className={
          GameDetails.Category === "" || GameDetails.Difficulty === ""
            ? styles.disabledbtn
            : styles.StartGameBtn
        }
        onClick={StartGame}
      >
        Start
      </button>
    </div>
  );
};

export default MainPage;
