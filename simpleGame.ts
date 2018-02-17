class SimpleGame
{
	game:Phaser.Game;

	constructor()
	{
		console.log('Start Game and initialize states.');
		
		this.game = new Phaser.Game( 800, 600, Phaser.AUTO, 'content' );

		this.game.state.add('StateBoot', StateBoot, false);
		this.game.state.add('StateLoad', StateLoad, false);
		this.game.state.add('StateMenu', StateMenu, false);
		this.game.state.add('StatePlay', StatePlay, false);
		this.game.state.add('StateWin', StateWin, false);

		this.game.state.start('StateBoot');
	}
}

// when the page has finished loading, create our game
window.onload = () => {
	var game = new SimpleGame();
}