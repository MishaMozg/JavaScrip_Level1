//задача 2

//считаем  количество определенных букв в слове
function countChars (word, char) {
word = word.toLowerCase();  //приводим все к нижнему регистру
char = char.toLowerCase();
var count = 0;
for (var i =0; i <= word.length; i++) {
  if ( word.charAt(i) === char ) {
    count +=1;
  }
}
  console.log("В слове " + word + " найдено " + count + " букв " + char);
}

countChars("Трансцидентальный", "н");