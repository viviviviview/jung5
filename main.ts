function clear () {
    OLED12864_I2C.showString(
    0,
    0,
    "    ",
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "      ",
    1
    )
    OLED12864_I2C.showString(
    0,
    2,
    "       ",
    1
    )
    OLED12864_I2C.showString(
    0,
    3,
    "      ",
    1
    )
    OLED12864_I2C.showString(
    0,
    4,
    "      ",
    1
    )
    OLED12864_I2C.showString(
    0,
    5,
    "       ",
    1
    )
    OLED12864_I2C.showString(
    0,
    6,
    "     ",
    1
    )
    OLED12864_I2C.showString(
    0,
    7,
    "     ",
    1
    )
}
OLED12864_I2C.init(60)
clear()
basic.forever(function () {
    OLED12864_I2C.rect(
    8,
    29,
    17,
    30,
    1
    )
    OLED12864_I2C.rect(
    47,
    29,
    56,
    30,
    1
    )
    OLED12864_I2C.rect(
    31,
    29,
    32,
    30,
    1
    )
    OLED12864_I2C.rect(
    33,
    27,
    34,
    28,
    1
    )
    OLED12864_I2C.rect(
    33,
    31,
    34,
    32,
    1
    )
    OLED12864_I2C.rect(
    35,
    22,
    36,
    26,
    1
    )
    OLED12864_I2C.rect(
    35,
    33,
    36,
    37,
    1
    )
    OLED12864_I2C.rect(
    33,
    20,
    34,
    21,
    1
    )
    OLED12864_I2C.rect(
    33,
    38,
    34,
    39,
    1
    )
    OLED12864_I2C.rect(
    31,
    18,
    32,
    19,
    1
    )
    OLED12864_I2C.rect(
    31,
    40,
    32,
    41,
    1
    )
    OLED12864_I2C.rect(
    29,
    20,
    30,
    21,
    1
    )
    OLED12864_I2C.rect(
    29,
    38,
    30,
    39,
    1
    )
})
