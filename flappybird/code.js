let brush = document.getElementById("c1").getContext("2d")
let w = 400
let h = 400
let birdX = 50
let birdY = 200
let birdDy = 0
let birdSize = 20
let g = 1
let jumpImpact = 20
let timerId = null;
let pipeDX = 2
let score = 0
let pipes = [[150, 50, 50, 100],[300, 100, 50, 80 ],[500, 80, 40, 50]]
document.addEventListener("keydown", onkeydown)
drawFrame()
function isXyInRect(x, y, rx, ry, rw, rh){
    if(x > rx && x < rx+rw && y > ry && y < ry+rh){
        return true
    } else {
        return false
    }

}

function gameOver(){
    clearInterval(timerId)
    brush.fillStyle = "#000000"
    brush.textAlign = "center"
    brush.textBaseline = "top"
    brush.font = "30px Arial"
    brush.fillText("GAME OVER", w/2, h/2)
}

function processCollision (){
    for (let i = 0; i < pipes.length; ++i){
        let pipe = pipes[i]
        if (isXyInRect(birdX, birdY,                    pipe[0],0, pipe[2],pipe[1]) ||
        isXyInRect(birdX+birdSize, birdY,              pipe[0],0, pipe[2],pipe[1])||
         isXyInRect(birdX, birdY+birdSize,          pipe[0], pipe[1]+pipe[3],pipe[2], h-pipe[1]- h-pipe[3]) ||
         isXyInRect(birdX+birdSize, birdY+birdSize, pipe[0], pipe[1]+pipe[3],pipe[2], h-pipe[1]- h-pipe[3])) {
            gameOver()
            break
         }
    }
    if (birdY <= 0 || birdY >= h){
        gameOver()
    }
}
function drawPipes(){
    brush.fillStyle = "#00FF00"
    for(let i = 0; i < pipes.length; ++i){
        let pipe = pipes[i]
        brush.fillRect(pipe[0], 0, pipe[2], pipe[1])
        brush.fillRect(pipe[0],pipe[1]+pipe[3], pipe[2],h-pipe[1]-pipe[3])
    }
}

function onkeydown (e) {
    if (e.key === "Enter") {
        resetData()
        clearInterval(timerId)
        timerId = setInterval(drawFrame, 20)
    } else if (e.key === " "){
        birdDy -= jumpImpact
    }
}
function resetData (){
    birdY = 200
    birdDy = 0
    score = 0
    pipes = [[150, 50, 50, 100],[300, 100, 50, 80 ],[500, 80, 40, 50]]
    document.getElementById("h").innerHTML = "Score: " + score
}

function drawFrame(){
    updateData()
    drawBackground()
    drawPipes()
    drawBird()
    processCollision()

}

function updateData (){
    birdDy += g
    birdY += birdDy
    for (let i = 0; i < pipes.length; ++i){
        let pipe = pipes[i]
        pipe[0] -= pipeDX
        if (pipe[0]+pipe[2] <= 0) {
            pipe[0] = w + Math.floor(Math.random()*50 + 50)
            ++score
            document.getElementById("h").innerHTML = "Score" + score
        }
    }
}

function drawBird(){
    brush.fillStyle = "#FF0000"
    brush.fillRect(birdX, birdY, birdSize, birdSize)
}

function drawBackground (){
    brush.fillStyle = "#85C1E9"
    brush.fillRect(0, 0, w, 12/16*h)
    brush.fillStyle = "#000000"
    brush.fillRect(0, 12/16*h, w, 1/16*h)
    brush.fillStyle = "#F5B041"
    brush.fillRect(0, 13/16*h, w, 3/16*h)
}