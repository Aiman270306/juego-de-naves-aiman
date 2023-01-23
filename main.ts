input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    nami.move(-1)
})
input.onGesture(Gesture.Shake, function () {
    game.pause()
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    disparo = game.createSprite(nami.get(LedSpriteProperty.X), nami.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        disparo.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    nami.move(1)
})
let disparo: game.LedSprite = null
let nami: game.LedSprite = null
nami = game.createSprite(2, 4)
let enemigo_1 = game.createSprite(2, 0)
enemigo_1 = game.createSprite(2, 0)
disparo = game.createSprite(2, 0)
enemigo_1.delete()
disparo.delete()
game.setScore(0)
basic.forever(function () {
    if (disparo.get(LedSpriteProperty.Y) == 0) {
        disparo.delete()
    }
})
basic.forever(function () {
    basic.pause(randint(1000, 3000))
    if (enemigo_1.isDeleted()) {
        enemigo_1 = game.createSprite(randint(0, 4), 0)
    }
})
basic.forever(function () {
    basic.pause(1000)
    if (!(enemigo_1.isDeleted())) {
        enemigo_1.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (disparo.isTouching(enemigo_1)) {
        enemigo_1.delete()
        disparo.delete()
        game.addScore(1)
    } else if (enemigo_1.isTouching(nami)) {
        game.gameOver()
    } else if (enemigo_1.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
})
