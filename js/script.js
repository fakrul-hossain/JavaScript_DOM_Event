// events add option 1
/* <h1 onclick="console.log('this is heading tag');">DOM Special Events</h1> */
// events add option 2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// events add option 3
const makeTomato = document.getElementById('make_tomato');
makeTomato.onclick = makeTomatoBG;
function makeTomatoBG() {
    document.body.style.backgroundColor = 'tomato';
}
// events add option 3
const purpleButton = document.getElementById('make_purple');
purpleButton.onclick = function make_purple(){
    document.body.style.backgroundColor = 'purple'
}

// events add option 4

const pinkButton = document.getElementById('make_pink');
pinkButton.addEventListener('click', make_pink)

function make_pink() {
    document.body.style.backgroundColor = 'pink';
}

// events add option 4 another option
const makeCyanButton = document.getElementById('make_cyan');
makeCyanButton.addEventListener('click', function make_cyan(){
    document.body.style.backgroundColor= 'cyan';
});

// events add option 4 final 
// important it will be use sometimes
document.getElementById('make_golden').addEventListener('click', function(){
    document.body.style.backgroundColor = 'gold';
})
