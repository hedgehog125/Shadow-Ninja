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


BeginningJS.config.flags.useQTrees = false // Not working at the moment
Game = BeginningJS.init({
    "game": {
        "assets": {
            "imgs": [
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
                    "id": "Tile_dark_sky",
                    "src": "assets/imgs/tiles/dark/Sky.png"
                },
                {
                    "id": "Tile_dark_tile",
                    "src": "assets/imgs/tiles/dark/Tile.png"
                },
                {
                    "id": "Tile_dark_grass",
                    "src": "assets/imgs/tiles/dark/Grass.png"
                },
                {
                    "id": "Ninja_Idle",
                    "src": "assets/imgs/ninja/ninja.png"
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
                                me.x = me.vars.x - Game.vars.camera.x
                                me.y = me.vars.y - Game.vars.camera.y

                                if (me.vars.tilesRendered && me.vars.tiles.length == 0) {
                                    /*
                                    if (! me.vars.done) {
                                        // Shade it
                                        var data = me.ctx.getImageData(0, 0, me.width, me.height)

                                        var lights = [
                                            {
                                                "x": 800,
                                                "y": 0,
                                                "brightness": 20
                                            }
                                        ]

                                        var i = 0
                                        while (i < data.data.length) {
                                            var x = (i / 4) % data.width
                                            var y = Math.floor((i / 4) / data.width)

                                            var brightness = 0

                                            var c = 0
                                            for (c in lights) {
                                                var light = lights[c]
                                                brightness = brightness + Math.max(light.brightness - ((Math.abs(light.x - x) + Math.abs(light.y - y)) / 80), 0)
                                            }
                                            if (brightness != 0 && brightness != 1) {
                                                //console.log(brightness, data.data[i] * brightness, data.data[i])
                                                //debugger
                                            }
                                            brightness = Math.max(brightness, 0)
                                            if (brightness != 0 && brightness != 1) {
                                                //console.log(brightness, data.data[i] * brightness, data.data[i])
                                                //debugger
                                            }

                                            data.data[i] = Math.round(data.data[i] * Math.min(brightness / 10, 1))
                                            data.data[i + 1] = Math.round(data.data[i + 1] * Math.min(brightness / 10, 1))
                                            data.data[i + 2] = Math.round(data.data[i + 2] * Math.min(brightness / 10, 1))

                                            i = i + 4
                                        }

                                        me.ctx.putImageData(data, 0, 0)
                                        me.vars.done = true
                                    }
                                    */
                                    me.vars.done = true
                                }
                                else {
                                    var i = 0
                                    for (i in me.vars.tiles) {
                                        var tile = me.vars.tiles[i]

                                        if (tile.tileID == 6) {
                                            var tileTexture = "Tile_dark_sky"
                                        }
                                        else {
                                            if (tile.tileID == 1) {
                                                var tileTexture = "Tile_dark_grass"
                                            }
                                            else {
                                                var tileTexture = "Tile_dark_tile"
                                            }
                                        }


                                        me.ctx.drawImage(BeginningJS.methods.get.image(tileTexture), tile.x, tile.y, tile.width, tile.height)
                                        //me.ctx.drawImage(BeginningJS.methods.getImage("Tile_" + tile.tileID), tile.x + (tile.width / 2), tile.y + (tile.height / 2), tile.width, tile.height)
                                    }
                                    me.vars.tiles = []
                                }
                            }
                        ]
                    }
                },
                "vars": {
                    "world": {
                        "-25,-14": {
                            "width": 75,
                            "height": 24,
                            "tile": 6,
                            "layer": 0
                        },
                        "-25,10": {
                            "width": 75,
                            "height": 1,
                            "tile": 1,
                            "layer": 0
                        },
                        "-25,11": {
                            "width": 75,
                            "height": 3,
                            "tile": 2,
                            "layer": 0
                        },
                        "-25,14": {
                            "width": 75,
                            "height": 41,
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
                                BeginningJS.methods.get.audio("Main_Music").loop = true
                                BeginningJS.methods.playSound("Main_Music")

                                me.width = Game.width / me.vars.scale
                                //me.width = 1
                                //me.height = Game.height / me.vars.scale
                                me.height = me.width

                                me.x = me.width / 2
                                me.y = me.height / 2
                                me.visible = false

                                me.vars.rendered = {}
                                me.vars.layerCanvases = {}

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
                                            x++
                                        }
                                        y++
                                    }
                                }

                                for (y of [-14, 0, 14]) {
                                    for (x of [-25, 0, 25]) {
                                        me.vars.renderChunk({
                                            "x": x,
                                            "y": y,
                                            "width": Game.width,
                                            "height": Game.height
                                        })
                                    }
                                }



                                var i = 0
                                for (i in me.vars.layerCanvases) {
                                    var c = 0
                                    for (c in me.vars.layerCanvases[i]) {
                                        me.vars.layerCanvases[i][c].vars.tilesRendered = true
                                    }
                                }

                                Game.methods.gui.create.controls.joystick({
                                    "id": "Joystick1"
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
                "vars": {
                    "x": 12,
                    "y": 5,
                    "vel": {
                        "x": 0,
                        "y": 0
                    }
                },
                "scripts": {
                    "init": [
                        {
                            "code": function(gameRef, me) {
                                me.x = ((me.vars.x + 0.5) * BeginningJS.methods.get.sprite("Tiles").width) - Game.vars.camera.x
                                me.y = ((me.vars.y + 0.5) * BeginningJS.methods.get.sprite("Tiles").height) - Game.vars.camera.y
                            },
                            "stateToRun": "game"
                        }
                    ],
                    "main": [
                        {
                            "code": function(gameRef, me) {
                                me.bringToFront()

                                me.x = ((me.vars.x + 0.5) * BeginningJS.methods.get.sprite("Tiles").width) - Game.vars.camera.x
                                me.y = ((me.vars.y + 0.5) * BeginningJS.methods.get.sprite("Tiles").height) - Game.vars.camera.y

                                var tiles = BeginningJS.methods.get.sprite("Tiles").vars.rendered

                                var tile = tiles[[Math.round(me.vars.x), Math.ceil(me.vars.y + 1.5)].toString()]
                                if (tile == null) {
                                    me.vars.vel.y += 0.1
                                }
                                else {
                                    if (tile.tile == 6 || tile.tile == 1) {
                                        me.vars.vel.y += 0.1
                                    }
                                    else {
                                        if (me.vars.vel.y < 0) {
                                            me.vars.vel.y = 0
                                        }
                                    }
                                }
                                me.vars.x += (me.vars.vel.x / 10)
                                me.vars.y += (me.vars.vel.y / 10)

                                me.vars.vel.x *= 0.9
                                me.vars.vel.y *= 0.9
                            },
                            "stateToRun": "game"
                        }
                    ]
                }
            } // Ninja
        ]
    },
    "vars": {
        "camera": {
            "x": 0,
            "y": 0
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
