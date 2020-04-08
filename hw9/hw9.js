//1 Написать функцию “глубокого” копирования. Функция принимает один параметр и возвращает его копию “по значению”. В функцию можно передать параметр любого типа. 

// Если передали объект, то предусмотреть ситуацию, когда свойствами этого объекта будут объекты или массивы.

// Если передали массив, то предусмотреть ситуацию, когда элементами этого массива будут объекты или массивы.


obj = [{first: "one",second: "two", three:[1,2,3,4,5]},true,Boolean];
function dClone(el) {
    var funcsObj = {
        "Object": function() {
            var clObj = {};
            for (var prop in el) {
                clObj[prop] = dClone(el[prop]);
            }
            return clObj;
        },
        "Array": function() {
            return el.map(function(i) {
                return dClone(i);
            });
        }
    };
    if (el.constructor.name in funcsObj) {
        return funcsObj[el.constructor.name]();
    } else {
        return el;
    }
}
var clone = dClone(obj);
console.log(clone);
















//2 Написать функцию, которая принимает один параметр. При первом вызове, она его запоминает, при втором - суммирует переданный параметр с тем, что передали первый раз и так далее. Всё это с замыканиями. Например:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28


// В пером задании есть два уровня сложности:

// Простой - функция не поддерживает работу с массивами
// Со "звездочкой" - функция поддерживает работу с массивами

function sumPrevNext(first) {
   // var memoryFirst = first;
    return function(second){
        return first + second;
    };

}
var summer = sumPrevNext(2);
console.log(summer(3));
console.log(summer(5));
    

