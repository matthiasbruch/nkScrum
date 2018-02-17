class StateWin extends Phaser.State {
 
  game:Phaser.Game;

  create() {
    console.log('STATE: WIN');

    var nameLabel = this.game.add.text(80, 80, 'You won', {font: '50px Courier', fill: '#ffffff'});

    var startLabel = this.game.add.text(80, this.game.world.height-80, 'Press the "w" key to start', {font: '25px Courier', fill: '#ffffff'});

    var wkey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

    wkey.onDown.addOnce(this.restart, this);
  }

  restart() { 
    this.game.state.start('StateMenu');
  }

}