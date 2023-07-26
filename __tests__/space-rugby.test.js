/**
 * Functions from the main file already imported for you!!
 */
const {
  getScore,
  getScoreTypes,
  isValidScoreType,
  calculateScore,
} = require("../space-rugby");

/**
 * First describe block to get you started.
 */
describe("The getScore function", () => {
  test("should return a score", () => {
    // finish writing this test - test the function returns something
    const currentScore = { max: 100 };
    const actual = getScore(currentScore);
    expect(actual).toBeLessThanOrEqual(100); 
  });

  // write your other `getScore` tests here!!
  test("should get a list of the score types", () => {
    const scoreTypes = [];
    const actual = getScoreTypes(scoreTypes);
    expect(actual).toEqual(['TRY', 'CONVERSION', 'PENALTY', 'DROP_GOAL']);
  });
  // the next test could check the function returns a valid data type
  
  test("should return true for valid score type", () => {
    const scoreType = 'TRY';
    const actual = isValidScoreType(scoreType);
    expect(actual).toBe(true);
  });
  
  
  test("should return false for invalid score type", () => {
    const scoreType = 'FOO';
    const actual = isValidScoreType(scoreType);
    expect(actual).toBe(false);
  });
  
 
  test("should throw an error for empty score type", () => {
    expect(() => {
      isValidScoreType();
    }).toThrow('Score type required!');
  });
  
  
  test("should throw an error for non-string score type", () => {
    expect(() => {
      isValidScoreType(123);
    }).toThrow('Score type must be a string!');
  });
});

/**
 * Write your own describe blocks like the example describe block above!!!
 */
describe("The calculateScore function", () => {
  
test("should increment score for TRY", () => {
  const currentScore = 10;
  const scoreType = 'TRY';
  const actual = calculateScore(currentScore, scoreType);
  expect(actual).toBe(currentScore + 5);
});


test("should increment score for CONVERSION", () => {
  const currentScore = 15;
  const scoreType = 'CONVERSION';
  const actual = calculateScore(currentScore, scoreType);
  expect(actual).toBe(currentScore + 2);
});


test("should increment score for PENALTY", () => {
  const currentScore = 20;
  const scoreType = 'PENALTY';
  const actual = calculateScore(currentScore, scoreType);
  expect(actual).toBe(currentScore + 3);
});


test("should increment score for DROP_GOAL", () => {
  const currentScore = 25;
  const scoreType = 'DROP_GOAL';
  const actual = calculateScore(currentScore, scoreType);
  expect(actual).toBe(currentScore + 3);
});


test("invalid score type should not change the score", () => {
  const currentScore = 30;
  const scoreType = 'FOO'; 
  const actual = calculateScore(currentScore, scoreType);
  expect(actual).toBe(currentScore);
});


test("should throw an error for missing current score", () => {
  expect(() => {
    calculateScore(undefined, 'TRY');
  }).toThrow('Current score required!');
});


test("should throw an error for non-number current score", () => {
  expect(() => {
    calculateScore('abc', 'TRY');
  }).toThrow('Current score must be a number!');
});
}); 