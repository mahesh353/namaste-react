import { sum } from "../sum";

//1 test case
// first argument is the description of the test case

// second argument is the function where we actually write the implementation
test("Sum function should calculate the sum of two numbers", () => {
  
    const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
