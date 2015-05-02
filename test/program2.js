var suma = 0;
process.argv.forEach(function(name){
	number = Number(name);
	if(!isNaN(number)){
		suma += number;	
	}
});
console.log(suma);


