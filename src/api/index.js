import axios from "axios";
async function GetCategories() {
  const {
    data: { trivia_categories },
  } = await axios.get("https://opentdb.com/api_category.php");
  return trivia_categories;
}

async function GetQuestions(category, difficulty) {
  const {
    data: { results },
  } = await axios.get(
    `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
  );
  return results;
}

export default { GetCategories, GetQuestions };
