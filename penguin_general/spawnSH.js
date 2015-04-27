exports.spawnSH = function (player) {
    box('4', 9, 1, 9)
        .move('start')
        .box0('4', 9, 6, 9)
        .move('start')
        .up(6)
        .prism('5', 9, 9)
        .move('start')
        .right(4)
        .up(1)
        .door();
}