#include "pxt.h"

using namespace pxt;
namespace gamerbit {
    bool initialized = false;

    //%
    void init() {
        if (initialized) return;

    // mount buttons on the pins with a pullup mode
    // TODO: fix this issue in the DAL itself
#define ALLOC_PIN_BUTTON(id) new MicroBitButton(getPin(id)->name, id, MICROBIT_BUTTON_ALL_EVENTS, PullUp);
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P0)
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P1)
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P2)
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P8)
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P12)
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P16)
#undef ALLOC_PIN_BUTTON

        initialized = true;
    }
}
