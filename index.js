const arr1 = [[1, 2, 3]];
const arr2 = [[1, 2], [4, 5]];
const arr3 = [[4.25, 5.15, 8.87], [2.15, 1.39, 3.67], [1.05, 2.81, 1.21]];
const arr4 = [[1, 2, 3, 7], [1, 2, 3, 7], [1, 2, 3, 7]];
const arr5 = [[0.1, 0.2, 0.1, 0.2], [1, 2, 3, 7], [0.001, 0.002, 0.001, 0.002]];
const arr6 = [[1], [4], [6]];

function getSumm(arr) {
    const stop = arr.length;
    const stop_child = arr[0].length;


    if (stop > 1) {
        const preResult = [];

        for (let j = 0; j < stop_child; j++) {
            preResult.push([])
        }

        for (let i = 0; i < stop; i++) {
            for (let j = 0; j < stop_child; j++) {
                preResult[j].push(arr[i][j])
            }
        }

        const result = [];

        for (let i = 0; i < preResult.length; i++) {
            result.push(preResult[i].reduce((partialSum, a) => partialSum + a, 0).toString().replace('.', ','));
        }

        return result;
    } else {
        return arr[0];
    }
}

console.log(getSumm(arr1));
console.log(getSumm(arr2));
console.log(getSumm(arr3));
console.log(getSumm(arr4));
console.log(getSumm(arr5));
console.log(getSumm(arr6));