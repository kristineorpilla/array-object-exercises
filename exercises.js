//1
var myPenguin = {name: "Pablo", origin: "The Backyardigans"};
//2
function hello (name) {
  return "Hello, I'm a penguin and my name is " + name + "!";
}
console.log(hello(myPenguin.name));
//3
var myPenguin = {canFly: "false"};
//4
myPenguin.chirp = function() {
	return "CHIRP CHIRP! Is this what penguins sound like?"
}
console.log(myPenguin.chirp());
//5
myPenguin.sayHello = function(name) {
	return "Hello, I'm a penguin and my name is " + name + "!"; 
}
//6
console.log(myPenguin.sayHello("Bob"));
//7
console.log(myPenguin.sayHello("Penguin McPenguinFace"));
//8
myPenguin.fly = function() {
	if (this.canFly = "true") {
		return "I can fly!";
	}
	else {
		return "No flying for me!";
	}
}
console.log(myPenguin.fly(this.canFly));