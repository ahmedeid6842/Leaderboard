import "./style.css";
import { getScores } from "./modules/fetching";
import createScoreHandler from "./modules/createScore";

const addScoreForm = document.querySelector("#form");

getScores();

addScoreForm.addEventListener("submit", createScoreHandler);

