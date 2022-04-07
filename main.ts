input.onButtonPressed(Button.A, function () {
    trash_count[list_index] = trash_count[list_index] + 1
})
input.onButtonPressed(Button.B, function () {
    list_index = 0
    for (let value of trash_types) {
        radio.sendValue(value, trash_count[list_index])
        list_index += 1
    }
    trash_count = [
    0,
    0,
    0,
    0,
    0,
    0
    ]
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (trash_types[list_index]))
    list_index += 1
    if (list_index >= trash_types.length) {
        list_index = 0
    }
})
let trash_count: number[] = []
let trash_types: string[] = []
let list_index = 0
radio.setGroup(42)
list_index = 0
trash_types = [
"plastic",
"glass",
"metal",
"paper",
"styrofoam",
"other"
]
trash_count = [
0,
0,
0,
0,
0,
0
]
