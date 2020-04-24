let popin = document.getElementById('popin');
let bouton = document.getElementById('boutonInfo');
let closeB = document.querySelector('#closeB');

function afficherInfo() {
    if (popin.style.display === 'none') {
        popin.style.display = 'block';
        popin.style.position = 'absolute';
        popin.style.textAlign = 'center';
        popin.style.marginRight = '275px';

    } else {
        popin.style.display = 'none'
    }
}

bouton.addEventListener('click', afficherInfo);
closeB.addEventListener('click', function() {
    popin.style.display = 'none';
})