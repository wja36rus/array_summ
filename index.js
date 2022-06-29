const data = [
    {day_start: 1, day_stop: 2, all_day: 2},
    {day_start: 3, day_stop: 5, all_day: 3},
    {day_start: 6, day_stop: 10, all_day: 5},
    {day_start: 9, day_stop: 13, all_day: 3}
];


const getData = (data, index) => {
    const stop = data.length;

    const result = [];
    for (let i = 0; i < stop; i++) {
        if (i < index) {
            const is = i + 1;
            result.push({
                day_start: data[i].day_start,
                day_stop: data[is].day_start - 1,
                all_day: data[is].day_start - data[i].day_start
            });
        } else if (i === index) {
            result.push({
                day_start: data[i].day_start,
                day_stop: data[i].day_start + data[i].all_day - 1,
                all_day: data[i].all_day,
            });
        } else if (i > index) {
            const is = i - 1;
            result.push({
                day_start: result[is].day_stop + 1,
                day_stop: result[is].day_stop + data[i].all_day - 1,
                all_day: data[i].day_stop - result[is].day_stop + 1,
            });
        }
    }

    return result
};

getData(data, 3);