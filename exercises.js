//1
var myPenguin = {name: "Pablo", origin: "The Backyardigans"};
//2
function hello (name) {
  return "Hello, I'm a penguin and my name is " + name + "!";
};
console.log(hello(myPenguin.name));
//3
myPenguin.canFly = false;
//4
myPenguin.chirp = function() {
	return "CHIRP CHIRP! Is this what penguins sound like?"
};
console.log(myPenguin.chirp());
//5
myPenguin.sayHello = function() {
	return "Hello, I'm a penguin and my name is " + this.name + "!"; 
};
//6
console.log(myPenguin.sayHello());
//7
myPenguin.name = "Penguin McPenguinFace";
console.log(myPenguin.sayHello());
//8
myPenguin.fly = function() {
	if (myPenguin.canFly === "true") {
		return "I can fly!";
	}
	else {
		return "No flying for me!";
	}
};
//9
console.log(myPenguin.fly(myPenguin.canFly));
//10
myPenguin.canFly = "true";
//11
console.log(myPenguin.fly(myPenguin.canFly));
//12
for (key in myPenguin) {
	console.log(key);
}
//13
for (value in myPenguin) {
	console.log(myPenguin[value]);
}