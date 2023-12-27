
// Implement a function that first finds and removes the smallest element in a sorted array.
// Implement the merge function to combine two sorted arrays into one larger array.
// Implement the mergeSort algorithm using the previous functions that you wrote.


function findMinAndRemoveSorted(array) {
    return array.shift() 
}

function merge(array1, array2) {
    let sortedArray = []
    
    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] <= array2[0]) {
            sortedArray.push(findMinAndRemoveSorted(array1))
        }
        else {
            sortedArray.push(findMinAndRemoveSorted(array2))
        }
    }
    return sortedArray.concat(array1).concat(array2)
}

function mergeSort(array) {
   let midpoint = array.length/2
   let firstHalf = array.slice(0, midpoint)
   let secondHalf = array.slice(midpoint, array.length)
 
   if (array.length < 2){
     return array
   } else { 
     return merge(mergeSort(firstHalf), mergeSort(secondHalf))
   }
}
