window.onerror = function (msg, url, lineNo, columnNo, error) {
  var string = msg.toLowerCase();
  var substring = "script error";
  if (string.indexOf(substring) > -1){
    alert('Script Error: See Browser Console for Detail');
  } else {
    var message = [
      'Message: ' + msg,
      'URL: ' + url,
      'Line: ' + lineNo,
      'Column: ' + columnNo,
      'Error object: ' + JSON.stringify(error)
    ].join(' - ');

    alert(message);
  }

  return false;
};

consts = {
    // These match the IDs in vars.tiles.dark around L1406
    GRASS: 1,
    GROUND: 2,
    SKY: 6,
    SIGN: 7
};

BeginningJS.config.flags.useQTrees = false // Not working at the moment
Game = BeginningJS.init({
    "game": {
        "assets": {
            "imgs": [
                // Tiles
                {
                    "id": "Tile_1",
                    "src": "assets/imgs/tiles/light/Tile_1.png"
                },
                {
                    "id": "Tile_2",
                    "src": "assets/imgs/tiles/light/Tile_2.png"
                },
                {
                    "id": "Tile_3",
                    "src": "assets/imgs/tiles/light/Tile_3.png"
                },
                {
                    "id": "Tile_4",
                    "src": "assets/imgs/tiles/light/Tile_4.png"
                },
                {
                    "id": "Tile_5",
                    "src": "assets/imgs/tiles/light/Tile_5.png"
                },
                {
                    "id": "Tile_6",
                    "src": "assets/imgs/tiles/light/Tile_6.png"
                },
                {
                    "id": "Tile_Dark_Sky",
                    "src": "assets/imgs/tiles/dark/Sky.png"
                },
                {
                    "id": "Tile_Dark_Tile",
                    "src": "assets/imgs/tiles/dark/Tile.png"
                },
                {
                    "id": "Tile_Dark_Grass",
                    "src": "assets/imgs/tiles/dark/Grass.png"
                },
                {
                    "id": "Tile_Dark_Sign",
                    "src": "assets/imgs/tiles/dark/Sign.png"
                },

                // Ninja misc
                {
                    "id": "Ninja_Idle",
                    "src": "assets/imgs/ninja/ninja.png"
                },
                {
                    "id": "Ninja_Cling",
                    "src": "assets/imgs/ninja/cling.png"
                },

                // Take out
                {
                    "id": "Ninja_Takeout_0",
                    "src": "assets/imgs/ninja/take_out/takeout_0.png"
                },
                {
                    "id": "Ninja_Takeout_1",
                    "src": "assets/imgs/ninja/take_out/takeout_1.png"
                },
                {
                    "id": "Ninja_Takeout_2",
                    "src": "assets/imgs/ninja/take_out/takeout_2.png"
                },
                {
                    "id": "Ninja_Takeout_3",
                    "src": "assets/imgs/ninja/take_out/takeout_3.png"
                },
                {
                    "id": "Ninja_Takeout_4",
                    "src": "assets/imgs/ninja/take_out/takeout_4.png"
                },
                {
                    "id": "Ninja_Takeout_5",
                    "src": "assets/imgs/ninja/take_out/takeout_5.png"
                },
                {
                    "id": "Ninja_Takeout_6",
                    "src": "assets/imgs/ninja/take_out/takeout_5.png"
                },
                {
                    "id": "Ninja_Takeout_7",
                    "src": "assets/imgs/ninja/take_out/takeout_7.png"
                },
                {
                    "id": "Ninja_Takeout_8",
                    "src": "assets/imgs/ninja/take_out/takeout_8.png"
                },

                // Put away

                {
                    "id": "Ninja_Putaway_0",
                    "src": "assets/imgs/ninja/put_away/putaway_0.png"
                },
                {
                    "id": "Ninja_Putaway_1",
                    "src": "assets/imgs/ninja/put_away/putaway_1.png"
                },
                {
                    "id": "Ninja_Putaway_2",
                    "src": "assets/imgs/ninja/put_away/putaway_2.png"
                },
                {
                    "id": "Ninja_Putaway_3",
                    "src": "assets/imgs/ninja/put_away/putaway_3.png"
                },
                {
                    "id": "Ninja_Putaway_4",
                    "src": "assets/imgs/ninja/put_away/putaway_4.png"
                },
                {
                    "id": "Ninja_Putaway_5",
                    "src": "assets/imgs/ninja/put_away/putaway_5.png"
                },
                {
                    "id": "Ninja_Putaway_6",
                    "src": "assets/imgs/ninja/put_away/putaway_6.png"
                },
                {
                    "id": "Ninja_Putaway_7",
                    "src": "assets/imgs/ninja/put_away/putaway_7.png"
                },
                {
                    "id": "Ninja_Putaway_8",
                    "src": "assets/imgs/ninja/put_away/putaway_8.png"
                },

                // Walk

                {
                    "id": "Ninja_Walk_0",
                    "src": "assets/imgs/ninja/walk/walk_0.png"
                },
                {
                    "id": "Ninja_Walk_1",
                    "src": "assets/imgs/ninja/walk/walk_1.png"
                },
                {
                    "id": "Ninja_Walk_2",
                    "src": "assets/imgs/ninja/walk/walk_2.png"
                },
                {
                    "id": "Ninja_Walk_3",
                    "src": "assets/imgs/ninja/walk/walk_3.png"
                },
                {
                    "id": "Ninja_Walk_4",
                    "src": "assets/imgs/ninja/walk/walk_4.png"
                },
                {
                    "id": "Ninja_Walk_5",
                    "src": "assets/imgs/ninja/walk/walk_5.png"
                },
                {
                    "id": "Ninja_Walk_6",
                    "src": "assets/imgs/ninja/walk/walk_6.png"
                },
                {
                    "id": "Ninja_Walk_7",
                    "src": "assets/imgs/ninja/walk/walk_7.png"
                },
                {
                    "id": "Ninja_Walk_8",
                    "src": "assets/imgs/ninja/walk/walk_8.png"
                },

                // Duck

                {
                    "id": "Ninja_Duck_0",
                    "src": "assets/imgs/ninja/duck/duck_0.png"
                },
                {
                    "id": "Ninja_Duck_1",
                    "src": "assets/imgs/ninja/duck/duck_1.png"
                },
                {
                    "id": "Ninja_Duck_2",
                    "src": "assets/imgs/ninja/duck/duck_2.png"
                },
                {
                    "id": "Ninja_Duck_3",
                    "src": "assets/imgs/ninja/duck/duck_3.png"
                },
                {
                    "id": "Ninja_Duck_4",
                    "src": "assets/imgs/ninja/duck/duck_4.png"
                },
                {
                    "id": "Ninja_Duck_5",
                    "src": "assets/imgs/ninja/duck/duck_5.png"
                },
                {
                    "id": "Ninja_Duck_6",
                    "src": "assets/imgs/ninja/duck/duck_6.png"
                },
                {
                    "id": "Ninja_Duck_7",
                    "src": "assets/imgs/ninja/duck/duck_7.png"
                },
                {
                    "id": "Ninja_Duck_8",
                    "src": "assets/imgs/ninja/duck/duck_8.png"
                },

                // Crawl

                {
                    "id": "Ninja_Crawl_0",
                    "src": "assets/imgs/ninja/crawl/crawl_0.png"
                },
                {
                    "id": "Ninja_Crawl_1",
                    "src": "assets/imgs/ninja/crawl/crawl_1.png"
                },
                {
                    "id": "Ninja_Crawl_2",
                    "src": "assets/imgs/ninja/crawl/crawl_2.png"
                },
                {
                    "id": "Ninja_Crawl_3",
                    "src": "assets/imgs/ninja/crawl/crawl_3.png"
                }
            ],
            "snds": [
                {
                    "id": "Main_Music",
                    "src": "assets/snds/music.mp3"
                },
                {
                    "id": "Woosh",
                    "src": "assets/snds/woosh.mp3"
                },
                {
                    "id": "Boing",
                    "src": "assets/snds/boing.mp3"
                },
                {
                    "id": "Hurt",
                    "src": "assets/snds/hurt.mp3"
                },
                {
                    "id": "Jump",
                    "src": "assets/snds/jump.mp3"
                },
                {
                    "id": "Footsteps_Concrete",
                    "src": "assets/snds/footstep_concrete.mp3"
                },
                {
                    "id": "Footsteps_Wood",
                    "src": "assets/snds/footstep_wood.mp3"
                }
            ]
        },
        "sprites": [
            {
                "id": "Tiles",
                "x": 400,
                "y": 225,
                "width": 800,
                "height": 450,
                "clones": {
                    "scripts": {
                        "init": [
                            function(gameRef, me) {
                                me.x = me.vars.x - Game.vars.camera.x
                                me.y = me.vars.y - Game.vars.camera.y

                                me.vars.tiles = []
                                me.vars.tilesRendered = false
                                me.vars.done = false

                                me.ctx.imageSmoothingEnabled = false
                            }
                        ],
                        "main": [
                            function(gameRef, me) {
                                me.x = Math.round(me.vars.x - Game.vars.camera.x)
                                me.y = Math.round(me.vars.y - Game.vars.camera.y)

                                if (me.vars.tilesRendered && me.vars.tiles.length == 0) {
                                    me.vars.done = true
                                }
                                else {
                                    var i = 0
                                    for (i in me.vars.tiles) {
                                        var tile = me.vars.tiles[i]

                                        tileTexture = Game.vars.tiles.dark[tile.tileID]


                                        me.ctx.drawImage(BeginningJS.methods.get.image(tileTexture), tile.x, tile.y, tile.width, tile.height)
                                    }
                                    me.vars.tiles = []
                                }
                            }
                        ]
                    }
                },
                "vars": {
                    "world": {
                        // Co-ords: x: -25 to 50? y: -14 to 41?
                        "-25,-14": { // Sky
                            "width": 75,
                            "height": 24,
                            "tile": consts.SKY,
                            "layer": 0
                        },
                        "-25,10": { // Grass
                            "width": 75,
                            "height": 1,
                            "tile": consts.GRASS,
                            "layer": 0
                        },
                        "-25,11": { // Ground
                            "width": 125,
                            "height": 3,
                            "tile": consts.GROUND,
                            "layer": 0
                        },
                        "-25,14": {
                            "width": 75,
                            "height": 41,
                            "tile": 3,
                            "layer": 0
                        },
                        "-10,8": {
                            "width": 20,
                            "height": 1,
                            "tile": 3,
                            "layer": 0
                        },
                        "-1,-4": {
                            "width": 1,
                            "height": 10,
                            "tile": 3,
                            "layer": 0
                        },
                        "2,-4": {
                            "width": 1,
                            "height": 10,
                            "tile": 3,
                            "layer": 0
                        },
                        "2,-5": {
                            "width": 5,
                            "height": 1,
                            "tile": 3,
                            "layer": 0
                        },
                        "-10,-5": {
                            "width": 10,
                            "height": 1,
                            "tile": 3,
                            "layer": 0
                        },
                        "12,10": {
                            "width": 1,
                            "height": 1,
                            "tile": 7,
                            "layer": 0
                        },
                        "20,10": {
                            "width": 1,
                            "height": 1,
                            "tile": 3,
                            "layer": 0
                        },
                        "23,9": {
                            "width": 1,
                            "height": 2,
                            "tile": 3,
                            "layer": 0
                        },
                        "26,8": {
                            "width": 1,
                            "height": 3,
                            "tile": 3,
                            "layer": 0
                        },
                        "29,6": {
                            "width": 1,
                            "height": 5,
                            "tile": 3,
                            "layer": 0
                        },
                        "32,4": {
                            "width": 1,
                            "height": 7,
                            "tile": 3,
                            "layer": 0
                        },
                        "35,1": {
                            "width": 1,
                            "height": 10,
                            "tile": 3,
                            "layer": 0
                        },
                        "38,1": {
                            "width": 1,
                            "height": 8,
                            "tile": 3,
                            "layer": 0
                        }
                    },
                    "scale": 25
                },
                "scripts": {
                    "init": [
                        {
                            "code": function(gameRef, me) {
                                // Play the main music
                                BeginningJS.methods.get.audio("Main_Music").loop = true
                                BeginningJS.methods.playSound("Main_Music") // TODO

                                me.width = Game.width / me.vars.scale
                                //me.width = 1
                                //me.height = Game.height / me.vars.scale
                                me.height = me.width

                                me.x = me.width / 2
                                me.y = me.height / 2
                                me.visible = false

                                me.vars.rendered = {}
                                me.vars.layerCanvases = {}

                                me.vars.render = function() {
                                    var i = 0
                                    for (i in me.vars.world) {
                                        var rectangle = me.vars.world[i]

                                        var startX = i.split(",")[0]
                                        var startY = i.split(",")[1]

                                        var y = startY
                                        while (y - startY < rectangle.height) {
                                            var x = startX
                                            while (x - startX < rectangle.width) {
                                                me.vars.rendered[[x, y].toString()] = {
                                                    "tile": rectangle.tile,
                                                    "layer": rectangle.layer
                                                }
                                                x++
                                            }
                                            y++
                                        }
                                    }
                                }
                                me.vars.render()

                                me.vars.chunksRendered = {}

                                //me.vars.calculateTileY = function(y, times) {
                                    //return y + ((Math.floor(Game.width / me.height) + Math.floor((Game.width / me.height) * (y / (Game.width / me.height)))) * times)
                                //}

                                me.vars.renderChunk = function(rectangle) {
                                    var y = rectangle.y
                                    while ((y - 0.5) * me.height < ((rectangle.y * me.height) + rectangle.height)) {
                                        var x = rectangle.x
                                        while ((x + 0.5) * me.width < ((rectangle.x * me.width) + rectangle.width)) {
                                            var tile = me.vars.rendered[[x, y].toString()]

                                            if (me.vars.rendered[[x, y].toString()] == null) {
                                                x++
                                                continue
                                            }

                                            var partX = Math.floor(((x + 0.5) * me.width) / Game.width)
                                            var partY = Math.floor(((y + 0.5) * me.height) / Game.height)

                                            if (! me.vars.layerCanvases.hasOwnProperty([partX, partY].toString())) {
                                                if (me.vars.layerCanvases[[partX, partY].toString()] == null) {
                                                    me.vars.layerCanvases[[partX, partY].toString()] = {}
                                                }
                                            }
                                            if (me.vars.layerCanvases[[partX, partY].toString()][tile.layer] == null) {
                                                var layer = me.clone({
                                                    "visible": true,
                                                    "vars": {
                                                        "x": (partX * Game.width) + (Game.width / 2),
                                                        "y": (partY * ((Game.height - (Game.height % me.height))) + ((Game.height - (Game.height % me.height)) / 2))
                                                    },
                                                    "width": 800,
                                                    "height": 450
                                                })

                                                if (me.vars.layerCanvases[[partX, partY].toString()] == null) {
                                                    me.vars.layerCanvases[[partX, partY].toString()] = {}
                                                }
                                                me.vars.layerCanvases[[partX, partY].toString()][tile.layer] = layer
                                            }

                                            var layer = me.vars.layerCanvases[[partX, partY].toString()][tile.layer]
                                            // ((rectangle.y / (rectangle.height / me.height)) * rectangle.height)
                                            if (partY == -1 && partX == 0) {
                                                //console.log(x, y)
                                            }
                                            layer.vars.tiles[layer.vars.tiles.length] = {
                                                // (x * me.width) % Game.width
                                                // (y * me.height) % Game.height
                                                // (y * me.height) - ((rectangle.y / (Math.floor(Game.height / me.height) * me.height)) * rectangle.height)
                                                "x": (x * me.width) - ((rectangle.x / (Game.width / me.width)) * rectangle.width),
                                                "y": (y * me.height) - ((rectangle.height - (rectangle.height % me.width)) * partY),
                                                "width": me.width,
                                                "height": me.height,
                                                "tileID": tile.tile
                                            }

                                            layer.vars.tilesRendered = true
                                            x++
                                        }
                                        y++
                                    }
                                }

                                me.vars.loadArea = function(offsetX, offsetY) {
                                    for (y of [Math.floor(offsetY - (Game.height / me.height)), offsetY, Math.floor(offsetY + (Game.height / me.height))]) {
                                        for (x of [offsetX - (Game.width / me.width), offsetX, offsetX + (Game.width / me.width)]) {
                                            var chunkX = x / (Game.width / me.width)
                                            var chunkY = y / (Game.height / me.height)

                                            if (! me.vars.chunksRendered[[chunkX, chunkY].toString()]) {
                                                me.vars.renderChunk({
                                                    "x": x,
                                                    "y": y,
                                                    "width": Game.width,
                                                    "height": Game.height
                                                })
                                                me.vars.chunksRendered[[chunkX, chunkY].toString()] = true
                                            }
                                        }
                                    }
                                }
                                me.vars.loadArea(0, 0)

                                Game.methods.gui.create.controls.joystick({
                                    "id": "Controller"
                                })
                            },
                            "stateToRun": "game"
                        }
                    ],
                    "main": [
                        {
                            "code": function(gameRef, me) {

                            },
                            "stateToRun": "game"
                        }
                    ]
                },
                "type": "canvas"
            }, // Tiles
            {
                "id": "Ninja",
                "img": "Ninja_Idle",
                "x": 400,
                "y": 225,
                "scale": 3,
                "scripts": {
                    "init": [
                        {
                            "code": function(gameRef, me) {
                                me.vars.reset = function(resetCamera) {
                                    me.vars.x = 12
                                    me.vars.y = 9
                                    me.vars.vel = {
                                        "x": 0,
                                        "y": 0
                                    }
                                    me.vars.clinging = false
                                    me.vars.sliding = false
                                    me.vars.clingingReady = false
                                    me.vars.clingDir = 0
                                    me.vars.jump = false
                                    me.vars.jumpTime = 0
                                    me.vars.jumpDir = 0
                                    me.vars.walkFrame = 0
                                    me.vars.duckFrame = -1
                                    me.vars.duckDir = 0
                                    me.vars.duckTick = 0
                                    me.vars.wallJumpPause = false
                                    me.vars.climbing = false
                                    me.vars.climbingDir = 0
                                    me.vars.climbYWas = 0
                                    me.vars.crawlFrame = 0

                                    if (resetCamera) {
                                        Game.vars.camera.x = 0
                                        Game.vars.camera.y = 500
                                    }
                                }
                                me.vars.reset(true)

                                me.x = ((me.vars.x + 0.5) * BeginningJS.methods.get.sprite("Tiles").width) - Game.vars.camera.x
                                me.y = ((me.vars.y + 0.5) * BeginningJS.methods.get.sprite("Tiles").height) - Game.vars.camera.y

                                me.vars.isOnGround = function() {
                                    var tiles = BeginningJS.methods.get.sprite("Tiles").vars.rendered

                                    var xTile = Math.round(me.vars.x - 0.5)
                                    var yTile = Math.round(((me.vars.y * BeginningJS.methods.get.sprite("Tiles").height) + ((me.height / 2) + 1)) / BeginningJS.methods.get.sprite("Tiles").height)

                                    var tile = tiles[[xTile, yTile].toString()]
                                    if (tile != null) {
                                        if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                            return true
                                        }
                                    }
                                    var xTile = Math.round(me.vars.x + 0.5)

                                    var tile = tiles[[xTile, yTile].toString()]
                                    if (tile != null) {
                                        if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                            return true
                                        }
                                    }
                                    return false
                                }

                                me.vars.physics = function() {
                                    var tiles = BeginningJS.methods.get.sprite("Tiles").vars.rendered

                                    me.vars.onGround = me.vars.isOnGround()

                                    if (! me.vars.clinging) {
                                        if (me.vars.onGround) {
                                            while (me.vars.onGround) {
                                                me.vars.onGround = me.vars.isOnGround()
                                                me.vars.y -= 1 / BeginningJS.methods.get.sprite("Tiles").height
                                            }
                                            while (! me.vars.onGround) {
                                                me.vars.onGround = me.vars.isOnGround()
                                                me.vars.y += 1 / BeginningJS.methods.get.sprite("Tiles").height
                                            }
                                            if (me.vars.vel.y > 0) {
                                                me.vars.vel.y = 0
                                            }
                                        }
                                        else {
                                            me.vars.vel.y += 0.4
                                        }
                                    }
                                    var xWas = me.vars.x
                                    var yWas = me.vars.y

                                    me.vars.x += (me.vars.vel.x / 10)
                                    me.vars.y += (me.vars.vel.y / 10)

                                    var canMove = true
                                    var cling = false
                                    var sliding = false

                                    var xTile = Math.round(me.vars.x - 0.6)
                                    var yTile = Math.round(me.vars.y + 0.5)

                                    var tile = tiles[[xTile, yTile].toString()]
                                    if (tile != null) {
                                        if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                            canMove = false
                                        }
                                    }
                                    var tile = tiles[[xTile, yTile - 1].toString()]
                                    if (tile != null) {
                                        if (! (Game.vars.tiles.transparent.includes(tile.tile))) {
                                            canMove = false
                                        }
                                    }

                                    var xTile = Math.round(me.vars.x + 0.6)

                                    var tile = tiles[[xTile, yTile].toString()]
                                    if (tile != null) {
                                        if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                            canMove = false
                                        }
                                    }
                                    var tile = tiles[[xTile, yTile - 1].toString()]
                                    if (tile != null) {
                                        if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                            canMove = false
                                        }
                                    }


                                    var xTile = Math.round(me.vars.x - 0.6)
                                    var yTile = Math.round(me.vars.y)
                                    var tile = tiles[[xTile, yTile].toString()]

                                    if (me.vars.vel.x < 0) {
                                        if (tile != null) {
                                            if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                                cling = true
                                            }
                                        }
                                        var tile = tiles[[xTile, yTile - 1].toString()]

                                        if (tile != null) {
                                            if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                                sliding = true
                                            }
                                        }
                                    }

                                    var xTile = Math.round(me.vars.x + 0.6)
                                    var tile = tiles[[xTile, yTile].toString()]

                                    if (Math.abs(me.vars.vel.x) > 0) {
                                        if (tile != null) {
                                            if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                                cling = true
                                            }
                                        }
                                        var tile = tiles[[xTile, yTile - 1].toString()]

                                        if (tile != null) {
                                            if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                                sliding = true
                                            }
                                        }
                                    }



                                    if (! canMove) {
                                        me.vars.x = xWas
                                        me.vars.vel.x = 0
                                    }

                                    if (me.vars.vel.y < 0) {
                                        var canMove = true

                                        var xTile = Math.round(me.vars.x - 0.5)
                                        var yTile = Math.round(me.vars.y - 0.5)

                                        var tile = tiles[[xTile, yTile].toString()]
                                        if (tile != null) {
                                            if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                                canMove = false
                                            }
                                        }
                                        if (! canMove) {
                                            me.vars.y = yWas
                                            me.vars.vel.y = 0
                                        }

                                        var xTile = Math.round(me.vars.x + 0.5)

                                        var tile = tiles[[xTile, yTile].toString()]
                                        if (tile != null) {
                                            if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                                canMove = false
                                            }
                                        }
                                        if (! canMove) {
                                            me.vars.y = yWas
                                            me.vars.vel.y = 0
                                        }
                                    }

                                    if (me.vars.vel.y > 0) { // Falling
                                        if (cling) {
                                            var direction = 1
                                            if (me.width < 0) {
                                                direction = -1
                                            }
                                            me.switch("Ninja_Cling")
                                            me.setScale(3)
                                            me.width *= direction
                                            me.vars.clinging = true
                                            me.vars.jump = false
                                            me.vars.wallJumpPause = true
                                            me.vars.clingingReady = false
                                            if (me.width > 0) {
                                                me.vars.clingDir = 1
                                            }
                                            else {
                                                me.vars.clingDir = -1
                                            }
                                            me.vars.climbYWas = me.vars.y
                                            me.vars.sliding = sliding

                                            me.vars.vel.x = 0
                                            if (! me.vars.sliding) {
                                                me.vars.vel.y = 0
                                            }
                                        }
                                    }

                                    if (me.vars.onGround) {
                                        me.vars.vel.x *= 0.9
                                    }
                                    else {
                                        me.vars.vel.x *= 0.95
                                    }
                                    me.vars.vel.y *= 0.93

                                }

                                me.vars.controls = function() {
                                    var tiles = BeginningJS.methods.get.sprite("Tiles").vars.rendered

                                    var inputs = {}
                                    if (Game.input.joysticks.Controller.includes("left")) {
                                        inputs.left = true
                                    }
                                    if (Game.input.joysticks.Controller.includes("~left")) {
                                        inputs.leftSmall = true
                                    }
                                    if (Game.input.joysticks.Controller.includes("right")) {
                                        inputs.right = true
                                    }
                                    if (Game.input.joysticks.Controller.includes("~right")) {
                                        inputs.rightSmall = true
                                    }
                                    if (Game.input.joysticks.Controller.includes("up")) {
                                        inputs.up = true
                                    }
                                    if (Game.input.joysticks.Controller.includes("~up")) {
                                        inputs.upSmall = true
                                    }
                                    if (Game.input.joysticks.Controller.includes("down")) {
                                        inputs.down = true
                                    }
                                    if (Game.input.joysticks.Controller.includes("~down")) {
                                        inputs.downSmall = true
                                    }

                                    if (Game.input.keys.isDown(Game.input.lookup.a)) {
                                        inputs.left = true
                                    }
                                    if (Game.input.keys.isDown(Game.input.lookup.d)) {
                                        inputs.right = true
                                    }
                                    if (Game.input.keys.isDown(Game.input.lookup.w)) {
                                        inputs.up = true
                                    }
                                    if (Game.input.keys.isDown(Game.input.lookup.s)) {
                                        inputs.down = true
                                    }

                                    if (me.vars.clinging) {
                                        if (me.vars.climbing) {
                                            if (Math.ceil(me.vars.y - 0.5) - Math.ceil(me.vars.climbYWas - 0.5) < -1) {
                                                if (me.vars.clingDir > 0) {
                                                    var xTile = Math.round(me.vars.x - 0.6)
                                                }
                                                else {
                                                    var xTile = Math.round(me.vars.x + 0.6)
                                                }
                                                var yTile = Math.floor(me.vars.y)
                                                var tile = tiles[[xTile, yTile + 1].toString()]

                                                if (tile == null) {
                                                    var rise = false
                                                }
                                                else {
                                                    if (Game.vars.tiles.transparent.includes(tile.tile)) {
                                                        var rise = false
                                                    }
                                                    else {
                                                        var rise = true
                                                    }
                                                }
                                            }
                                            else {
                                                var rise = true
                                            }
                                            if (rise) {
                                                me.vars.vel.y -= 0.6
                                                var xTile = Math.round(me.vars.x)
                                                var yTile = Math.floor(me.vars.y)

                                                var tile = tiles[[xTile, yTile + 1].toString()]
                                            }
                                            else {
                                                if (me.vars.clingDir > 0) {
                                                    me.vars.vel.x += 0.2
                                                }
                                                else {
                                                    me.vars.vel.x -= 0.1
                                                }
                                            }
                                            if (tile == null) {
                                                me.vars.vel.y += 0.4
                                            }
                                            else {
                                                if (Game.vars.tiles.transparent.includes(tile.tile)) {
                                                    me.vars.vel.y += 0.4
                                                }
                                            }

                                            var xTile = Math.round(me.vars.x)
                                            var yTile = Math.ceil(me.vars.y)

                                            var tile = tiles[[xTile, yTile + 1].toString()]
                                            if (tile != null) {
                                                if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                                    me.vars.climbing = false
                                                    me.vars.climbingDir = 0
                                                    me.vars.climbYWas = 0
                                                    me.vars.clinging = false
                                                    me.vars.sliding = false

                                                    var direction = 1
                                                    if (me.width < 0) {
                                                        direction = -1
                                                    }
                                                    me.switch("Ninja_Idle")
                                                    me.setScale(3)
                                                    me.width *= direction
                                                }
                                            }
                                        }
                                        else {
                                            if (me.vars.sliding) {
                                                var cling = false

                                                var xTile = Math.round(me.vars.x)
                                                var yTile = Math.round(me.vars.y - 0.5)
                                                if (me.vars.clingDir > 0) {
                                                    var tile = tiles[[xTile + 1, yTile - 1].toString()]
                                                }
                                                else {
                                                    var tile = tiles[[xTile - 1, yTile - 1].toString()]
                                                }

                                                if (tile != null) {
                                                    if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                                        cling = true
                                                    }
                                                }

                                                var xTile = Math.round(me.vars.x - 0.5)
                                                var yTile = Math.round(me.vars.y)
                                                var tile = tiles[[xTile, yTile + 1].toString()]
                                                if (tile != null) {
                                                    if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                                        cling = false
                                                    }
                                                }
                                                var xTile = Math.round(me.vars.x + 0.5)
                                                var tile = tiles[[xTile, yTile + 1].toString()]
                                                if (tile != null) {
                                                    if (! Game.vars.tiles.transparent.includes(tile.tile)) {
                                                        cling = false
                                                    }
                                                }

                                                if (cling) {
                                                    if (inputs.down) {
                                                        me.vars.vel.y += 0.1
                                                    }
                                                    else {
                                                        me.vars.vel.y += 0.025
                                                    }
                                                }
                                                else {
                                                    me.vars.clinging = false
                                                    var direction = 1
                                                    if (me.width < 0) {
                                                        direction = -1
                                                    }
                                                    me.switch("Ninja_Idle")
                                                    me.setScale(3)
                                                    me.width *= direction
                                                }
                                            }
                                            if (! me.vars.wallJumpPause) {
                                                if (! me.vars.jump) {
                                                    var keyPressed = false
                                                    if (inputs.left && me.width > 0) {
                                                        if (me.vars.clingingReady) {
                                                            me.width = -Math.abs(me.width)
                                                            me.vars.jump = true
                                                            me.vars.jumpDir = -1
                                                            me.vars.jumpTime = 0
                                                        }
                                                        keyPressed = true
                                                    }
                                                    if (inputs.right && me.width < 0) {
                                                        if (me.vars.clingingReady) {
                                                            me.width = Math.abs(me.width)
                                                            me.vars.jump = true
                                                            me.vars.jumpDir = 1
                                                            me.vars.jumpTime = 0
                                                        }
                                                        keyPressed = true
                                                    }
                                                    if (inputs.up) {
                                                        if (me.vars.clingingReady && (! me.vars.sliding)) {
                                                            me.vars.climbing = true
                                                            if (me.width > 0) {
                                                                me.vars.climbingDir = 1
                                                            }
                                                            else {
                                                                me.vars.climbingDir = -1
                                                            }
                                                        }
                                                        keyPressed = true
                                                    }
                                                    if (! keyPressed) {
                                                        me.vars.clingingReady = true
                                                    }
                                                }

                                                if (me.vars.jump) {
                                                    if (me.vars.jumpDir == -1) {
                                                        if (inputs.left && me.vars.jumpTime <= 0.1) {
                                                            me.vars.jumpTime += 1 / 60
                                                        }
                                                        else {
                                                            me.vars.vel.x -= me.vars.jumpTime * 10
                                                            me.vars.vel.y -= me.vars.jumpTime * 50

                                                            me.width = -Math.abs(me.width)
                                                            me.vars.clinging = false
                                                            var direction = 1
                                                            if (me.width < 0) {
                                                                direction = -1
                                                            }
                                                            me.switch("Ninja_Idle")
                                                            me.setScale(3)
                                                            me.width *= direction

                                                            me.vars.jump = false
                                                        }
                                                    }
                                                    else {
                                                        if (me.vars.jumpDir == 1) {
                                                            if (inputs.right && me.vars.jumpTime <= 0.1) {
                                                                me.vars.jumpTime += 1 / 60
                                                            }
                                                            else {
                                                                me.vars.vel.x += me.vars.jumpTime * 10
                                                                me.vars.vel.y -= me.vars.jumpTime * 50

                                                                me.vars.clinging = false
                                                                var direction = 1
                                                                if (me.width < 0) {
                                                                    direction = -1
                                                                }
                                                                me.switch("Ninja_Idle")
                                                                me.setScale(3)
                                                                me.width *= direction

                                                                me.vars.jump = false
                                                            }
                                                        }
                                                        else {
                                                            if (me.vars.jumpDir == 0) {
                                                                if (inputs.up && me.vars.jumpTime <= 0.1) {
                                                                    me.vars.jumpTime += 1 / 60
                                                                }
                                                                else {
                                                                    if (me.width > 0) {
                                                                        me.vars.vel.x += me.vars.jumpTime * 20
                                                                    }
                                                                    else {
                                                                        me.vars.vel.x -= me.vars.jumpTime * 20
                                                                    }
                                                                    me.vars.vel.y -= me.vars.jumpTime * 50

                                                                    me.vars.clinging = false
                                                                    var direction = 1
                                                                    if (me.width < 0) {
                                                                        direction = -1
                                                                    }
                                                                    me.switch("Ninja_Idle")
                                                                    me.setScale(3)
                                                                    me.width *= direction

                                                                    me.vars.jump = false
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }


                                        if (! (inputs.left || inputs.right || inputs.down || inputs.up)) {
                                            me.vars.wallJumpPause = false
                                        }
                                    }
                                    else {
                                        moved = false

                                        if (inputs.left || inputs.leftSmall) {
                                            if (me.vars.duckDir == 0) {
                                                if (inputs.left) {
                                                    if (me.vars.duckFrame > 0) {
                                                        me.vars.vel.x -= 0.05
                                                    }
                                                    else {
                                                        me.vars.vel.x -= 0.2
                                                    }
                                                }
                                                else {
                                                    if (me.vars.duckFrame > 0) {
                                                        me.vars.vel.x -= 0.025
                                                    }
                                                    else {
                                                        me.vars.vel.x -= 0.1
                                                    }
                                                }
                                                moved = true

                                                me.width = -Math.abs(me.width)
                                            }
                                        }
                                        if (inputs.right || inputs.rightSmall) {
                                            if (me.vars.duckDir == 0) {
                                                if (inputs.right) {
                                                    if (me.vars.duckFrame > 0) {
                                                        me.vars.vel.x += 0.05
                                                    }
                                                    else {
                                                        me.vars.vel.x += 0.2
                                                    }
                                                }
                                                else {
                                                    if (me.vars.duckFrame > 0) {
                                                        me.vars.vel.x += 0.025
                                                    }
                                                    else {
                                                        me.vars.vel.x += 0.1
                                                    }
                                                }
                                                moved = true

                                                me.width = Math.abs(me.width)
                                            }
                                        }
                                        if (moved) {
                                            if (me.vars.duckFrame > 0) {
                                                me.vars.crawlFrame += Math.abs(me.vars.vel.x) / 5

                                                if (me.vars.onGround) {
                                                    if ([0, 4, 8].includes(Math.floor(me.vars.crawlFrame))) {
                                                        BeginningJS.methods.playSound("Footsteps_Concrete")
                                                    }
                                                }
                                                if (me.vars.crawlFrame != 0) {
                                                    me.vars.crawlFrame %= 4
                                                }
                                            }
                                            else {
                                                me.vars.walkFrame += Math.abs(me.vars.vel.x) / 10

                                                if (me.vars.onGround) {
                                                    if ([0, 4, 8].includes(Math.floor(me.vars.walkFrame))) {
                                                        BeginningJS.methods.playSound("Footsteps_Concrete")
                                                    }
                                                }
                                                if (me.vars.walkFrame != 0) {
                                                    me.vars.walkFrame %= 9
                                                }
                                            }



                                            var direction = 1
                                            if (me.width < 0) {
                                                direction = -1
                                            }

                                            if (me.vars.duckFrame > 0) {
                                                me.switch("Ninja_Crawl_" + Math.floor(me.vars.crawlFrame))
                                            }
                                            else {
                                                me.switch("Ninja_Walk_" + Math.floor(me.vars.walkFrame))
                                            }
                                            me.setScale(3)
                                            me.width *= direction
                                        }
                                        else {
                                            if (me.vars.walkFrame != 0) {
                                                var direction = 1
                                                if (me.width < 0) {
                                                    direction = -1
                                                }
                                                me.switch("Ninja_Idle")
                                                me.setScale(3)
                                                me.width *= direction

                                                me.vars.walkFrame = 0
                                            }
                                        }

                                        if (me.vars.onGround) {
                                            /*
                                            if (me.vars.jump) {
                                                if (inputs.up && me.vars.jumpTime <= 0.1) {
                                                    me.vars.jumpTime += 1 / 60
                                                }
                                                else {
                                                    me.vars.vel.y -= me.vars.jumpTime * 50
                                                    me.vars.jump = false
                                                }
                                            }
                                            else {
                                                if (inputs.up) {
                                                    BeginningJS.methods.playSound("Jump")
                                                    me.vars.jump = true
                                                    me.vars.jumpTime = 0
                                                }
                                            }
                                            */
                                            if (inputs.up && (! me.vars.jump)) {
                                                BeginningJS.methods.playSound("Jump")
                                                if (Math.abs(me.vars.vel.x) > 2) {
                                                    BeginningJS.methods.playSound("Woosh")
                                                }
                                                me.vars.jump = true
                                                me.vars.vel.y -= 5
                                            }
                                        }
                                        else {
                                            /*
                                            if (me.vars.jumpTime > 0.05) {
                                                if (me.vars.jumpTime <= 0.1) {
                                                    me.vars.jumpTime += 1 / 60
                                                    if (inputs.up) {
                                                        me.vars.vel.y -= 0.5
                                                    }
                                                }
                                            }
                                            */
                                        }
                                        if (! inputs.up) {
                                            me.vars.jump = false
                                        }

                                        if (Math.abs(me.vars.vel.x) < 0.5) {
                                            if (inputs.down || inputs.downSmall) {
                                                if (me.vars.duckDir == 0) {
                                                    BeginningJS.methods.playSound("Woosh")

                                                    me.vars.crawlFrame = 0
                                                    if (me.vars.duckFrame > 0) {
                                                        me.vars.duckFrame = 8
                                                        me.vars.duckDir = -1
                                                    }
                                                    else {
                                                        me.vars.duckFrame = 0
                                                        me.vars.duckDir = 1
                                                    }
                                                }
                                            }
                                        }
                                        if (me.vars.duckDir != 0) {
                                            me.vars.vel.x = 0
                                        }
                                    }
                                    if (me.vars.duckDir != 0) {
                                        me.vars.duckTick--
                                        if (me.vars.duckTick < 0) {
                                            var direction = 1
                                            if (me.width < 0) {
                                                direction = -1
                                            }
                                            if (me.vars.duckFrame <= 0 && me.vars.duckDir < 0) {
                                                me.switch("Ninja_Idle")
                                                me.vars.duckDir = 0
                                            }
                                            else {
                                                me.switch("Ninja_Duck_" + me.vars.duckFrame)
                                            }
                                            me.setScale(3)
                                            me.width *= direction

                                            me.vars.duckFrame += me.vars.duckDir

                                            if (me.vars.duckFrame > 8) {
                                                me.vars.duckDir = 0
                                            }
                                            me.vars.duckTick = 2
                                        }
                                    }
                                }

                                me.vars.camera = function() {
                                    var cameraSpeed = 20
                                    var cameraYOffset = 50

                                    if (Math.abs(me.x - (Game.width / 2)) > 0) {
                                        if (Math.floor(Math.abs(me.x - (Game.width / 2))) >= 2) {
                                            if (me.x > Game.width / 2) {
                                                Game.vars.camera.x += Math.ceil((me.x - (Game.width / 2)) / cameraSpeed)
                                            }
                                            else {
                                                Game.vars.camera.x += Math.floor((me.x - (Game.width / 2)) / cameraSpeed)
                                            }
                                        }
                                        else {
                                            Game.vars.camera.x += me.x - (Game.width / 2)
                                        }
                                    }
                                    if (Math.abs(me.y - ((Game.height / 2) - cameraYOffset)) > 0) {
                                        if (Math.floor(Math.abs(me.y - ((Game.height / 2) + cameraYOffset))) >= 2) {
                                            if (me.y > ((Game.height / 2) - cameraYOffset)) {
                                                Game.vars.camera.y += Math.ceil((me.y - ((Game.height / 2) + cameraYOffset)) / cameraSpeed)
                                            }
                                            else {
                                                Game.vars.camera.y += Math.floor((me.y - ((Game.height / 2) + cameraYOffset)) / cameraSpeed)
                                            }
                                        }
                                        else {
                                            Game.vars.camera.y += me.y - ((Game.height / 2) + cameraYOffset)
                                        }
                                    }
                                }
                            },
                            "stateToRun": "game"
                        }
                    ],
                    "main": [
                        {
                            "code": function(gameRef, me) {
                                me.bringToFront()

                                // Position me
                                me.x = ((me.vars.x + 0.5) * BeginningJS.methods.get.sprite("Tiles").width) - Game.vars.camera.x
                                me.y = ((me.vars.y + 0.5) * BeginningJS.methods.get.sprite("Tiles").height) - Game.vars.camera.y

                                me.vars.physics()
                                me.vars.controls()
                                me.vars.camera()

                                // Falling out of the world
                                if (me.vars.y > 40) {
                                    me.vars.reset()
                                }

                                me.x = Math.round(me.x)
                                me.y = Math.round(me.y)
                            },
                            "stateToRun": "game"
                        }
                    ]
                }
            } // Ninja
        ],
        "scripts": {
            "main": [
                {
                    "code": function(gameRef, me) {
                        var tiles = BeginningJS.methods.get.sprite("Tiles")
                        var ninja = BeginningJS.methods.get.sprite("Ninja")

                        tiles.vars.loadArea(Math.floor(Math.round(ninja.vars.x) / (Game.width / tiles.width)) * (Game.width / tiles.width), (Math.floor(Math.round(ninja.vars.y)) / (Game.height / tiles.height)) * (Game.height / tiles.height))
                    },
                    "stateToRun": "game"
                }
            ]
        }
    },
    "vars": {
        "camera": {
            "x": 0,
            "y": 0
        },
        "tiles": {
            "transparent": [
                1,
                6,
                7
            ],
            "dark": {
                1: "Tile_Dark_Grass",
                2: "Tile_Dark_Tile",
                3: "Tile_Dark_Tile",
                4: "Tile_Dark_Tile",
                5: "Tile_Dark_Tile",
                6: "Tile_Dark_Sky",
                7: "Tile_Dark_Sign"
            }
        }
    },
    "ID": "Game",
    "width": 800,
    "height": 450,
    "config": {
        "state": "game",
        "display": {
            "fillScreen": true
        }
    }
})
