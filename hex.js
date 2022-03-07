const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

function randomNumber(){
    return Math.floor(Math.random()* hexArray.length) 
}

btn.addEventListener('click', function(){
    let finalHex = '#'
    for(let i = 0; i < 6; i++){
        finalHex += hexArray[randomNumber()]
    }

    color.textContent = finalHex
    document.body.style.backgroundColor = finalHex

})