let x;

x = null;

if (typeof x == "number") {
	console.log("х = числу");

}
else if (typeof x == "string") {
	console.log("х = строке");

}
else if (typeof x == "boolean") {
	console.log("х = булевый тип");

}
else {
	console.log("Тип x не определён");
}
