/// <reference path="../tsDef/official/phaser.d.ts" />

class SimpleGame
{
	game:Phaser.Game;

	constructor()
	{
		console.log('Start Game and initialize states.');
		
		this.game = new Phaser.Game({
			type: Phaser.AUTO,
			width: 800,
			height: 600,
			physics: {
					default: 'arcade',
					arcade: {
            gravity: { y: 800 },
            debug: false
					}
			}
			// ,
			// scene: {
			// 		preload: preload,
			// 		create: create
			// }
		});

		this.game.scene.add('StateBoot', StateBoot, false);
		this.game.scene.add('StateLoad', StateLoad, false);  
		this.game.scene.add('StateMenu', StateMenu, false); 
		this.game.scene.add('StatePlay', StatePlay, false);

		this.game.scene.start('StateBoot'); 
	}
}

// when the page has finished loading, create our game
window.onload = () => {
	var game = new SimpleGame();
}