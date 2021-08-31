/* eslint-disable jsx-a11y/no-onchange */
import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import API from "../../api/index";
import constants from "../../constants";
import styles from "./selects.module.css";
const Selects = ({ setGameDetails }) => {
  const [Categories, setCategories] = useState([]);
  const [ErrorText, setErrorText] = useState("");
  useEffect(() => {
    API.GetCategories()
      .then((d) => {
        setCategories(d);
      })
      .catch(() => setErrorText("Something Went Wrong"));
  }, []);
  if (ErrorText !== "") {
    return <div>{ErrorText}</div>;
  }
  return (
    <div className={styles.selectsContainer}>
      <div className={styles.selectContainer}>
        <label htmlFor="category">Choose Categories</label>
        <select
          className={styles.select}
          defaultValue="Select"
          id="category"
          onChange={(i) =>
            setGameDetails((prev) => {
              return { ...prev, Category: i.target.value };
            })
          }
        >
          <option disabled>Select</option>
          {Categories.map((item) => (
            <option key={item.name} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.selectContainer}>
        <label htmlFor="category">Choose Difficulty</label>
        <select
          className={styles.select}
          defaultValue="Select"
          id="category"
          onChange={(i) =>
            setGameDetails((prev) => {
              return { ...prev, Difficulty: i.target.value };
            })
          }
        >
          <option disabled>Select</option>
          {constants.Difficulties.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
Selects.propTypes = {
  setGameDetails: Proptypes.func,
};

export default Selects;
