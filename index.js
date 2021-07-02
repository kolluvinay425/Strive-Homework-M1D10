//21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"

let x = "John"
let y = "Doe"
console.log(x+' <> '+y)

//22) Create an object with properties such name, surname, email

let object = {
    name:"Vinay",
    surname:"Kollu",
    email:"kolluvinay425@gmail.com"
}
//23) Delete Email from the previously created object

delete object.email
//console.log(object)
//24) Create an array with 10 strings in it

let array = ["string1","string2","string3","string4","string5","string6","string7","string8","string9","string10"]
//25) Print in the console every string in the previous array

for(arr of array){
    console.log(arr)
}
//26) Create an array with 100 random numbers in it
let randomArray = []
for(i=1;i<=100;i++){
    r =Math.floor(Math.random() * 100)+1
    if(randomArray.indexOf(r) === -1){
        randomArray.push(r)
    } 
     
}
console.log(randomArray)
console.log()
//27) Wrote a function to get the MAX and the MIN from the previously created array
function minMax(){
    let arry = randomArray
    let min = Math.min.apply(Math,arry)
    let max = Math.max.apply(Math,arry)
    return 'the max number is ' +max+ ' and the min number is '+ min
}
console.log(minMax())



//DOM
console.log('-------------------------------DOM------------------------')
//31) Get element with ID "container" from the page
let element = document.getElementById('container')
//32) Get every "td" from the page
let everyTd = document.getElementsByTagName('td')
