const display = document.getElementById('display');
const clickSound = document.getElementById('click-sound');



function playSound(){
    clickSound.currentTime = 0;
    clickSound.play();
}

function append(value){
    playSound();
    if (display.textContent === '0' ) display.textContent = '';
    display.textContent += value
}

function clearDisplay(){
    playSound();
    display.textContent = '0';
}

function deleteLast(){
    playSound();
    if(clearDisplay.textContent.length > 1){
        display.textContent = display.textContent.slice(0,-1);
    }else{
        clearDisplay();
    }
}

function calculate(){
    playSound();
    try{
        display.textContent = eval(display.textContent);
    }catch{
        display.textContent = 'Error';
    }
}

document.addEventListener('keydown',(e) => {
    const key = e.key;
    if((/\d|[+\-*/.]/).test(key)){
        append(key);
    }else if (key ==='Backspace'){
        deleteLast();
    }else if (key.toLowerCase() === 'c'){
        clearDisplay();
    }else if (key === 'Enter'){
        calculate()
    }
});