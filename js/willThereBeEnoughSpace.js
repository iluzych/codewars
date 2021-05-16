function enough(cap, on, wait) {
    let totalWants = on + wait;

    if (totalWants <= cap) {
        return 0;
    }        
        return (totalWants - cap);
}

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);