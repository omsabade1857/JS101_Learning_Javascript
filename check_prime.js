function check_prime(num) {
    let count = 0;
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    } if (count == 2) {
        return true;
    } return false;
} 
let ans = check_prime(17);
if (ans == true) {
    console.log("prime");
} else {
    console.log("Not prime");
}