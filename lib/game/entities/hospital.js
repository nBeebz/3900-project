ig.module(
	'game.entities.hospital'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityHospital= ig.Entity.extend({
	
	size: {x: 128, y: 64},
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	//sfxBuild: new ig.Sound( 'media/sounds/building.*' ),
	
	animSheet: new ig.AnimationSheet( 'media/hospital.png', 128, 64 ),

	// These are our own properties. They are not defined in the base
	// ig.Entity class. We just use them internally for the Player
	buildTime: 1000,
	powerCost: 100,
	happiness: 0,
	wealth: -5,
	popCap: 5,
	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		// Add the animations
		this.addAnim( 'idle', 1, [0] );
		this.currentAnim = this.anims.idle;
		//this.sfxBuild.play();
	
	},
	
	
	
});


});