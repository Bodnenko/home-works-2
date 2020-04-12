// Написать функцию, которая будет выводить текущее время в консоль в формате HH:mm:ss. Каждую секунду консоль должна очищаться и в нее должно писаться текущее время.

function newDate() {
    var date = new Date();
    console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
}
setInterval(function () {

    newDate();
}, 500);
setInterval(function () {
    console.clear();
}, 1000);

    

