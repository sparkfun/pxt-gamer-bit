namespace modules {
    /**
     * SparkFun gamer:bit gamepad
     */
    //% fixedInstance whenUsed block="sparkfun gamer:bit"
    export const sparkfunGamerbit = new GamepadClient("sparkfun gamerbit?dev=self&buttons_available=63&variant=Gamepad")
}

namespace userconfig { export const PIN_JACK_TX = 0xdead }

namespace servers {
    const BUTTONS_AVAILABLE = jacdac.GamepadButtons.Left // P1
        | jacdac.GamepadButtons.Right // P2
        | jacdac.GamepadButtons.Up // P0
        | jacdac.GamepadButtons.Down // P8
        | jacdac.GamepadButtons.A // P12
        | jacdac.GamepadButtons.B // P16
        | jacdac.GamepadButtons.X // P5
        | jacdac.GamepadButtons.Y // P6
    class GamepadServer extends jacdac.SensorServer {
        constructor() {
            super(jacdac.SRV_GAMEPAD, { variant: jacdac.GamepadVariant.Gamepad })

            const handler = () => {
                const state = this.serializeState()
                const buttons = state[0]
                this.sendEvent(jacdac.GamepadEvent.ButtonsChanged,
                    jacdac.jdpack(jacdac.GamepadEventPack.ButtonsChanged, [buttons]))
            }
        }

        serializeState() {
            let buttons: jacdac.GamepadButtons = 0
            let x = 0
            let y = 0
            if (pins.digitalReadPin(DigitalPin.P1) == 0) {
                buttons |= jacdac.GamepadButtons.Left
                x = -1
            }
            if (pins.digitalReadPin(DigitalPin.P2) == 0) {
                buttons |= jacdac.GamepadButtons.Right
                x = 1
            }
            if (pins.digitalReadPin(DigitalPin.P0) == 0) {
                buttons |= jacdac.GamepadButtons.Up
                y = 1
            }
            if (pins.digitalReadPin(DigitalPin.P8) == 0) {
                buttons |= jacdac.GamepadButtons.Down
                y = -1
            }
            if (pins.digitalReadPin(DigitalPin.P12) == 0) {
                buttons |= jacdac.GamepadButtons.A
            }
            if (pins.digitalReadPin(DigitalPin.P16) == 0) {
                buttons |= jacdac.GamepadButtons.B
            }
            if (pins.digitalReadPin(DigitalPin.P5) == 0) {
                buttons |= jacdac.GamepadButtons.X
            }
            if (pins.digitalReadPin(DigitalPin.P6) == 0) {
                buttons |= jacdac.GamepadButtons.Y
            }
            return jacdac.jdpack(jacdac.GamepadRegPack.Direction, [buttons, x, y])
        }

        handleCustomCommand(pkt: jacdac.JDPacket) {
            this.handleRegValue(
                pkt,
                jacdac.GamepadReg.ButtonsAvailable,
                jacdac.GamepadRegPack.ButtonsAvailable,
                BUTTONS_AVAILABLE
            )
        }
    }

    function start() {
        jacdac.productIdentifier = 0x3765a260
        jacdac.deviceDescription = "Sparkfun gamer:bit"
        jacdac.startSelfServers(() => {
            pins.pushButton(DigitalPin.P0);
            pins.pushButton(DigitalPin.P1);
            pins.pushButton(DigitalPin.P2);
            pins.pushButton(DigitalPin.P8);
            pins.pushButton(DigitalPin.P12);
            pins.pushButton(DigitalPin.P16);
            return [new GamepadServer()]
        })
    }
    start()
}