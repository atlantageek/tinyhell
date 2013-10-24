Crafty.scene('Loading', function(){
  // Draw some text for the player to see in case the file
  //  takes a noticeable amount of time to load
  Crafty.e('2D, DOM, Text')
    .text('Loading...')
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
    .css($text_css);

  Crafty.load(['assets/game-assets/hell-tiles.png'], function(){
    // Once the image is loaded...

    // Define the individual sprites in the image
    // Each one (spr_tree, etc.) becomes a component
    // These components' names are prefixed with "spr_"
    //  to remind us that they simply cause the entity
    //  to be drawn with a certain sprite
    Crafty.sprite(32, 'assets/game-assets/hell-tiles.png', {
      left_stone:  [0, 0],
      middle_stone:  [1, 0],
      right_stone:  [2, 0],
      wall:  [3, 0],
      torch:  [4, 0],
      earth:  [5, 0],
      skeleton:  [6, 0],
      hellmouth:  [7, 0],
      tunnel:  [0, 1],
      sky:  [0, 2],
    }, 0, 2);

  })
  // Load our sprite map image
  Crafty.load(['assets/game-assets/shorty.png'], function(){
    // Once the image is loaded...

    // Define the individual sprites in the image
    // Each one (spr_tree, etc.) becomes a component
    // These components' names are prefixed with "spr_"
    //  to remind us that they simply cause the entity
    //  to be drawn with a certain sprite
    Crafty.sprite(32, 'assets/game-assets/shorty.png', {
      spr_soul:  [0, 0]
    }, 0, 2);

    // Now that our sprites are ready to draw, start the game
    Crafty.scene('Game');
  })
});

Crafty.scene('Game', function() {
for(var x=0;x < 16;x+=1)
{
  Crafty.e('Sky').at(x,0);
}

Crafty.e("Soul")
        .attr({x:50,y:50,w:45,h:45, dX:1, dY:1})
        .bind("EnterFrame", function() {
                this.x += this.dX;
        })
        .animate('PlayerMovingRight', 1,-1)
        ;
});
