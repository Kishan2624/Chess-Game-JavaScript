import * as data from "../Data/data.js"
export const globalData = data.initGame();
export const boardSquares = document.getElementsByClassName("square")
export const pieces = document.getElementsByClassName("piece")
export const piecesImages = document.getElementsByTagName("img")