function getPilihanComputer(){
    const comp = innerHTML = Math.random();
    if(comp < 0.34) return 'kertas';
    if(comp > 0.34 && comp < 0.67) return 'batu';
    return 'gunting';
}

function getHasil(comp, player) {
    if( player == comp ) return 'SERI!';
     if( player == 'kertas' ) return ( comp == 'batu' ) ? 'MENANG!' : 'KALAH!';
     if( player == 'batu' ) return ( comp == 'kertas' ) ? 'KALAH!' : 'MENANG!';
     if( player == 'gunting' ) return ( comp == 'batu' ) ? 'KALAH' : 'MENANG!';

}

const pKertas = document.querySelector('.kertas');
pKertas.addEventListener('click', function() {
   const pilihanComputer = getPilihanComputer();
   const pilihanPlayer = pKertas.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    const hasilComputer = document.getElementById("area-computer");
    hasilComputer.setAttribute = 'src', 'img/' + pilihanComputer + '.png';
    

    pKertas.addEventListener('click', function(){
        pKertas.style.backgroundColor = '#ffdeb0'
    })

    hasilComputer.addEventListener('change', (event) => {
        hasilComputer.style.backgroundColor = '#ffdeb0';
    })

    const info = document.querySelector('.info');
    info.innerHTML = hasil;

});

