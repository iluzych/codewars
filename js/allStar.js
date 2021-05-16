function strCount(str, letter){  
    let kiekis = 0;

    for (let i = 0; i < str.length; i++){
        const raide = str[i];
    
        if (raide === letter){
            kiekis++;
        }
    }

    return kiekis;
}

console.log(strCount('Hello', 'o'), '->', 1);
console.log(strCount('Hello', 'l'), '->', 2);
console.log(strCount('', 'z'), '->', 0);