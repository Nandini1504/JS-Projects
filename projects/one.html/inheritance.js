class User{
    constructor(username) {
        this.username = username
        
    }
    logMe(){
        console.log('USERNAME is ${this.username}');
        
    }
}
class teacher extends User {
    constructor(username, email, password) {
        super(username) // isse username access ho jata h hume this keyword ki zaroorat nhi padti hai;
        this.email = email;
        this.password = password;
    }
    addCourse(){

    }
}

const chai = new teacher("tea", "tea@user.com", "123");
// ab agar new user ka ek const banayegnge then too outpt aa jayega but it will be "instanceOf" 
//ab agar hum ek aur const bana kae dekhe then we will se ki dono inherit hokar aa a rhe h and hence dono ke paas same functions ka access hoga jaise ki logMe and ....
//agr humne kisi function ke pehle static keyword laga diya then, we will see ki uska access nhi milta h new user ke const ko