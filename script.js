let board = document.querySelector('.board');
let pageWidth = document.documentElement.clientWidth;
let pageHeight = document.documentElement.clientHeight;

board.style.height = board.clientWidth + 'px';

for(let i = 0; i < 256; i++){ // 256 and 16 values should be slidered
    pixel = document.createElement("div");
    pixel.classList.add('pixel')
    pixel.style.width = board.clientWidth/16 + 'px';
    pixel.style.height = board.clientHeight/16 + 'px';
    board.appendChild(pixel);
}

window.addEventListener("resize", () =>{
    board.style.height = board.clientWidth + 'px';
    const pixels = document.getElementsByClassName('pixel')

    for(p of pixels){
        p.style.width = board.clientWidth/16 + 'px';
        p.style.height = board.clientHeight/16 + 'px';
    }
})