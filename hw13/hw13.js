// Написать функцию generateList.

// Принимает массив из чисел и массивов чисел, например: [1, 2, [1.1, 1.2, 1.3], 3].

// Нужно сгенерировать список из элементов.

// Если в массиве встречается массив, то нужно сделать вложенный список.

// document.body.onload = generateList;

// function generateList(arr) {
    //     var newUl = document.createElement("ul");
    //     document.body.appendChild(newUl);
    //     for(var i = 0; i < arr.length; i++) {
        //        var newLi = document.createElement("li");
        //        newLi.innerHTML = "<h2>" + arr[i] + "</h2>";
        //        newUl.appendChild(newLi);
        
        //        if(Array.isArray(array[i])) {
            //            console.log('yes');
            //        }
            //     }
            
            // }
            // generateList(array);
            
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


// document.write ('<table>'); // открываем таблицу
// var num = 1; //  запоминаем число для вывода в первую ячейку
// for var ro = 0; ro < 10; ro++) // циклом перебираем десять строк таблицы
 
//     {
//     document.write ('<tr>'); // открываем строку
//     for (var ce = 0; ce < 10; ce++) // циклом перебираем десять ячеек в каждой строке
//         {
//         document.write ('<td>' + num++ + '</td>'); // создаём ячейку, прописывая в неё число, которое после записи увеличиваем на единицу
//         }
//     document.write ('</tr>); // закрываем строку
//    }
// document.write ('</table>'); // закрываем таблицу
/////////////////////////////////////////////////////////////
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
