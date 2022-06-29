const data = [
    {day_start: 1, day_stop: 2, all_day: 2},
    {day_start: 4, day_stop: 5, all_day: 3},
    {day_start: 6, day_stop: 10, all_day: 4},
    {day_start: 11, day_stop: 13, all_day: 3}

];


const getData = (data, index) => {
    const stop = data.length;

    for (let i = 0; i < stop; i++) {
        if (i < index) {
            const is = i + 1;
            data[i].data_stop = data[is].day_start - 1;
            data[i].all_day = data[i].day_stop + data[i].day_start - 1;
        } else if (i === index) {
            console.log("current");
        } else {
            const is = i - 1;
            data[i].data_start = data[is].day_stop;
            data[i].data_stop = data[is].day_start + data[is].all_day - 1;
            data[i].all_day = data[i].day_stop + data[i].day_start - 1;
        }
    }
    
    
    return data;
};

console.log(getData(data, 1));