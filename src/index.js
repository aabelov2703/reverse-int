module.exports = function reverse (n) {
    let res = 0,
        digits = n < 0 ? -1 * n : n
    while (digits  > 0) {
        res = res * 10 + digits % 10;
        digits = Math.floor(digits / 10);
    } ;
    return res;  
}
