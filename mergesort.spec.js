describe('Split Array Function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([4, 6, 2, 3])).toEqual([[4, 6], [2, 3]]);
  });
  it('is able to split odd arrays', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [4, 5]]);
  });
});
describe('Merge Function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([[1, 2, 3], [4, 5]])).toEqual([1, 2, 3, 4, 5]);
  });
});
describe('Merge Sort', function() {
  it('is able to sort an unsorted array', function() {
    expect(mergeSort([2, 4, 7, 12, 6, 9])).toEqual([2, 4, 6, 7, 9, 12]);
  });
});
