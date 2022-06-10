input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    PlayerFire = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    for (let index = 0; index < 3; index++) {
        PlayerFire.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (PlayerFire.isTouchingEdge()) {
        PlayerFire.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
let PlayerFire: game.LedSprite = null
let Player: game.LedSprite = null
game.setLife(7)
Player = game.createSprite(2, 1)
PlayerFire = game.createSprite(2, 1)
PlayerFire.delete()
let _1 = game.createSprite(0, 0)
let _2 = game.createSprite(1, 0)
let _3 = game.createSprite(2, 0)
let _4 = game.createSprite(3, 0)
let _5 = game.createSprite(4, 0)
let Enemy = game.createSprite(2, 5)
let EnemyFire = game.createSprite(2, 5)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        Enemy.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    }
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        Enemy.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    }
})
basic.forever(function () {
    while (!(Enemy.isDeleted())) {
        basic.pause(1000)
        EnemyFire = game.createSprite(Enemy.get(LedSpriteProperty.X), Enemy.get(LedSpriteProperty.Y))
    }
})
basic.forever(function () {
    if (EnemyFire.get(LedSpriteProperty.Y) > 0) {
        EnemyFire.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    } else {
        EnemyFire.delete()
    }
})
basic.forever(function () {
    if (PlayerFire.isTouching(Enemy)) {
        Enemy.delete()
        PlayerFire.delete()
        game.addScore(1)
    }
})
