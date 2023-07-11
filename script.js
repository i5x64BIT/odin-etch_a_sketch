let board = document.querySelector('.board');
let pageWidth = document.documentElement.clientWidth;
let pageHeight = document.documentElement.clientHeight;

let rowSize = 16;
let boardSize = rowSize**2;

board.style.height = board.clientWidth + 'px';

//Board fill
for(let i = 0; i < boardSize; i++){ 
    pixel = document.createElement("div");
    pixel.classList.add('pixel')
    pixel.style.width = board.clientWidth/rowSize + 'px';
    pixel.style.height = board.clientHeight/rowSize + 'px';
    board.appendChild(pixel);
}

window.addEventListener("resize", () =>{
    board.style.height = board.clientWidth + 'px';
    const pixels = document.getElementsByClassName('pixel')

    for(p of pixels){
        p.style.width = board.clientWidth/rowSize + 'px';
        p.style.height = board.clientHeight/rowSize + 'px';
    }
})