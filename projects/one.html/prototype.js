//let myName = "Nandini"

//console.log(myName.trueLength); // iska output undefined aayega 
 
let myHero = ["hulk", "spiderman"]

let heroPower = {
    hulk: "Hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log('spider power is ${this.spiderman}');
        
    }
}
Object.prototype.nandini = function(){
    console.log('nandini is present in all objects');
} //agar object ki jagah array likhte then only myHero hi access kar pata us cheez ko .
heroPower.nandini();
myHero.nandini(); // dono ke paas output lenge then ye aayega ki nandini is present in all objects .

const User = {
    Name : "Nandini",
    email: "chai@example.com",
}

const Teacher = {
    makeVideo : True
}

const Teachingsupport = {
    isAvailable : False
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    IsfullTime: True,
    __proto__ : Teachingsupport,
}

Teacher.__proto__ = User   // yhi inheritance h ki kaise kisi aur ki properties ko access kar
//  lete ho, ye user ki properties access kr leta h
 // modern syntax
Object.setPrototypeOf(Teacher, Teachingsupport)

let anotherUserName = "CHandi     "

String.prototype.trueLength= function(){
    console.log('${this}'); // iska output chandni aayega  
    console.log('${this.name}'); // iska undefined aayega 
    console.log('true length is ${this.trim().length}');    
}

anotherUserName.trueLength