Crafty.c('Grid', {
  init: function() {
    this.attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    })
  },
 
  // Locate this entity at the given position on the grid
  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
    } else {
      this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
      return this;
    }
  }
});
Crafty.c('Actor', {
  init: function() {
    this.requires('2D, Canvas, Grid');
  },
});
/*
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
 */
Crafty.c('Sky', { init: function() { this.requires('Actor, Color, Solid, ky').color('rgb(20, 20, 200)'); } });
Crafty.c('Stone', { init: function() { this.requires('Actor, Color, Solid, middle_stone').color('rgb(20, 125, 40)'); } });
Crafty.c('Wall', { init: function() { this.requires('Actor, Color, Solid, wall').color('rgb(20, 125, 40)'); } });
Crafty.c('Torch', { init: function() { this.requires('Actor, Color, Solid, torch').color('rgb(20, 125, 40)'); } });
Crafty.c('Soul', {
  init: function() {
    this.requires('Actor, Color, spr_soul,SpriteAnimation');
    this.color('green');
    this.animate('PlayerMovingRight',    0, 0, 4)
  },
});
Crafty.c('Demon', {
  init: function() {
    this.requires('Actor, Color');
    this.color('rgb(200, 125, 40)');
  },
});
