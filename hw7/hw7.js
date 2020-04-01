
// Написать функцию copy(target, origin), которая копирует свойства из объекта origin в объект target и возвращает новый объект со всеми свойствами. В данном задании используйте for ... in для работы со свойствами объектов.
// Напишите функцию, принимающую и сравнивающую два объекта. Если объекты содержат одинаковые ключи и значения, то функция возвращает true, если нет - false.

//Задание 1

var origin = {
    name:"John",
    occupation:"programmer"
};
console.log(origin);
var target = {};
function copy(target, origin){
    
    for (var key in origin) {
        target[key] = origin[key];
    }
    return target;
}
console.log(copy(target, origin));

// Задание 2

var obj1 = {
    a:3,
    b:2,
    j:7,
};
var obj2 = {
    a:3,
    c:2,
    d:7
};

// Проверка на равенство количества свойств в объектах

var counterPropertiesObj1 = 0;
var counterPropertiesObj2 = 0;

for (var key in obj1){
    counterPropertiesObj1++;
    }
for (var key in obj2){
    counterPropertiesObj2++;
}
if(counterPropertiesObj2 != counterPropertiesObj1){
    console.log('Not Equal Length Objects');
} else {console.log('Equal Length Objects');}

// Проверка на соответствие ключей

function compare(obj1, obj2) {

        for (var key in obj1){

        if(obj1[key] !== obj2[key]){
                return false;
            } //else { return true;}
        } return true;
    }
    console.log(compare(obj1, obj2));
