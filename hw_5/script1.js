/*Задание 5.1 •	Написать функцию преобразования цвета из 10-ного представления в 16-ный.
Функция должна принимать 3 числа от 0 до 255 и возвращать строковый хеш..*/

var div = document.getElementById("div");

var red = +prompt("Введите число от 0 до 255 для красного цвета");
var green = +prompt("Введите число от 0 до 255 для зеленого цвета");
var blue = +prompt("Введите число от 0 до 255 для синего цвета");

function toHex(number) {
    number = number > 255 ? 255 : number;  //на случай, если ввели больше 255, обрезаем до 255
    var hex = number.toString(16);
    hex = hex.length > 1 ? hex : "0" + hex; //добавляем ведущий ноль при необходимости
    return hex;
    }

var hexColor = "#" + toHex(red) + toHex(green) + toHex(blue);

    console.log(hexColor); // для проверки
    div.style.backgroundColor = hexColor; //перекрашиваем блок