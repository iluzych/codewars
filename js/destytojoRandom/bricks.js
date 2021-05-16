/*
UZDUOTIS:
- gaunam, kiek sienu turi namas
- gaunam, kokio plocio yra kiekviena siena (metrais)
- sienos neturi angu
- gaunam sienos auksti, kuris visur yra vienodas
- turim plytos dydi (aukstis ir plotis) [metrais]
- reikia suzinoti, kiek plytu mums reikes, jei plytu skaldyti negalima
*/

function bricks(sienuPlociai, sienosAukstis, plytosAukstis, plytosPlotis) {
    let bendrasSienuPlotis = 0;
     

    for (let i = 0; i < sienuPlociai.length; i++) {
        bendrasSienuPlotis += sienuPlociai[i];
    }    

    const plytuPlotyje = Math.ceil(bendrasSienuPlotis / plytosPlotis);
    const plytuAukstyje = Math.ceil(sienosAukstis / plytosAukstis);
   

    return kiekReikiaPlytu = plytuPlotyje * plytuAukstyje;
    
}


console.log(bricks([1, 2,], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3], 0.5, 0.1, 0.2), '->', 150);