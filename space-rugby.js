const faker = require("faker");

const scoreTypes = ["TRY", "CONVERSION", "PENALTY", "DROP_GOAL"];

/**
 * Get the current score.
 * The function returns the current score as a number 😉
 */
const getScore = () => {
  return faker.random.number({ max: 100 });
};

/**
 * Get a list of the score types.
 * The function returns an array of score types.
 */
const getScoreTypes = () => {
  return scoreTypes;
};

/**
 * Check a given score type is one of ['TRY', 'CONVERSION', 'PENALTY', 'DROP_GOAL'].
 * The scoreType parameter is a string - Score type to validate.
 * The function return a boolean:
 * - True on valid score type
 * - otherwise false.
 */
const isValidScoreType = (scoreType) => {
  if (!scoreType) {
    throw new Error("Score type required!");
  }
  if (typeof scoreType !== "string") {
    throw new Error("Score type must be a string!");
  }

  return scoreTypes.includes(scoreType);
};

/**
 * Calculate the current score incremented by the appropriate amount.
 * The function has two parameters:
 *   - currentScore which is a number - The current score.
 *   - scoreType which is a string - Scoring method.
 * The function returns the updated score as a number.
 */
const calculateScore = (currentScore, scoreType) => {
  // validate currentScore
  if (!currentScore) {
    throw new Error("Current score required!");
  }
  if (typeof currentScore !== "number") {
    throw new Error("Current score must be a number!");
  }

  // Short circuit score if invalid score type
  if (!scoreType || !isValidScoreType(scoreType)) {
    console.log("Invalid score type - score was not changed");
    return currentScore;
  }

  // score type to point mapping
  const scores = { TRY: 5, CONVERSION: 2, PENALTY: 3, DROP_GOAL: 3 };

  // return the new score
  return currentScore + scores[scoreType];
};

module.exports = {
  getScore,
  getScoreTypes,
  isValidScoreType,
  calculateScore,
};
