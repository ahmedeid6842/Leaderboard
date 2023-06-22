import { postScore } from './fetching.js';

const createScoreHandler = (event) => {
  event.preventDefault();
  const user = document.querySelector('#user');
  const score = document.querySelector('#score');

  postScore({ user: user.value, score: score.value });

  document.querySelector('.success').classList.remove('hidden');
  user.value = '';
  score.value = '';
};

export default createScoreHandler;
