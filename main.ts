let numero_azar = 0
input.onButtonPressed(Button.A, function () {
    numero_azar = randint(1, 6)
    basic.showNumber(numero_azar)
    if (numero_azar == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (numero_azar == 2) {
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . # #
            . . . # #
            `)
    }
    if (numero_azar == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    }
    if (numero_azar == 4) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # # . # #
            # # . # #
            `)
    }
    if (numero_azar == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
    if (numero_azar == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
})
