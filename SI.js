function init() {

}



function draw () {

}



function move () {


}



function game () {
    move()
    draw()
}


function start() {
    init()
    document.addEventListener("keydown", function(e) {
    })
    interval = setInterval(game, 50)
}


window.onload = start