
//https://jestjs.io/docs/expect
//https://gist.github.com/dabina2018/451de8e1808476ed4b5bc847552b6e50
-----------------------------------------------------------------------------------------------------
//https://stackoverflow.com/questions/32615713/tobetrue-vs-tobetruthy-vs-tobetrue#32767435

//It performs its test with === which means that when used as expect(foo).toBe(true), 
//it will pass only if foo actually has the value true. Truthy values won't make the test pass.
function toBe() {
  return {
    compare: function(actual, expected) {
      return {
        pass: actual === expected
      };
    }
  };
}
///
//A value is truthy if the coercion of this value to a boolean yields the value true. 
//The operation !! tests for truthiness by coercing the value passed to expect to a boolean.
//Note that contrarily to what the currently accepted answer implies, == true is not a correct test for truthiness.
//
function toBeTruthy() {
  return {
    compare: function(actual) {
      return {
        pass: !!actual
      };
    }
  };
}
-------------------------------------------------------------------------------------------------------
// https://www.testim.io/blog/jasmine-js-a-from-scratch-tutorial-to-start-testing/
  
