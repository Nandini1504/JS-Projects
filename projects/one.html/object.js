function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5)); // iska output 25 hoga
console.log(multiplyBy5.power); // iska output 2 hoga
console.log(multiplyBy5.prototype); // iska {} h 

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++  // jisne bhi isko bulaya h ye usi k value increase karega , isiliye this keyword ka use kr rhe h
}
createUser.prototype.printMe = function(){
    console.log('score is ${this.score}');
    
}

const chai = new createUser("chai", 25) // new keyword k use dekhenege . the newly created object gets linked to the prototype property of the constructor function
// this means that it has access to properties and methods defined on the constructor's portotype
const tea = createUser("tea", 250)

chai.printMe() // bina new ke error aa jayega

