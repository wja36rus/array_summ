const data = [
    {day_start: 1, day_stop: 2, all_day: 2},
    {day_start: 4, day_stop: 5, all_day: 3},
    {day_start: 6, day_stop: 10, all_day: 4},
    {day_start: 11, day_stop: 13, all_day: 3}

];


const getData = (data, index) => {
    const stop = data.length;

    const result = [];
    for (let i = 0; i < stop; i++) {
        if (i < index) {
            const is = i + 1;
            result.push({
                day_start: data[i].day_start,
                data_stop: data[is].day_start - 1,
                all_day: data[i].day_stop - data[i].day_start + 1
            });
        } else if (i === index) {
            result.push({
                day_start: data[i].day_start,
                data_stop: data[i].day_start + data[i].all_day - 1,
                all_day: data[i].all_day,
            });
        } else if (i > index) {
            const is = i - 1;   
            console.log(result[is])     
            result.push({
                day_start: result[is].day_stop,
                data_stop: data[is].day_stop + data[i].all_day - 1,
                all_day: data[i].day_stop - data[is].day_stop + 1,
            });
        }
    }
    
    
    for (let i = 0; i < result.length; i++) {
        //console.log(result[i]);
    }
};

getData(data, 1);