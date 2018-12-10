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
};
//5
myPenguin.sayHello = function(name) {
	return "Hello, I'm a penguin and my name is " + name + "!"; 
}
//6
console.log(myPenguin.sayHello(kristine));