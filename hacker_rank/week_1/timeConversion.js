



function timeConversion(s) {
    const length = s.length;
    let timeArr = [];
    let formattedTime;

    for (let i = 0; i < length; i++) {
        timeArr.push(s[i])
    }

    if (timeArr[timeArr.length - 2] === 'P' && (timeArr[0] + timeArr[1]) === '12') {
        timeArr.splice(8, 2)
        formattedTime = String(timeArr.join(''))
    }
    if (timeArr[timeArr.length - 2] === 'P' && (timeArr[0] + timeArr[1]) !== '12') {
        timeArr[0] = Number(timeArr[0]) + 1
        timeArr[1] = Number(timeArr[1]) + 2
        timeArr.splice(8, 2)
        formattedTime = String(timeArr.join(''))
    }
    if (timeArr[timeArr.length - 2] === 'A' && (timeArr[0] + timeArr[1]) === '12') {
        timeArr[0] = Number(timeArr[0]) - 1
        timeArr[1] = Number(timeArr[1]) - 2
        timeArr.splice(8, 2)
        formattedTime = String(timeArr.join(''))
    }
    if (timeArr[timeArr.length - 2] === 'A' && (timeArr[0] + timeArr[1]) !== '12') {
        timeArr.splice(8, 2)
        formattedTime = String(timeArr.join(''))
    }


    return formattedTime;

}





console.log(timeConversion('12:01:00PM'));
console.log(timeConversion('12:01:00AM'));
console.log(timeConversion('09:37:11AM'));
console.log(timeConversion('07:05:45PM'));