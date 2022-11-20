let arr = ["a", "b", "c", "d", "e", "f", "5", "s"];

let compare = true;
for (let a = 0; a < arr.length - 1; a++) {
	for (let b = a + 1; b < arr.length; b++) {
		if (typeof arr[a] !== typeof arr[b]) {
			compare = false;
		}
	}
}
if (compare) {
	console.log("true");
} else {
	console.log("false");
}
