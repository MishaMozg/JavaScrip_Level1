/* Задание 5.3 - Реализовать функцию objectToQueryString(object),
 которая принимает аргументом объект, возвращает строку.*/
function objectToQueryString(obj) {
    var str = "";
    for (var key in obj) {
        str += "&" + key + "=" + obj[key];
    }
    str = str.slice(1).toLowerCase(); //убираем первый символ "&" и приводим к нижнему регистру
    return str;
}

var testObj1 = {
    id: 1,
    name: "Vasya",
    passw: "1234asdf",
    access: "user"
};

var testObj2 = {
    category: "shoes",
    itemId: 1324,
    size: 42
};

console.log( objectToQueryString(testObj1) );
console.log( objectToQueryString(testObj2) );