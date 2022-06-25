
const arr = [[4.25, 5.15, 8.87], [2.15, 1.39, 3.67], [1.05, 2.81, 1.21]];


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

console.log(getSumm(arr));