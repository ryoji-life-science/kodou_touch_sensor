let i = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) && i <= 1023) {
        i += 2
        basic.pause(1)
        pins.analogWritePin(AnalogPin.P1, i)
    } else {
        if (i > 0) {
            i += -5
            basic.pause(1)
            pins.analogWritePin(AnalogPin.P1, i)
        }
    }
})
