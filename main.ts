info.onCountdownEnd(function () {
    game.setGameOverEffect(false, effects.confetti)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
info.onScore(20, function () {
    game.gameOver(true)
})
let Hamburguesa: Sprite = null
let Pinocho = sprites.create(img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . f e 3 3 3 3 3 3 3 3 3 3 e f . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f b 3 f f e e e e f f 3 b f . 
    f f b b f b f e e f b f b b f f 
    f b b b e 1 f 4 4 f 1 e b b b f 
    . f b b e e 4 4 4 4 4 f b b f . 
    . . f 4 4 4 e d d d b f e f . . 
    . . f e 4 4 e d d d d c 4 e . . 
    . . . f e e d d b d b b f e . . 
    . . . f f 1 d 1 d 1 1 f f . . . 
    . . . . . f f f b b f . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(6)
controller.moveSprite(Pinocho)
Pinocho.setStayInScreen(true)
info.startCountdown(30)
game.onUpdateInterval(100, function () {
    Hamburguesa = sprites.create(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `, SpriteKind.Food)
    Hamburguesa.setPosition(randint(0, 160), randint(0, 120))
})
