const display = (scores) => {
  const scoreListContainer = document.querySelector(".score-list-container");
  let scoresListHtml = ``;

  //sort scores based on the score before displaying
  scores.sort((a, b) => b.score - a.score);

  // iterate over scores and added them to DOM
  scores.forEach((score) => {
    scoresListHtml += `
    <li class="score-item">${score.user}: ${score.score}</li>
    `;
  });
  scoreListContainer.innerHTML = scoresListHtml;
};

export default display;
