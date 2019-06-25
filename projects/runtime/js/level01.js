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
                { type: 'sawblade', x: 500, y: 200 },
                { type: 'sawblade', x: 1500, y: 220 },
                { type: 'sawblade', x: 1000, y: 300 }
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE


        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            game.addGameItem(myObstacle);


        }
        
        for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];
            createSawBlade(gameItem.x, gameItem.y);
        }

        function createReward(x, y) {
            var hitZoneSize = 25;
            var myReward = game.createObstacle(hitZoneSize);
            myReward.x = x;
            myReward.y = y;
            var rewardImage = draw.bitmap('img/pixel-64x64.png');  //<--- insert image of reward link here
            myReward.addChild(rewardImage);
            rewardImage.x = -76;   //<--- can change value after choosing image
            rewardImage.y = -75;   //<--- can change value after choosing image
            game.addGameItem(myReward);
            
            myReward.onPlayerCollision = function() {
             console.log('Halle has collected the reward');
             game.increaseScore(150);
             myReward.fadeOut();
            };
        }
        
        createReward(600, groundY);

        



       
        function createEnemy(x, y) {
            var enemy = game.createGameItem('enemy', 25);
            var redSquare = draw.rect(50, 50, 'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            
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
            }

        }

        createEnemy(400, 280);
        createEnemy(800, 280);
        createEnemy(1200, 280);
    };


}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}