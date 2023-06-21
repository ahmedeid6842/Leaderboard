import "./style.css";
import { getScores } from "./modules/fetching";
import createScoreHandler from "./modules/createScore";

const addScoreForm = document.querySelector("#form");
const refreshButton = document.querySelector("#refresh-btn");

getScores();

addScoreForm.addEventListener("submit", createScoreHandler);
refreshButton.addEventListener("click", getScores);
