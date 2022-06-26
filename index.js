const data = [
    {
        all_day: 6,
        mass: [
            0.5655,
            14.151,
            1.135
        ],
        period: [
            {
                slide: [
                    {value: 3},
                    {value: 2},
                    {value: 5}
                ]
            },
            {
                slide: [
                    {value: 1},
                    {value: 2}
                ]
            },
            {
                slide: [
                    {value: 4},
                    {value: 6},
                    {value: 2}
                ]
            }
        ]
    }
];

/**
 *
 * @param arr
 * @returns {[]}
 */
function getPeriodAndSlide(arr) {
    const stop = arr.length;
    const period = [];
    const result = [];

    for (let i = 0; i < stop; i++) {
        period.push([]);
        for (let is = 0; is < arr[i].period.length; is++) {
            period[i].push([]);
            for (let iss = 0; iss < arr[i].period[is].slide.length; iss++) {
                period[i][is].push(arr[i].period[is].slide[iss].value * arr[i].all_day);
            }
        }
    }

    for (let i = 0; i < period.length; i++) {
        result.push([]);
        for (let is = 0; is < period[i].length; is++) {
            result[i].push(period[i][is].reduce((partialSum, a) => partialSum + a, 0));
        }
    }

    return result;
}

/**
 *
 * @param arr
 * @returns {[]}
 */
function getMass(arr) {
    const slide = getPeriodAndSlide(arr);
    const stop = slide.length;

    const c = [];
    for (let i = 0; i < stop; i++) {
        for (let is = 0; is < slide[i].length; is++) {
            c.push({mass: arr[i].mass, value: slide[i][is]});
        }
    }

    const cc = [];
    for (let i = 0; i < c.length; i++) {
        cc.push([]);
        for (let is = 0; is < c[i].mass.length; is++) {
            cc[i].push(c[i].mass[is] * c[i].value);
        }
    }

    return cc;
}


/**
 *
 * @param arr
 * @returns {[]|*}
 */
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

getSumm(getMass(data));