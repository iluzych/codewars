function tripleTrouble(one, two, three){

    const raides = [];
    
    for(let i = 0; i < one.length; i += 1) {
        raides.push(one[i], two[i], three[i]);
    }
    
    return raides.join('');
 }


console.log(tripleTrouble("this","test","lock"), '->', "ttlheoiscstk");
console.log(tripleTrouble("aa","bb","cc"), '->', "abcabc");
console.log(tripleTrouble("Bm", "aa", "tn"), '->', "Batman");
console.log(tripleTrouble("LLh","euo","xtr"), '->', "LexLuthor");