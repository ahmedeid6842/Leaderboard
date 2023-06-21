import { postScore } from "./fetching";

const createScoreHandler = (event) => {
  event.preventDefault();
  const user = document.querySelector("#user");
  const score = document.querySelector("#score");

  postScore({ user: user.value, score: score.value });

  user.value = "";
  score.value = "";
};

export default createScoreHandler;
