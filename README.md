# 03 Exercise - Space Rugby 

Practice writing unit tests.

## Brief

Some Space Rugby functions have already been written and exported from `space-rugby.js`. Your task is to write unit tests to check the functionality of the functions.

## Instructions 

### Write Tests

The code comments and the code in `space-rugby.js` should inform you about the behaviour of the Space Rugby functions. Inspect the parameters passed into the function in `space-rugby.js` to understand what data you have. Write unit tests to check the correct data types, values, and errors are returned/thrown when calling the functions.

This cheat sheet may help: https://devhints.io/jest

As might this Jest API reference on `expect` methods: https://jestjs.io/docs/en/expect

All your testing code should go into `__tests__/space-rugby.test.js`. You should not need to modify the code in `space-rugby.js`.

The test command will also display the test coverage, as well as generate a coverage report page. There is also an Express static server provided to serve the coverage docs. 

Run the following to get the coverage report server going:

```shell
npm test  # run an initial test to generate a coverage report
npm start # serve the coverage report
```

Then open http://localhost:4000/coverage in your browser. You will need to refresh this page after you re-run the tests.

You may also want to run Jest in "watch" mode, which will rerun the tests automatically when you change/save the test file. You will need to run this command in a different terminal than the express server:

```shell
npm test -- --watch # the extra set of dashes is required!
```

**Acceptance criteria:**

- [ ] All happy path scenarios are covered with unit tests.
- [ ] Negative scenarios are covered with unit tests.
- [ ] All tests are well named by explaining what they are testing.
- [ ] There is little to no repetition in logic. [test.each()](https://jestjs.io/docs/api#testeachtablename-fn-timeout) is used to avoid duplicating the same test with different data.
- [ ] All tests pass.
- [ ] Commits are pushed to GitHub.
- [ ] The exercise has been submitted in Google Classroom.
