// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTile":
            case "level1":return tiles.createTilemap(hex`1500150002030303030303030303030303030303030303030401000000000000000000000000000000000000000101000203030303030304000903030303030304000101000100000000000001000000000000000001000101000100020303080001000700090303040001000101000100010000000001000100000000010001000101000100010000070001000100070000010001000101000100060303050001000100060303050001000101000100000000000001000100000000000001000101000a0009030303030500060303030303030500010100000000000000000000000000000000000000010100020303030303030400020303030308000700010100010000000000000100010000000000000100010100010002030308000100010009030304000100010100010001000000000100010000000001000100010100010001000007000100010007000001000100010100010006030305000a0001000603030500010001010001000000000000000001000000000000010001010006030303030303080006030303030303050001010000000000000000000000000000000000000001060303030303030303030303030303030303030305`, img`
222222222222222222222
2...................2
2.22222222.22222222.2
2.2......2........2.2
2.2.2222.2.2.2222.2.2
2.2.2....2.2....2.2.2
2.2.2..2.2.2.2..2.2.2
2.2.2222.2.2.2222.2.2
2.2......2.2......2.2
2.2.222222.22222222.2
2...................2
2.22222222.222222.2.2
2.2......2.2......2.2
2.2.2222.2.2.2222.2.2
2.2.2....2.2....2.2.2
2.2.2..2.2.2.2..2.2.2
2.2.2222.2.2.2222.2.2
2.2........2......2.2
2.22222222.22222222.2
2...................2
222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "topLeftCorner":
            case "tile2":return tile2;
            case "rightTopCorner":
            case "tile6":return tile6;
            case "bottomRightCorner":
            case "tile7":return tile7;
            case "bottomLeftCorner":
            case "tile8":return tile8;
            case "horizontalLines1":
            case "tile3":return tile3;
            case "verticalLines0":
            case "tile1":return tile1;
            case "verticalLineLeft0":
            case "tile4":return tile4;
            case "verticalLineRight":
            case "tile5":return tile5;
            case "horizontalLineTop":
            case "tile9":return tile9;
            case "horizontalLineBottom":
            case "tile10":return tile10;
            case "topRoundWall0":
            case "tile11":return tile11;
            case "rightRoundWall0":
            case "tile12":return tile12;
            case "leftRoundWall0":
            case "tile13":return tile13;
            case "bottomRoundWall":
            case "tile14":return tile14;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
