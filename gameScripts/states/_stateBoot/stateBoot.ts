class StateBoot extends Phaser.Scene {
  game:Phaser.Game;

  create() {
    console.log('State: Boot');

    // this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
		this.scene.start('StateLoad');
  }
}