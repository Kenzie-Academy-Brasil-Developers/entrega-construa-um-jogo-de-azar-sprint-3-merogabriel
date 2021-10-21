const body = document.getElementsByTagName('body')
const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')

pedra.addEventListener('click', function () {
    const comMove = generateRandom()
    const result = document.getElementById('result')
    
    if (comMove === 1) {
        result.innerText = 'EMPATE!'
        result.style.color = "purple";
    } else if (comMove === 2) {
        result.innerText = 'VOCE PERDEU!'
        result.style.color = "red";
    } else if (comMove === 3) {
        result.innerText = 'VOCE GANHOU!'
        result.style.color = "greenyellow";
    }
})

papel.addEventListener('click', function () {
    const comMove = generateRandom()
    const result = document.getElementById('result')
    
    if (comMove === 2) {
        result.innerText = 'EMPATE!'
        result.style.color = "purple";
    } else if (comMove === 3) {
        result.innerText = 'VOCE PERDEU!'
        result.style.color = "red";
    } else if (comMove === 1) {
        result.innerText = 'VOCE GANHOU!'
        result.style.color = "greenyellow";
    }
})

tesoura.addEventListener('click', function () {
    const comMove = generateRandom()
    const result = document.getElementById('result')
    
    if (comMove === 3) {
        result.innerText = 'EMPATE!'
        result.style.color = "purple";
    } else if (comMove === 1) {
        result.innerText = 'VOCE PERDEU!'
        result.style.color = "red";
    } else if (comMove === 2) {
        result.innerText = 'VOCE GANHOU!'
        result.style.color = "greenyellow";
    }
})

function generateRandom() {
    const img = document.getElementById('turnCom')
    let rand = Math.random() * 3;
    rand = Math.ceil(rand);

    if (rand === 1) {
        img.style.backgroundImage = "url('seixo.jpg')";
    } else if (rand === 2) {
        img.style.backgroundImage = "url('papel.jpg')";
        img.style.color = "red";

    } else if (rand === 3) {
        img.style.backgroundImage = "url('tesoura.png')";
        img.style.color = "";
    }
    img.style.backgroundSize = "cover"
    img.style.backgroundSize = "no-repeat"
    return rand;
}
