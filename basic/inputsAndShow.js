// created by Alessandra Bilardi for digiVeneto.it
// test it by simulator https://pxt.microbit.org/08371-51840-77860-72384
input.onButtonPressed(Button.A, () => {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, () => {
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.AB, () => {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, () => {
    basic.showIcon(IconNames.Angry)
})
basic.showString("digiVeneto.it")
