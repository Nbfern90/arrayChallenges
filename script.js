//#1

function alwaysHungry(arr){
  for(var i=0; i<arr.length; i++){
    if(arr[i] === "food"){
      console.log("Yummy");}
        else {
          console.log("I'm Hungry")
        }
      }
    }

alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);

//#2 for
function highPass(arr, cutoff) {
  var filteredArr = [];
 for (var i=0; i<arr.length; i++){
   if( arr[i] > cutoff){
     filteredArr.push(arr[i]);
     
   }
 }
  return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//#3

function betterThanAverage(arr) {
  var sum = 0;

  for(var i=0; i<arr.length; i++){
    sum += arr[i];
  }
  
  var avg = sum / arr.length;
  var count = 0

  for(var i=0; i<arr.length; i++){
    if(arr[i] > avg){
      count++;
    }
  }
 
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//#4

function reverse(arr){

  var num =[];
  for(let i=arr.length-1; i>=0; i--){
    num.push(arr[i])
  }
  return num;
}

console.log(reverse(["a","b","c","d","e"]));


//#5

function fibonacciArray(n){
  var fibArr =[0,1];
  while(fibArr.length < n){
    var num1 = fibArr[fibArr.length-1];
    var num2 = fibArr[fibArr.length-2];
    fibArr.push(num1+ num2)
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result);

