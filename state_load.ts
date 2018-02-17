class StateLoad extends Phaser.State {
 
  game:Phaser.Game;

  preload() {
    console.log('preloading');

    var loadingLabel = this.game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		this.game.load.image( 'logo', "assets/netzkern-logo.png" );
  }

  create() {
    console.log('Switching to menu');

    this.game.state.start('StateMenu');
  }

}