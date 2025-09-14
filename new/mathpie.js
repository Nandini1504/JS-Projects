const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter)

const chai = {
    name:"ginger",
    price: 250,
    isAvailable : true,
    orderChai: function(){
        console.log("chai not ");
        
    }
    //agr order chai krke function bana liya then key values nhi milengi
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable:false

})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
for (let [key,value] of Object.entries(chai)) {
    if(typeof value!== 'function'){
       console.log('${key}: ${value}');
    }
    
}
// we can stop iteration too.
