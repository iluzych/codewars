/*

UZDUOTIS:
- duodama , kiek turim geliu
- duodama , kiek viena gele "susilaukia" nauju gelyciu
- duodama , kiek turiu vazonu
- reikia rasti , keliu vazonu truksta ?

*/

function flowers (geles, vaikai, vazonai) {

    let visoGeliu = geles + (geles * vaikai); 
    const truksta = visoGeliu - vazonai;

        if (vazonai > truksta) { 
             return 0;
        }   
        
        return truksta;
    
}
 

console.log(flowers(1, 4, 2), '->', 3);
console.log(flowers(10, 1, 5), '->', 15);
console.log(flowers(10, 2, 100), '->', 0);
