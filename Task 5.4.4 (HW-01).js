a = prompt("Введите значение");
let results = "";
for (let i = a.length - 1; i >= 0; i--) {
	results += a[i];
}
console.log(results);