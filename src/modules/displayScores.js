const display = (scores) => {
  const scoreListContainer = document.querySelector(".score-list-container");
  let scoresListHtml = ``;
  scores.forEach((score) => {
    scoresListHtml += `
    <li class="score-item">${score.user}: ${score.score}</li>
    `;
  });
  scoreListContainer.innerHTML = scoresListHtml;
};

export default display;
