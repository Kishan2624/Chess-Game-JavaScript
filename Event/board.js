import * as help from "../Helper/constant.js"

export function setupBoardSquares(){
    for(let i=0 ; i<help.boardSquares.length;i++){
        help.boardSquares[i].addEventListener("dragover",allowDrop);
        help.boardSquares[i].addEventListener("drop",drop);
        
    }
}

export function setupPieces(){
    for(let i=0;i<help.pieces.length;i++){
        help.pieces[i].addEventListener("dragstart",drag);
        help.pieces[i].setAttribute("draggable",true);

    }
    for(let i=0;i<help.piecesImages.length;i++){
        help.piecesImages[i].setAttribute("draggable",false);
    }
}

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    const piece = ev.target;
    ev.dataTransfer.setData("text",piece.id);
}

function drop(ev){
    ev.preventDefault()
    let data = ev.dataTransfer.getData("text")
    const piece = document.getElementById(data);
    const destinationSquare= ev.currentTarget;
    const destinationSquareId = destinationSquare.id;
    piece.querySelector("div").setAttribute("id",destinationSquareId)
    destinationSquare.appendChild(piece.querySelector("div"));
}