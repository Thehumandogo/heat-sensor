input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P3, 0)
pins.digitalWritePin(DigitalPin.P4, 0)
pins.digitalWritePin(DigitalPin.P5, 0)
pins.digitalWritePin(DigitalPin.P6, 0)
pins.digitalWritePin(DigitalPin.P7, 0)
basic.forever(function () {
    if (input.temperature() < 25) {
        basic.showString("cold")
        basic.showString("" + (input.temperature()))
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        basic.showString("hot")
        basic.showString("" + (input.temperature()))
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
    if (input.compassHeading() < 45) {
        basic.showString("North")
        basic.showNumber(input.compassHeading())
        pins.digitalWritePin(DigitalPin.P9, 1)
    } else if (input.compassHeading() < 135) {
        basic.showString("East")
        basic.showNumber(input.compassHeading())
        pins.digitalWritePin(DigitalPin.P9, 0)
    } else if (input.compassHeading() < 215) {
        basic.showString("South")
        basic.showNumber(input.compassHeading())
        pins.digitalWritePin(DigitalPin.P9, 0)
    } else if (input.compassHeading() < 305) {
        basic.showString("West")
        basic.showNumber(input.compassHeading())
        pins.digitalWritePin(DigitalPin.P9, 0)
    } else {
        basic.showString("North")
        basic.showNumber(input.compassHeading())
        pins.digitalWritePin(DigitalPin.P9, 1)
    }
})
