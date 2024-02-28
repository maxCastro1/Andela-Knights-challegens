
function findMajorityElement(arr) {
    let majority = arr.length / 2;
    let winner = "No majority element";
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > majority && count > maxCount) {
            winner = arr[i];
            maxCount = count;
        }
    }

    return winner;
}

console.log(findMajorityElement([3,1,3,4,4,5,3,5,3,3,3,6,3]));  
console.log(findMajorityElement([3,1,3,4,4])); 
