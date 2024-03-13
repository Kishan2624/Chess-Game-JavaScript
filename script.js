import * as render from "./Render/render.js"
import * as help from "./Helper/constant.js"
import * as event from "./Event/board.js"

render.initGameRender(help.globalData);
event.setupBoardSquares();
event.setupPieces();

