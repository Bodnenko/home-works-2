// Написать функцию isSymbolPresentInString(str, symbol) - возвращает true если символ найден в строке и false если нет.
// isSymbolPresentInString("abc","a") // true
// isSymbolPresentInString("abc","e") // false

var str = 'abc';

function isSymbolPresentInString(str, symbol) {
    for (var i=0; i < str.length; i++) {
        if (str[i] == symbol) {
          return true;
        }
    }
    return false;

}
console.log(isSymbolPresentInString('abc', 'd'));

// Написать функцию getSymbolIndex(str, symbol) - возвращает индекс первого найденного символа в строк, или -1 если символ не найден
// getSymbolIndex("hello lol","h") // 0
// getSymbolIndex("hello lol","l") // 2
// getSymbolIndex("hello lol","v") // -1

function getSymbolIndex(str, symbol){
    for ( var i=0; i<str.length; i++){
        if (str[i] == symbol){
            return str.indexOf(symbol);
        }
    } return str.indexOf(symbol);
}
console.log(getSymbolIndex('hello lol', 't'));

// Написать собственную реализацию функций forEach, map, filter, some, every. Каждая функция должна принимать два аргумента - массив и callback функцию. Все функции, кроме forEach, должны вернуть результат.



//ForEach

var someArr = [2,4,6,8];
function each(arr,callback){
  for( var i = 0; i < someArr.length; i++){
    console.log(callback(arr[i], i, someArr ));
  }
}

//Map

var nums = [10, 20, 30, 40,];
var res = [];
function mapArr(arr, callback){
  for(var i = 0;i < nums.length;i++){
    res.push(callback(nums[i], i, arr));
  } 
  return res;
}
console.log(res);

//Filter

function filter (array,callback) {
  var res = [];
  for( var i = 0; i < array.length; i++){
    if ( callback( array[i],i,array )) {
      res.push( array[i] );
    }
  }
  return res;
}

//Some

function some (array, callback){
  for( var i = 0; i < array.length; i++){
    if( callback( array[i], i, array)){
      return true;
    }
  }
  return false;
}

//Every

function every (array, callback){
  for ( var i = 0; i < array.length; i++){
    if( !callback( array[i], i, array)){
      return false;
    }
  }
  return true;
}