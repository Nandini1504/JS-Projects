class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toUpperCase()  // setters ko return nhi krte h kabhi bhi
    }

}
const hitesh = new User("hi@hitai.com", " abc")
console.log(hitesh); // as we will try to print this, it will come maximum call stack size is exceeded, agar password ke pehle underscore nhi lagaya toh.

