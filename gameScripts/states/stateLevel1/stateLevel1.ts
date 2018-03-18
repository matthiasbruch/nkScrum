class StatePlay extends Phaser.Scene {
 
  game:Phaser.Game;
	keyboardManager: Phaser.Input.Keyboard.KeyboardManager;
  sprite: Phaser.Physics.Arcade.Sprite;

  leftKey: Phaser.Input.Keyboard.Key;
  rightKey: Phaser.Input.Keyboard.Key;
  upKey: Phaser.Input.Keyboard.Key;
  downKey: Phaser.Input.Keyboard.Key;

  platforms: Phaser.Physics.Arcade.StaticGroup;

  create() {
    console.log('Starting PLAY state');

    // this.keyboardManager = this.input.keyboard.createCursorKeys();
    this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

    this.sprite = this.physics.add.sprite(20, 20, 'player');
    this.sprite.setOrigin(0.5, 0.5);
    this.sprite.setVelocityY(100);
    this.sprite.setBounceY(0.1);
    // this.sprite.setCollideWorldBounds(true);
    this.sprite.setMaxVelocity(400, 400);

    this.cameras.main.setBounds(0, 0, 8000, 600);

    this.platforms = this.physics.add.staticGroup();
    for (var i = 0; i < 10; i++) {
      this.platforms.create(300 * i, Math.floor(Math.random() * 500), 'stone');
    }
    this.physics.add.collider(this.sprite, this.platforms, null, null, null);
  }

  update() {
    if (this.leftKey.isDown)
    {
			this.sprite.setAccelerationX(-100);
    }
    else if (this.rightKey.isDown)
    {
			this.sprite.setAccelerationX(100);
    }

    if (this.upKey.isDown)
    {
			this.sprite.setVelocityY(-200);
    }
    // else if (this.downKey.isDown)
    // {
		// 	this.sprite.setAccelerationY(200);
    // }

    this.cameras.main.scrollX = this.sprite.x - 400;
  }

}