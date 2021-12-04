/**
 * Returns n-th Prime number
 *
 * @param {number} n positive integer
 * @returns {number} n-th number in Prime number sequence
 */
module.exports = function prime(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n <= 0) throw new Error('Argument should be positive');
    if (n % 1) throw new Error('Argument should be an integer');
    let primes = [];
    let num = 2;
    while (primes.length <= n) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) isPrime = false;
        }
        if (isPrime) primes.push(num);
        num++;
    }
    return primes[n-1];
}