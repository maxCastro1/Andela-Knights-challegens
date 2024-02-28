
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}



function sortAndRemovePrimes(arr) {
   
    arr = arr.filter(num => !isPrime(num));
    let x = arr.sort(function(a, b){return b - a});
 
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length - i - 1; j++) {
    //         if (arr[j] < arr[j + 1]) {
    //             let temp = arr[j];
    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = temp;
    //         }
    //     }
    // }

    return x;
}


console.log(sortAndRemovePrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  
