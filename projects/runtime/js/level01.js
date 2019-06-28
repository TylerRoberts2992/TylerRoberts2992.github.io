var level01 = function(window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        
        var levelData = {
            name: "Robot Romp",
            number: 1,
            speed: -3,
            gameItems: [
                { type: 'Jellyfish', x: 500, y: 200 },
                { type: 'Jellyfish', x: 1500, y: 200 },
                { type: 'Jellyfish', x: 1000, y: 300 },
                { type: 'Reward', x: 600, y: groundY - 150},
                { type: 'Enemy', x: 400, y: 280 },
                { type: 'Enemy', x: 800, y: 280 },
                { type: 'Enemy', x: 1200, y: 280 },
            ]
        };
        
      
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE


        function createJellyfish(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            var obstacleImage = draw.bitmap('img/jelly.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -30;
            game.addGameItem(myObstacle);


        }
        
        for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];
            var type = gameItem.type;
            if (type === 'Jellyfish') {
                 createJellyfish(gameItem.x, gameItem.y);
            } else if (type === 'Enemy') {
                createEnemy(gameItem.x, gameItem.y);
            } else {
                createReward(gameItem.x, gameItem.y);
            }
        }

        function createReward(x, y) {
            var hitZoneSize = 25;
            var myReward = game.createGameItem('reward', hitZoneSize)
            myReward.x = x;
            myReward.y = y;
            myReward.velocityX = -1;
            
            var rewardImage = draw.bitmap('img/treasure.png');  //<--- insert image of reward link here
            myReward.addChild(rewardImage);
            rewardImage.x = -50;   //<--- can change value after choosing image
            rewardImage.y = -50;   //<--- can change value after choosing image
            
            game.addGameItem(myReward);
            
            myReward.onPlayerCollision = function() {
             console.log('Halle has collected the reward');
             game.increaseScore(150);
             myReward.fadeOut();
            };
        }
        
       

        



       
        function createEnemy(x, y) {
            var enemy = game.createGameItem('enemy', 25);
            var enemyImage = draw.bitmap('img/shark.png');
            enemy.addChild(enemyImage);
            enemyImage.x = -50;
            enemyImage.y = -40;
            game.addGameItem(enemy);
            
            
            enemy.x = x;
            enemy.y = y;
            
            game.addGameItem(enemy);
            
            enemy.velocityX = -1.5;
            enemy.onPlayerCollision = function() {
             console.log('The enemy has hit Halle');
             game.changeIntegrity(-10);
            };
            
            enemy.onProjectileCollision = function() {
             console.log('Halle has hit the enemy');
             game.increaseScore(100);
             enemy.fadeOut();
            };

        }

        
    };


};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}