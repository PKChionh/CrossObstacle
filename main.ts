let roll = 0
let pitch = 0
let score = 0
input.onButtonPressed(Button.AB, function () {
    score = 9
})
radio.onReceivedNumber(function (receivedNumber) {
    score += receivedNumber
})
score = 9
basic.forever(function () {
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    if (Math.abs(pitch) < 10 && Math.abs(roll) < 10) {
        basic.showNumber(score)
    } else {
        basic.showNumber(score)
        if (score > 0) {
            score += -1
            radio.sendNumber(-1)
        }
    }
})
