//21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"

let x = "John"
let y = "Doe"
//console.log(x+' <> '+y)

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

for(let arr of array){
    //console.log(arr)
}
//26) Create an array with 100 random numbers in it
let arr = []
for (i=0;i<=100;i++){
arr.push(Math.floor(Math.random()*100))
}
console.log(arr)

//console.log()
//27) Wrote a function to get the MAX and the MIN from the previously created array
function minMax(number){
    max = number[0]
    min = number[0]
    /*for(i=0;i<number.length-1;i++){
      if(number[i] > max){
        max = number[i]
      }
      if(number[i] < min){
        min = number[i]
      }
    
    }*/
    for(num of number){
      max = num > max ? num : max
      min = num < min ? num : min
    }
    
    return 'the max number is ' +max+ ' and the min number is '+ min
  }
    
    

console.log(minMax(arr))

//28) Create an array of arrays, in which every array has 10 random numbers
let r=[]
for(let i=1;i<=10;i++){
  let random = []
  for(j=1;j<=10;j++){
    random.push(Math.floor(Math.random()*10))
  }
  
  r.push(random)
  
}
console.log(r)


//29) Create a function that gets 2 arrays and returns the longest one
a = ['dshds',1,'adklnl',6]
b= ['dsdj',98,'ewdkj','dshds',1,'adklnl',6]
function largestArray(array1,array2){
  //return array1.length > array2.length ? array1:array2    ////////this one is an alternative for if condition
  if(array1.length > array2.length){
    return array1
  }
  return array2
}
console.log(largestArray(b,a))

//30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
arrayOne = [10,10]
arrayTwo = [9,9]
function heightSum(array1,array2){
  let a = 0
  for(one of array1){
    a+=one
  }
  let b = 0
  for(two of array2){
    b+=two
  }
  
  let c = a > b ? a:b
  return c
}
console.log(heightSum(arrayOne,arrayTwo))


//DOM
console.log('-------------------------------DOM------------------------')
//31) Get element with ID "container" from the page


let element = document.getElementById('container')
//32) Get every "td" from the page

let everyTd = document.querySelectorAll('td')
// 33) Create a cycle that prints the text inside every td of the page
/*for(let i of everyTd){
  i.innerText = 'something'
}*/
