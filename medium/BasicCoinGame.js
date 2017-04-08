// fork of https://www.youtube.com/watch?v=TJRtWaLDMZA
// created by Alessandra Bilardi for digiVeneto.it
// test it by simulator https://pxt.microbit.org/94493-92038-41854-11595
let player: game.LedSprite = null
let coin: game.LedSprite = null
basic.forever(() => {
    if (player.isTouching(coin)) {
        game.setScore(game.score() + 1)
        coin.set(LedSpriteProperty.X, Math.random(5))
        coin.set(LedSpriteProperty.Y, Math.random(5))
    }
    if (input.acceleration(Dimension.Y) >= 0) {
        player.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) < 0) {
        player.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) >= 0) {
        player.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        player.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
})
coin = game.createSprite(Math.random(5), Math.random(5))
player = game.createSprite(2, 2)
game.setScore(0)
game.startCountdown(20000)
