class StatePlay extends Phaser.State {
 
  game:Phaser.Game;
  //keyboard: Phaser.Keyboard;
	cursors: Phaser.CursorKeys;
  sprite: Phaser.Sprite;

  create() {
    console.log('Starting PLAY state');

    //this.keyboard = this.game.input.keyboard;
    this.cursors = this.game.input.keyboard.createCursorKeys();

    var wkey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    wkey.onDown.addOnce(this.win, this);

		this.sprite = this.game.add.sprite( this.game.world.centerX, this.game.world.centerY, 'logo' );
		this.sprite.anchor.setTo( 0.5, 0.5 );
    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.velocity.y = 100;
		this.sprite.body.collideWorldBounds=true;
  }

  update() {    
    if (this.cursors.left.isDown)
    {
			this.sprite.body.velocity.x += -40;
    }
    else if (this.cursors.right.isDown)
    {
			this.sprite.body.velocity.x += 40;
    }

    if (this.cursors.up.isDown)
    {
			this.sprite.body.velocity.y += -40;
    }
    else if (this.cursors.down.isDown)
    {
			this.sprite.body.velocity.y += 40;
    }
  }

  win() {
    
    this.game.state.start('StateWin');
  }

}