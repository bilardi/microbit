// fork of https://www.youtube.com/watch?v=doHwknM7HbQ
// created by Alessandra Bilardi for digiVeneto.it
// test it by simulator https://makecode.microbit.org/92566-75367-70110-10788
let east = 0
let west = 0
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(Math.randomRange(0, 4000))
    basic.showIcon(IconNames.Heart)
    while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.pause(5)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showArrow(ArrowNames.West)
        west += 1
    } else {
        basic.showArrow(ArrowNames.East)
        east += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.West)
    basic.showNumber(west)
    basic.showArrow(ArrowNames.East)
    basic.showNumber(east)
    west = 0
    east = 0
})
west = 0
east = 0
