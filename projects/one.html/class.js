class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email
        this.password = password
        
    }
    encyptPassword(){
        return '${this.password}abc'
    }
    changeUsername(){
        return '${this.username.toUpperCase}'
    }
}
const Chai = new User("chai", "chai@example.com", "123")
console.log(Chai.encyptPassword()); // iska output 123abc aayega.
console.log(Chai.changeUsername());

//behind the scene kya chal rha h iske?, 