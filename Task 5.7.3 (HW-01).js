let operationSystem = new Map([
	["MacOS", "awesome"],
	["Windows", "popular"],
	["linux", "free"]
]);

operationSystem.forEach(function (value, key) {
	console.log(`${key} - X, ${value} - Y`);
});