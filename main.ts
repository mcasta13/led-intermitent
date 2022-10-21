basic.forever(function () {
    led.plot(3, 0)
    basic.pause(1000)
    led.unplot(3, 0)
    basic.pause(1000)
})
basic.forever(function () {
    led.toggle(4, 4)
    basic.pause(1000)
})
