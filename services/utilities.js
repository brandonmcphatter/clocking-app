function getDate() {
    const date = new Date().toLocaleDateString();
    if (date.length === 9){
        return 0 + date.substring(0, 4);
    } else return date.substring(0,5);
}
function getTime() {
    const time = new Date().toLocaleTimeString();
    const amPM = time.substring(time.length -2)
    if (time.length === 10){
        return 0 + time.substring(0, 4) + ' ' + amPM;
    } else return time.substring(0, 5) + ' ' + amPM;
}

export {getDate, getTime};