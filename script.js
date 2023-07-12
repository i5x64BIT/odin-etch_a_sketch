let board = document.querySelector('.board');
let pageWidth = document.documentElement.clientWidth;
let pageHeight = document.documentElement.clientHeight;
let slider = document.getElementById('board-size-slider');
let btnApply = document.getElementById('display-btn-apply');
let btnClear = document.getElementById('display-btn-clear')

let rowSize = 16;
let boardSize = rowSize**2;


const drawPixels = () => {
    board.innerHTML = ''; //remove childern
    let isMouseActive = false;


    for(let i = 0; i < boardSize; i++){ 
        pixel = document.createElement("div");
        pixel.classList.add('pixel')
        pixel.style.width = board.clientWidth/rowSize + 'px';
        pixel.style.height = board.clientHeight/rowSize + 'px';

        pixel.addEventListener('mousedown', () => { isMouseActive = true; })
        pixel.addEventListener('mouseover', function(e){
            if(isMouseActive){
                this.style.backgroundColor = "black";
            }
        })
        pixel.addEventListener('mouseup', () =>{ isMouseActive = false; })
        board.appendChild(pixel);
    }
}
const resizePixels = (pixels) =>{
    for(p of pixels){
        p.style.width = board.clientWidth/rowSize + 'px';
        p.style.height = board.clientHeight/rowSize + 'px';
    }
}
const clearBoard = () => {
    document.querySelectorAll('.pixel').forEach((p) => {
        p.style.backgroundColor = 'white';
    })
}

drawPixels();

//Controls

slider.oninput = function(){  //Slider Functionality
    rowSize = this.value;
    document.getElementById('display-size').innerText = `${rowSize}x${rowSize}`;
}

btnApply.addEventListener('click', () => {
    boardSize = rowSize**2; //update board size
    drawPixels();
})

btnClear.addEventListener('click', clearBoard);



// //On resize
// window.addEventListener("resize", () =>{
//     board.style.height = board.clientWidth + 'px';
//     const pixels = document.getElementsByClassName('pixel')

//     resizePixels(pixels);
// })

