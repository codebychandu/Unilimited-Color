

// Random color generator function
const changer = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        let val = Math.floor(Math.random() * 16);
        color = color + hex[val];
    }
    return color;
};
// console.log(changer());

let intervalId;
const startChange = function(){
    if (!intervalId) {     
        intervalId = setInterval(changebg, 1000); 
    }

    function changebg() {
        document.body.style.backgroundColor = changer(); 
    }
};
    

const stopChange = function () {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#button1').addEventListener('click', startChange);
document.querySelector('#button2').addEventListener('click', stopChange);