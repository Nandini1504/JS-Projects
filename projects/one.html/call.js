function setUsername(username){
    this.username = username; // ye this gayab ho jata h apna this use krna padega 
}
function getUsername(username, email, password){
    setUsername.call(this, username), // ye call ho hi nhi rha h , .call se call hoga , this lagane se hi aayega varna nh
    this.email = email,
    this.password = password

}

const chai = new getUsername("nandini" ,"chai@","123" )
console.log(chai); // isse username nhi print hoyega

