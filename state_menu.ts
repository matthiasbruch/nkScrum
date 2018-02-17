class StateMenu extends Phaser.State {
 
  game:Phaser.Game;

  create() {
    console.log('Creating menu');

    var nameLabel = this.game.add.text(80, 80, 'My first game', {font: '30px Courier', fill: '#ffffff'});

    var startLabel = this.game.add.text(80, this.game.world.height-80, 'Press the "w" key to start', {font: '25px Courier', fill: '#ffffff'});

    var wkey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

    wkey.onDown.addOnce(this.start, this);
  }

  start() {
    this.game.state.start('StatePlay');
  }

}