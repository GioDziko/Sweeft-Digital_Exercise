/* eslint-disable import/no-anonymous-default-export */
import ROUTES from "../constants/index";
import MainPage from "../pages/Main";
import Quiz from "../pages/Quiz";
export default [
  {
    path: ROUTES.PAGE_MAIN,
    exact: true,
    page: MainPage,
  },
  {
    path: ROUTES.PAGE_QUIZ,
    exact: true,
    page: Quiz,
  },
];
