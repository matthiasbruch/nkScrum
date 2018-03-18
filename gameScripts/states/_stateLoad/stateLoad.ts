class StateLoad extends Phaser.Scene {
 
  game:Phaser.Game;

  preload() {
    console.log('preloading');

    var loadingLabel = this.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		this.load.image('player', 'img/player.png');
		this.load.image('stone', 'img/stone.png');
  }

  create() {
    console.log('Switching to menu');

    this.scene.start('StateMenu');
  }
}