basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showIcon(IconNames.Heart)
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showIcon(IconNames.Happy)
    } else if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Skull)
    } else if (input.isGesture(Gesture.LogoDown)) {
        basic.showIcon(IconNames.Surprised)
    } else if (input.isGesture(Gesture.LogoUp)) {
        basic.showIcon(IconNames.EigthNote)
    } else if (input.isGesture(Gesture.ScreenUp)) {
        basic.showIcon(IconNames.Chessboard)
    } else if (input.isGesture(Gesture.ScreenDown)) {
        basic.showIcon(IconNames.Duck)
    } else if (input.isGesture(Gesture.FreeFall)) {
        basic.showIcon(IconNames.House)
    } else if (input.isGesture(Gesture.ThreeG)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
