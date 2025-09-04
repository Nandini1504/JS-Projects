const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is completed')
        resolve() // jab ye likhenge tabhi promise consumed aayega as isi line se connect ho rhe h cheezein.isko lagega ki haan ab mai resolve ho gya hu mera time aa gya h chalne ka so
    }, 1000)

})

promiseOne.then(function(){
    console.log('promise consumed')
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task  2 is completed')
        resolve()
    }, 1000)
}).then(function(){
        console.log("async task 2")     
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task  2 is completed')
        resolve({username :"chai", email: "chai@example.com"})
    }, 1000)
})
promiseThreethen(function(user){
        console.log(user)     
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "chaihj", email: "djhucb"})
        }else{
            reject("ERROR")
        }
        
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user)
    return user.username    
})
.then((username) => {
    console.log(username)  
})
.catch(function(error){
    console.log(error)
}).finally(() => console.log("the promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "js", password: "djhucb"})
        }else{
            reject("ERROR")
        }
        
    }, 1000)
})

async function promiseFive() {
    try{
        const response = await promiseFive 
        console.log(response);
    }catch(error){
        console.log(error)

    }// isse errors gracefully handle ho jate hai .

    
}// async await cannot handle errors properly
consumepromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch()
        const data = await response.json() // bracket mei user ka data hoga saara jo api se lenge,users update hone mein time lagta h isiliye isko await kara rhe h
        console.log(data)
    } catch (error) {
        console.log("E: ", error)
        
    }
}

getAllUsers()

fetch('url')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
    
})// yaha par await ki zaroorat nhi as 1 then khtam hoga execute hona  tabhi dusra shuru hoga execute hona