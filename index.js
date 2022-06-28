const data = [
    {day_start: 1, day_stop: 2, all_day: 1},
    {day_start: 3, day_stop: 5, all_day: 2},
    {day_start: 6, day_stop: 9, all_day: 3}
];

function getByAllDay(datas) {

    const stop = datas.length;

    const data = [];
    for (let i = 0; i < stop; i++) {
        data.push({
            day_start: datas[i].day_start,
            day_stop: 0,
            all_day: datas[i].all_day,
        })
    }

    const all = [];
    for (let i = 0; i < stop; i++) {
        all.push(data[i].all_day);
    }
    const result_all = all.reduce((acc, obj) => acc + obj, 0);

    const result = [];
    const arr = data.reverse();
    for (let i = 0; i < stop; i++) {
        if (i === 0) {
            result.push({
                day_start: result_all - arr[i].all_day + 1,
                day_stop: result_all,
                all_day: arr[i].all_day
            })
        } else {
            const is = i - 1;
            result.push({
                day_start: result[is].day_start - arr[i].all_day,
                day_stop: result[is].day_start - 1,
                all_day: arr[i].all_day
            })
        }
    }

    console.log(result.reverse());

}

getByAllDay(data);