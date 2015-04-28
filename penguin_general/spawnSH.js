exports.spawnSH = function (player) {
    box('cobblestone', 9, 1, 9)
        .move('start')
        .box0('cobblestone', 9, 6, 9)
        .move('start')
        .up(6)
        .prism('oak', 9, 9)
        .move('start')
        .right(4)
        .up(1)
        .door();
}