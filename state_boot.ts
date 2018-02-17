class StateBoot extends Phaser.State {
  game:Phaser.Game;

  create() {
    console.log('State: Boot');

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
		this.game.state.start('StateLoad');
  }
}