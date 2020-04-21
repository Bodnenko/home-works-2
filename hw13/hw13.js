// Написать функцию generateList.

// Принимает массив из чисел и массивов чисел, например: [1, 2, [1.1, 1.2, 1.3], 3].

// Нужно сгенерировать список из элементов.

// Если в массиве встречается массив, то нужно сделать вложенный список.




            
var array = [1,[2,3,4,5],3,[1,2,3],4,6];

function generateList(arr) {
    var newUl = document.createElement("ul");
    document.body.appendChild(newUl);
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(array[i])) {
            var insideLi = document.createElement("ul");
            newLi.appendChild(insideLi);
            for (var j = 0; j < arr[i].length; j++) {
                var insideLiUl = document.createElement("li");
                insideLiUl.innerHTML = "<h2>" + arr[i][j] + "</h2>";
                insideLi.appendChild(insideLiUl);
            }

        } else {
            var newLi = document.createElement("li");
            newLi.innerHTML = "<h2>" + arr[i] + "</h2>";
            newUl.appendChild(newLi);
        }
    }

}
generateList(array);



// Вывести таблицу 10 × 10, заполненную числами от 1 до 100


function getTable() {
    var table = document.createElement("table");
    var num = 1;
    document.body.appendChild(table);
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        table.appendChild(row);
        for (var j = 0; j < 10; j++) {
            var cell = document.createElement("td");
            row.appendChild(cell);
            cell.insertAdjacentText("afterbegin", num++);
            
        }
    }
}
getTable();
