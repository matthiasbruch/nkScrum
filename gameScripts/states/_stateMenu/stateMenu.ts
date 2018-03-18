class StateMenu extends Phaser.Scene {
 
  game:Phaser.Game;
  wKey:any;

  create() {
    console.log('Creating menu');

    var nameLabel = this.add.text(80, 80, 'My first game', {font: '30px Courier', fill: '#ffffff'});

    var startLabel = this.add.text(80, 400, 'Press the "w" key to start', {font: '25px Courier', fill: '#ffffff'});

    this.wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  }

  update() {
    if (this.wKey.isDown) {
      this.start();
    }
  }

  start() {
    this.scene.start('StatePlay');
  }
}