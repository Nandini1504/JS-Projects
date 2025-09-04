const user = {
    username: "Nandini",
    logincount: 8,
    SIgnedIn: True,
    getUserDetails: function(){
        console.log("got user details from database")
        console.log(this) // isse pura object print ho jayega.
        
    }


}

console.log(user.username)
console.log(user.getUserDetails());// this is a method, iske total output mein nandini and got user details from database and "undefined" aayega

function User2(username, logincount, SIgnedIn){
    this.username = username
    this.logincount = logincount
    this.SIgnedIn = SIgnedIn
}

const user1 = User2("hi", 12, True)
const user2 = User2("chai", 34, False)

console.log(user1); // isse hume chai, 34, false output milega as values overwrite kr di h but is we add new keyword then this issue can be sorted
// constructor gives reference 