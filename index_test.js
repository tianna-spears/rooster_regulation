// test suite goes here

// Step 1 and 2
const assert= require('assert');
const Rooster= require('../index');

// Step 3 
describe('Rooster', () => {
// Step 4 (first method)
  describe('.announceDawn', () => {
// Step 5   
    it ('returns a rooster call', () => {

// Step 6-- Four Phases of a Test
  
  // Setup
  const expected = 'cock-a-doodle-doo!';

  // Exercise
  const actual= Rooster.announceDawn();

  // Verify
  assert.equal(actual, expected);

  // Teardown (optional)
  
        });
    });
});


// Step 8 (second method)
describe('.timeAtDawn', () => {
  it('returns its argument as a string', () => {

// Four Phases of a Test

  // Setup
  const testNumber = 12; // testing hour by using inputNumber 
  const expected = '12';
  
  // Exercise
  const actual = Rooster.timeAtDawn(testNumber);

  // Verify
  assert.equal(actual, expected);
});
});


it('throws a range error if passed a number less than 0',  () => {

  // Setup
  const testNumber = -1;
  const expected= RangeError; 

  // Verify & Exercise-- included in verify to make code more efficient and clear

  assert.throws(() => {
    Rooster.timeAtDawn(testNumber); // Exercise
      }, expected);

  });

it('throws a range error if passed a number greater than 23', () => {

  // Setup
  const testNumber = 24;
  const expected = RangeError;

  // Verify & Exercise-- included in verify to make code more efficient and clear

    assert.throws(() => {
      Rooster.timeAtDawn(testNumber)
        }, expected)
    });