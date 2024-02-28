function isPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-z0-9]/g, '');  
    return string === string.split('').reverse().join('');  
}


console.log(isPalindrome("oto")); 
