import './style.css';
import { getScores } from './modules/fetching.js';
import createScoreHandler from './modules/createScore.js';

const addScoreForm = document.querySelector('#form');
const refreshButton = document.querySelector('#refresh-btn');

getScores();

addScoreForm.addEventListener('submit', createScoreHandler);
refreshButton.addEventListener('click', getScores);
