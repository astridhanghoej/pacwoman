namespace SpriteKind {
    export const Score = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`PacWomanLeft`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`PacWomanRight`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.spray, 500)
})
let pacFood: Sprite = null
let mySprite: Sprite = null
let myScore = 0
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`myTile`)
mySprite = sprites.create(assets.image`PacWomanRight`, SpriteKind.Player)
mySprite.setPosition(28, 26)
controller.moveSprite(mySprite, 50, 50)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 100; index++) {
    pacFood = sprites.create(assets.image`pacFood`, SpriteKind.Food)
    tiles.placeOnRandomTile(pacFood, assets.tile`transparency16`)
}
