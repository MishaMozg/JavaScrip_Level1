	var a=0;while (a<100) {

		a++;var str = "";
		if ((a%5)==0) {
			str="Buzz";
		}
		if ((a%3)==0) {
			str = str + "Fizz";
		}
		if (str ==""){
			str = a;
		}
		console.log(str);}