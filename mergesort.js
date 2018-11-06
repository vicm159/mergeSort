function split(wholeArr) {
  let firstHalf = [];
  let secondHalf = [];
  let cycle = Math.round(wholeArr.length / 2);
  for (let i = 0; i < cycle; i++) {
    firstHalf.push(wholeArr[0]);
    wholeArr.splice(0, 1);
  }
  secondHalf = wholeArr;
  return [firstHalf, secondHalf];
}

function merge(arr) {
  let resultArr = [];
  let cycle = arr[0].length + arr[1].length;

  for (let i = 0; i <= cycle; i++) {
    if (arr[0].length == 0) {
      return resultArr.concat(arr[1]);
    } else if (arr[1].length == 0) {
      return resultArr.concat(arr[0]);
    } else if (arr[0][0] < arr[1][0]) {
      resultArr.push(arr[0][0]);
      arr[0].shift();
    } else {
      resultArr.push(arr[1][0]);
      arr[1].shift();
    }
  }
  return resultArr;
}

function mergeSort(arr) {
  let splitArr = split(arr);
  if (arr[0][0].length === 1 && arr[1][0].length === 1) {
    if (splitArr[0][0] > splitArr[1][0]) {
      console.log(splitArr[1]);
      let placeholder = splitArr[0][0];
      splitArr[0][0] = splitArr[1][0];
      splitArr[1][0] = placeholder;
    } else {
      return merge([splitArr[0], splitArr[1]]);
    }
  }
  return merge(mergeSort(arr[0]), mergeSort(arr[1]));
}

// function mergeSort(array) {
//   if (array.length < 2) return array;
//   let splits = split(array);
//   let left = splits[0];
//   let right = splits[1];
//   return merge(mergeSort(left), mergeSort(right));
// }

// function split(array) {
//   let center = array.length / 2;
//   let left = array.slice(0, center);
//   let right = array.slice(center);
//   return [left, right];
// }

// function merge(left, right) {
//   let merged = [];
//   let leftIdx = 0;
//   let rightIdx = 0;

//   while (leftIdx < left.length && rightIdx < right.length) {
//     if (left[leftIdx] < right[rightIdx]) {
//       merged.push(left[leftIdx]);
//       leftIdx++;
//     } else {
//       merged.push(right[rightIdx]);
//       rightIdx++;
//     }
//     for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
//     for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);
//   }
//   return merged;
// }

console.log(mergeSort([3, 2, 4, 1]));
