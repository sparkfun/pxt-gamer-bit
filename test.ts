// tests go here; this will not be compiled when this package is used as a library
gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Down, () => {
    led.plot(0, 0)
})
gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Up, () => {
    led.unplot(0, 0)
})
gamerbit.onEvent(GamerBitPin.P16, GamerBitEvent.Down, () => {
    led.plot(1, 0)
})
gamerbit.onEvent(GamerBitPin.P16, GamerBitEvent.Up, () => {
    led.unplot(1, 0)
})
gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Down, () => {
    led.plot(1, 2)
})
gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Up, () => {
    led.unplot(1, 2)
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Down, () => {
    led.plot(3, 2)
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Up, () => {
    led.unplot(3, 2)
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Down, () => {
    led.plot(2, 1)
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Up, () => {
    led.unplot(2, 1)
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Down, () => {
    led.plot(2, 3)
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Up, () => {
    led.unplot(2, 3)
})

basic.forever(() => {
    if (gamerbit.isPressed(GamerBitPin.P12))
        led.toggle(3, 0);
    if (gamerbit.isPressed(GamerBitPin.P16))
        led.toggle(4, 0);
    if (gamerbit.isPressed(GamerBitPin.P0))
        led.toggle(3, 1);
    if (gamerbit.isPressed(GamerBitPin.P1))
        led.toggle(4, 1);
    if (gamerbit.isPressed(GamerBitPin.P2))
        led.toggle(4, 2);
    if (gamerbit.isPressed(GamerBitPin.P8))
        led.toggle(4, 3);
})

led.unplot(4, 4)
