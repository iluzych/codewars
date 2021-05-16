const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let kiekNuvaziuosi = mpg * fuelLeft;

    if (kiekNuvaziuosi >= distanceToPump) {
        return true;
    } 
        return false;
    
}

console.log(zeroFuel(50, 25, 2), '->', true);
console.log(zeroFuel(100, 50, 1), '->', false);
