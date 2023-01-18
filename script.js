function isprime(num) {
    if (num < 2) {
        return false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function prime(num, i = 2) {
    if (i > num) {
        return [];
    } else {
        const numTab = prime(num - 1);
        if (isprime(num)) {
            numTab.push(num);
        }
        return numTab;
    }
}


console.log(prime(10));
console.log(prime(2));
console.log(prime(-1));
console.log(prime(1));
console.log(prime(0));
console.log(prime(55));
