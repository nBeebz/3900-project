ig.module(
	'game.entities.cursor'
)
.requires(
	'impact.entity',
	'game.entities.house',
	'game.entities.power'
)
.defines(function(){

EntityCursor = ig.Entity.extend({
	
	size: {x: 64, y: 64},
	maxVel: {x: 400, y: 400},
	xpos: 0,
	ypos: 0,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.NEVER,
	
	animSheet: new ig.AnimationSheet( 'media/cursor.png', 64, 64 ),

	// These are our own properties. They are not defined in the base
	// ig.Entity class. We just use them internally for the Player

	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		// Add the animations
		this.addAnim( 'idle', 1, [0] );
		this.currentAnim = this.anims.idle;
	
		// Set a reference to the player on the game instance
		ig.game.cursor = this;
		xpos = this.pos.x;
		ypos = this.pos.y;
	},
	
	
	update: function() {
	
		if(this.pos.x < xpos) this.pos.x += 4;
		else if(this.pos.x > xpos) this.pos.x -= 4;
		
		if(this.pos.y < ypos) this.pos.y += 4;
		else if(this.pos.y > ypos) this.pos.y -= 4;
		

		if( ig.input.pressed('click') ){
			xpos = ig.game.getSquare( ig.input.mouse.x + ig.game.screen.x );
			ypos =  ig.game.getSquare( ig.input.mouse.y + ig.game.screen.y );
			if(this.pos.x == xpos && this.pos.y == ypos){
				if( this.distanceTo(ig.game.power) < ig.game.power.area ) ig.game.spawnEntity( EntityHouse, xpos, ypos);
				else alert("TOO FAR AWAY");
			}
		}
		
		// Move!
		this.parent();
	}
	
	
});


});