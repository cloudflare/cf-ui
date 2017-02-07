/*
 * http://brandonokert.com/2015/08/04/TestingInReact/#Utility_Patterns
 */

var then = function (callback, timeout) {
  setTimeout(callback, timeout > 0 ? timeout : 0);
  return {then: then};
};

var waitsInProgress = [];

var waitFor = (test, message, done, timeLeft) => {
  timeLeft = timeLeft === undefined ? 100 : timeLeft;
  waitsInProgress.push(setTimeout(() => {
    if (timeLeft <= 0) {
      fail(message);
      done();
    } else if (test()) {
      done();
    } else {
      waitFor(test, message, done, timeLeft - 10);
    }
  }, 10));
};

//optionally call this in the beforeEach to ensure rogue tests are not still waiting
waitFor.clear = () => waitsInProgress.map(clearTimeout); 


module.exports = {
	then: then,
    waitFor: waitFor
};