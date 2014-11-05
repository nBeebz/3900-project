ig.module(
	'game.entities.power'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPower= ig.Entity.extend({
	
	size: {x: 128, y: 128},
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	area: 512,
	
	animSheet: new ig.AnimationSheet( 'media/factory.png', 128, 128 ),

	// These are our own properties. They are not defined in the base
	// ig.Entity class. We just use them internally for the Player

	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		// Add the animations
		this.addAnim( 'idle', 1, [0] );
		this.currentAnim = this.anims.idle;
		ig.game.power = this;
	},
	
	
	
});


});