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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let pacEnemy: Sprite = null
let pacFood: Sprite = null
let mySprite: Sprite = null
let myScore = 0
let maxScore = 100
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`myTile`)
mySprite = sprites.create(assets.image`PacWomanRight`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
controller.moveSprite(mySprite, 50, 50)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < maxScore; index++) {
    pacFood = sprites.create(assets.image`pacFood`, SpriteKind.Food)
    tiles.placeOnRandomTile(pacFood, assets.tile`transparency16`)
}
for (let index = 0; index < 5; index++) {
    pacEnemy = sprites.create(assets.image`PacEnemy`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(pacEnemy, assets.tile`transparency16`)
    pacEnemy.follow(mySprite, 50)
}
game.onUpdate(function () {
    if (info.score() == maxScore) {
        game.over(true)
    }
})
