ig.module(
	'game.entities.house'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityHouse= ig.Entity.extend({

	size: {x: 128, y: 64},
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	////sfxBuild: new ig.Sound( 'media/sounds/building.*' ),
	
	animSheet: new ig.AnimationSheet( 'media/house.png', 128, 64 ),

	// These are our own properties. They are not defined in the base
	// ig.Entity class. We just use them internally for the Player

	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		// Add the animations
		this.addAnim( 'idle', 1, [0] );
		this.currentAnim = this.anims.idle;
		////this.sfxBuild.play();
	
	},
	
	
	
});


});