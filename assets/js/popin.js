let popin = document.getElementById('popin');
let bouton = document.getElementById('boutonInfo');

function afficherInfo() {
    if(popin.style.display==='none'){
        popin.style.display='block';

    }else{
        popin.style.display='none'
    }
}

bouton.addEventListener('click', afficherInfo);