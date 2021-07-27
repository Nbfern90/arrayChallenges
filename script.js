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
   if( arr[i] >= 6){
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
  for (var i=0; i<arr.length; i++){
    var sum =(arr[i] / arr.length) * arr.length;
  }
  var count = 0
  if(arr[i] > sum){
    count=arr[i]> sum
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
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2]) + arr[i - 1]
  }
  return arr[n]
}


var result = fibonacciArray(10);
console.log(result);

