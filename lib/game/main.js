ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	'plugins.camera',
	
	'game.entities.cursor',
	'game.entities.power',
	'game.entities.work',
	'game.entities.gym',
	'game.entities.office',
	'game.entities.hospital',
	'game.entities.home',
	'game.entities.house',
	
	'game.levels.test'
)
.defines(function(){

MyGame = ig.Game.extend({
	tile: 64,
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.MOUSE1, 'click' );
		
		this.loadLevel( LevelTest );
		
		this.screen.x = this.cursor.pos.x - ig.system.width/2;
		this.screen.y = this.cursor.pos.y - ig.system.height/2;
	},
	
	
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
		this.screen.x = this.cursor.pos.x - ig.system.width/2;
		this.screen.y = this.cursor.pos.y - ig.system.height/2;

	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
	},
	
	getSquare: function( pos ) {
		return 64*Math.floor(pos/64);
	}

});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
var scale = (window.innerWidth < 640) ? 2 : 1;
var width = window.innerWidth * scale,
	height = window.innerHeight * scale;

ig.main( '#canvas', MyGame, 60, width, height, 1 );

});
