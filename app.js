"use strict";
//65318724
// expected arr [1,2,3,4,5,6,7,8];
function bubbleSort(arr) {
//   // console.log("am I in function");
 

//   // console.log(arr);
  var done = false;
  while(!done){
    done = true;
      for (var i = 0; i < arr.length; i++){
      // console.log(arr[i]);
        if (arr[i-1] > arr[i]) {
          done = false;
          [arr[i-1], arr[i]] = [arr[i], arr[i-1]]
        }
      }
    }
  console.log(arr);
  return arr;
}

bubbleSort([6,5,3,1,8,7,2,4]);
//   var stop;
//     for ( var i =0; i < arr.length; i++){
//       for(var j = 0; stop=arr.length-i; j<stop; j++){
//         if(arr[j] > arr[j+1]){
//           swap(arr, j, j+1);
//         }
//       }
//     }
//     return arr;
// // }
//current output [ 6, [ 5, 6 ], 3, [ 1, 3 ], 8, [ 7, 8 ], 2, 4 ]
//needed output [1,2,3,4,5,6,7,8];
//
// function bubbleSort(arr) {
// //   // console.log("am I in function");
//   var arr = [6,5,3,1,8,7,2,4], stop;
//
// //   // console.log(arr);
//   var done = false;
//   while(!done){
//     done = true;
//       for (var i = 0; i < arr.length; i++){
//         for (var j = 0; stop = arr.length-i, j< stop; j++){
//           if (arr[j] < arr[j+1]) {
//             swap(arr, j, j+1);
//           }
//         }
//       }
//       return arr;
//     }
//   }
// bubbleSort();
