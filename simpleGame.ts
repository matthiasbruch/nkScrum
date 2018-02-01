class SimpleGame
{
	game:Phaser.Game;
	cursors: Phaser.CursorKeys;
	sprite: Phaser.Sprite;

	constructor()
	{
		// create our phaser game
		// 800 - width
		// 600 - height
		// Phaser.AUTO - determine the renderer automatically (canvas, webgl)
		// 'content' - the name of the container to add our game to
		// { preload:this.preload, create:this.create} - functions to call for our states
		this.game = new Phaser.Game( 800, 600, Phaser.AUTO, 'content', { preload:this.preload, create:this.create, update:this.update} );
	}
	
	
	preload()
	{
		// add our logo image to the assets class under the
		// key 'logo'. We're also setting the background colour
		// so it's the same as the background colour in the image
		this.game.load.image( 'logo', "assets/netzkern-logo.png" );
		this.game.stage.backgroundColor = 0xffff59;
	}
	
	create() 
	{
		// add the 'logo' sprite to the game, position it in the
		// center of the screen, and set the anchor to the center of
		// the image so it's centered properly. There's a lot of
		// centering in that last sentence
		this.sprite = this.game.add.sprite( this.game.world.centerX, this.game.world.centerY, 'logo' );
		this.sprite.anchor.setTo( 0.5, 0.5 );


		this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.stage.backgroundColor = '#2d2d2d';

    // sprite = game.add.sprite(32, 200, 'phaser');

    this.game.physics.arcade.enable(this.sprite);
    
		this.sprite.body.velocity.y = 100;
		this.sprite.body.collideWorldBounds=true;
    // group = game.add.physicsGroup();

    // for (var i = 0; i < 50; i++)
    // {
    //     var c = group.create(game.rnd.between(100, 770), game.rnd.between(0, 570), 'veggies', game.rnd.between(0, 35));
    //     c.body.mass = -100;
    // }

    // for (var i = 0; i < 20; i++)
    // {
    //     var c = group.create(game.rnd.between(100, 770), game.rnd.between(0, 570), 'veggies', 17);
    // }

    this.cursors = this.game.input.keyboard.createCursorKeys();

	}

	update() {
		// if (this.game.physics.arcade.collide(sprite, group, collisionHandler, processHandler, this))
    // {
    //     console.log('boom');
    // }

    // game.physics.arcade.overlap(sprite, group, collisionHandler, null, this);

    // this.sprite.body.velocity.x = 0;
    // this.sprite.body.velocity.y = 0;

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
}

// when the page has finished loading, create our game
window.onload = () => {
	var game = new SimpleGame();
}