function squareCircle (radius) {
    s = 3.14*radius*radius;
    return s;
}
squareCircle(7)
console.log(s);

function lengthCircle (radius) {
    l = 2*3.14*radius;
    return l;
}
lengthCircle(7)
console.log(l);

function average ( a, b ) {
    result = ( a + b )/2;
    return result;
}
average(3,5);
console.log(result);

// Написать функцию calc(x, y, action), которая получает 3 аргумента: числа x и y, а также строку action. В переменной action может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной action.

function calc(x,y,action) {
     res = `${x} ${action} ${y}`;
    return res;
}
calc(4,8,'*');
console.log(eval(res))