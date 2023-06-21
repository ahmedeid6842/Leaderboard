const postScore = async (body) => {
  await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I8nlr5WBZ1UYAevVbaLR/scores",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
};

const getScores = async () => {
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I8nlr5WBZ1UYAevVbaLR/scores"
  );
  const scores = await response.json();
  return scores;
};

export { getScores, postScore };
