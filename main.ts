namespace SpriteKind {
    export const basketball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.basketball, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(5)
})
let mySprite2: Sprite = null
scene.setBackgroundImage(img`
    ddddd111ddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111dddd
    ddddd111ddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddd1111dddd
    ddddd111ddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddd111dddd1d1d1d1d1dddd111dddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddd111dd1d1d1d1d1d1d1dd111dddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddd111dd1d1d1d1d1d1d1dd111dddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddd1111d1ddddddddddd1d1111dddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddd1111ddddddddddddddd1111dddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddd1111ddddddddddddddd1111ddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddd1111ddddddddddddddd1111ddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddd111ddddddddddddddddd111ddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddd11111111111111111111111dddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddd11111111111111111111111ddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddd11111111111111111111111ddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddd111ddddddddddddddddd111ddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddd111ddddddddddddddd111ddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddd111ddddddddddddddd111ddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddd111ddddddddddddd111ddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddd1111ddddddddd1111ddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddd111111111111111ddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddd1111111111111ddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddd111111111dddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddddddd11111dddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddd111111ddddddddddddddddddddddddddddd111111dddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111ddddddddddddddddddddddd1111111dddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddd888ddd88888dddddd8ddddddd88888d88888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddd8888ddd8888888dddd8dddddd888888d888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddd888dddd888d888ddd888dddd888888dd888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd888ddddd888dd88ddd888dddd888ddddd888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd888ddddd888dd88ddd888dddd888ddddd888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd888ddddd888dd88dd88888ddd888ddddd888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd8888dddd888d888dd88888ddd888ddddd888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddd8888ddd8888888dd88888ddd888dddd888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddd8888dd888888dd888d888dd888dddd888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddd8888d888ddddd888d888dd888ddddd888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddd888d888ddddd888d888dd888ddddd888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddd888d888ddddd888d888dd8888dddd888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddd8888d888dddd8888d8888d888888dd888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddd88888dd888dddd8888d8888dd888888d888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddd8888ddd888dddd8888d8888ddd88888d888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddd4444444444444444444444444444444444444444444444ddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddd444444444444444444555555555555555544444444444444444dddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddd4444445555555555555544444444444444445555555555555444444dddddddddddddddddddddddddddddddddddddddddddd111ddddd
    1111111111111111111111111111111111111111111111111111444445544444444444444444444444444444444444444444445444444111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111444455444444444444444455555555555555444444444444444554444111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111114444554444455555555555544444444444444555555555555444455444111111111111111111111111111111111111111111111111111
    ddddd111ddddddddddddddddddddddddddddddddddddddddddd44445444455444444444444448d8888ddd844444444444445554445444ddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddd4445444455444d8888ddd8888d8888ddd888dddddd888d44454445444ddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddd44455444455ddd8888ddd8888d8888ddd888ddddd8888ddd454445444ddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddd444455544454dd8888ddd8888d8888ddd8888dddd8888dd454445544dddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddd444445554454d8888dd88888d88888dd88888dd88888d455445544ddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddd444455444d8888dd88888d88888dd88888dd88888d4444554ddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888dd8888ddd8888dd888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888dd8888ddd8888dd888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888dd8888ddd8888dd888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888d88888ddd88888d888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddd8888ddd8888d88888ddd88888d888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd88888ddd8888d88888ddd88888d888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd8888dddd8888d8888888888888d888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd8888dddd8888d8888888888888d8888d888d888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd8888ddd88888d8888888888888d8888d888d888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888dddd888888888d888d888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888dddd888888888d888d888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888dddd888888888dd8dd888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888dddd888888888ddddd888ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddd4dddddd4dd4d444d4ddd4ddddd4ddd444d4444dd4dd444d4ddd4dddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddd4d4ddddd44d4d4ddd4ddd4ddddd4ddd4ddd4dddd4d4d4dddd4d4ddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddd444ddddd4d44d44dd4ddd4ddddd4ddd44dd4d44d444d4ddddd4dddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddd4d4ddddd4d44d4ddd4d4d4ddddd4ddd4ddd4dd4d4d4d4ddddd4dddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddd4d4ddddd4dd4d444d44d44ddddd444d444d4444d4d4d444ddd4dddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111ddddddddddddddddddddd11111111ddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111ddddddddddddddddddddddddd1111111dddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddd111111ddddddddddddddddddddddddddddddd111111dddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddddd111111ddddddddddddddddddddddddddddddddd111111ddddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddddd11111dddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddddd11111ddddddddddddddd111111111ddddddddddddddd11111ddddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddddd11111dddddddddddddd1111111111111dddddddddddddd11111dddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddd111111111111111ddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddd1111ddddddddd1111ddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddd11111dddddddddddddd111ddddddddddddd111dddddddddddddd11111ddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddd111ddddddddddddddd111dddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddd111ddddddddddddddd111ddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddd111ddddddddddddddddd111ddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddd111ddddddddddddddddd111ddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddd111ddddddddddddddddd111dddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddd11111111111111111111111ddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddd11111111111111111111111ddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddd111ddddddddddddddddd111ddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111ddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddd1111ddddddddddddddd1111ddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddddd1111ddddddddddddddd1111ddddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddd1111ddddddddddddddd1111dddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddd1111d1ddddddddddd1d1111dddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddd111dd1d1d1d1d1d1d1dd111dddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddd111dd1d1d1d1d1d1d1dd111dddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddd111dddd1d1d1d1d1dddd111dddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddd
    ddddd111dddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddd111ddddddddddddddddd111dddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddd
    `)
