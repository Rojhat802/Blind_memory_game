const { shuffle } = require('shuffle');

describe('shuffle', () => {
  // Test that the input array is shuffled
  it('should shuffle the input array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const originalArray = inputArray.slice();

    shuffle(inputArray);

    expect(inputArray).not.toEqual(originalArray);
  });

  // Test that the function works with empty arrays
  it('should handle empty arrays', () => {
    const inputArray = [];
  
    shuffle(inputArray);
  
    expect(inputArray).toBe([]);
  });
  
  // Test that the function works with arrays of length 1
  it('should handle arrays of length 1', () => {
    const inputArray = [1];
  
    shuffle(inputArray);
  
    expect(inputArray).toHaveLength(1);
    expect(inputArray[0]).toEqual(1);
  });
  // Test that the function calls makeGameBoard with the shuffled array
  it('should call makeGameBoard with the shuffled array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const makeGameBoard = jest.fn();

    shuffle(inputArray, makeGameBoard);

    expect(makeGameBoard).toHaveBeenCalledWith(inputArray);
  });
});
