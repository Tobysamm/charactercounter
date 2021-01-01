const words = document.getElementById('words');
const text = document.getElementById('text');
const charsLength = document.getElementById('chars-length');
const fa = document.getElementById('fa');
const body = document.getElementById('body');

function getTextLength(){
       const word = text.value.length;
       charsLength.innerText = word;
/*
    setTimeout(() => {
        words.innerHTML = text.value + ' lenth is ' + word;
    },0); 
    */
}

fa.onclick = () => {
    body.classList.toggle('change');
}
/*
const wordTyped = (function(){
    words.innerText = text.value;
})();
*/
text.addEventListener('keyup', getTextLength);