let mySprite = sprites.create(img`
    ...................
    ......fffffff......
    .....ffeeeeeff.....
    .....feffeffef.....
    ....fee1fef1eef....
    ....fee1fef1eef....
    ....ffeeeeeeeff....
    .....ffeeeeeff.....
    .....fffffffff.....
    .....fffffffff.....
    .......feeef.......
    ....fffffffffff....
    ...ff666666666ff...
    ..fef666666666fef..
    .feef668888844feef.
    .feef666666444feef.
    .f88f668888844feef.
    .f88f666644444feef.
    .f88f666444444feef.
    .f88f666444444feef.
    .f88f666444444feef.
    .f88f222222222feef.
    .feefffffffffffeef.
    .feef666644444feef.
    ..fff666666444fff..
    ....f6666f6666f....
    ....f6666f6666f....
    ....f2222f2222f....
    ....fffffffffff....
    .....feef.feef.....
    ...ffffff.ffffff...
    ..f22222f.f22222f..
    ..f22222f.f22222f..
    ..fffffff.fffffff..
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . f f f f f f f . . . . . 
    . . . f f 1 1 1 1 f 1 1 f f . . . 
    . . f 1 1 1 b b 2 f 7 7 6 6 f . . 
    . f f f f f f 2 4 f f f f f f f . 
    . f 2 2 2 2 f f f f f 5 5 4 7 f . 
    f 4 5 2 2 f f f f 7 7 f 4 4 7 8 f 
    f 7 4 5 f f 6 6 f 7 6 6 f 7 8 8 f 
    f 7 4 f 6 6 6 b f f 6 b 2 f f 8 f 
    f f f f f b b b 2 f b b 2 e e f c 
    f 2 f 5 f f 2 2 2 f f 2 e e e c f 
    f f f 4 4 f 5 5 4 4 f 2 e e c c f 
    f f 7 7 4 f f 7 7 8 f e e c c c f 
    . f 6 7 7 c f 8 8 8 f e c c c f . 
    . f 6 6 c e f 8 8 8 c f c c c f . 
    . . f c e e f 8 c c c f c c f . . 
    . . . f f e f f c c c f f f . . . 
    . . . . . f f f f f f f . . . . . 
    `, SpriteKind.basketball)
