(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary (at least 3) to make your level challenging. 
     *
     * The following functions are available to you:
     *  cannon.create.onTop(xLocation);
     *  cannon.create.onBottom(xLocation);
     *  cannon.create.onLeft(yLocation);
     *  cannon.create.onRight(yLocation);
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
       cannon.create.onTop(450, 800);
        cannon.create.onRight(300, 550);
        cannon.create.onTop(530, 800);
        cannon.create.onTop(200, 1900);
        cannon.create.onTop(200, 1300);
        cannon.create.onTop(200, 1100);
        cannon.create.onTop(200, 900);
        cannon.create.onTop(200, 700);
        cannon.create.onTop(200, 100);
        cannon.create.onTop(200, 300);
       cannon.create.onTop(200, 500);
       cannon.create.onTop(200, 1500);
       cannon.create.onTop(200, 1700);
        
        
        
        
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);
