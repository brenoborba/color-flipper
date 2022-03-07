const hexArray = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'black', 'white', 'grey', 'aqua']
let hexDisplay = document.querySelector('.color')
let btn = document.querySelector('#btn')



btn.onclick = function(){
    let index = Math.floor(Math.random() * hexArray.length);
    let finalColor = hexArray[index]
    document.body.style.backgroundColor = `${finalColor}`
    hexDisplay.innerHTML = `${finalColor}`
    
}













