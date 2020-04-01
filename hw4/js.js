// <!-- Игра “Угадай число”. Сгенерировать случайное число в диапазоне от 0 до 10. Пользователь должен угадать число. Игра продолжается до тех пор, пока пользователь не угадает число. Пользователь может остановить игру в любой момент.

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
// var random = randomInteger(1, 3);
// console.log(random);
// var enterInteger = +prompt('Введите число от 1 до 10');

do {  var random = randomInteger(1, 10);
    console.log(random);
    var enterInteger = +prompt('Введите число от 1 до 10');
    if (!enterInteger) { break; }}
    while (random != enterInteger);
    
    
    // Запросить у пользователя число, которое будет высотой вершины прямоугольного треугольника. Вывести треугольник двумя способами:
    
    // Одной строкой. Например, console.log(triangle)
    // Построчно через console.log -->

var enterUser = +prompt('Введите высоту!');
var r = ''
for (r.length = 0; r.length <= enterUser; r.length++) {
    console.log( r+='#');
}