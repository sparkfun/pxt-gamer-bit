control.runInParallel(() => {
    modules.sparkfunGamerbit.onButtonsChanged(() => {
        basic.clearScreen()
        if (modules.sparkfunGamerbit.isButtonDown(jacdac.GamepadButtons.Left))
            led.toggle(0, 1)
        if (modules.sparkfunGamerbit.isButtonDown(jacdac.GamepadButtons.Up))
            led.toggle(1, 0)
        if (modules.sparkfunGamerbit.isButtonDown(jacdac.GamepadButtons.Down))
            led.toggle(1, 2)
        if (modules.sparkfunGamerbit.isButtonDown(jacdac.GamepadButtons.Right))
            led.toggle(2, 1)
        if (modules.sparkfunGamerbit.isButtonDown(jacdac.GamepadButtons.A))
            led.toggle(4, 0)
        if (modules.sparkfunGamerbit.isButtonDown(jacdac.GamepadButtons.B))
            led.toggle(4, 1)
    })
})