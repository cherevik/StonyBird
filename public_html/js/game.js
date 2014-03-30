var Game = Class.extend({

    width: 0, 
    height: 0, 
    gapSize: 180, 
    minPipeHeight: 100,
    boardHeight: 504, 
    entities: [],
    prevTime : 0,
    bird: null, 
    pipeTimer: null, 

    init: function(canvas) {
        this.canvas = canvas; 
        
        this.width = parseInt(canvas.getAttribute("width")); 
        this.height = parseInt(canvas.getAttribute("height")); 
        
        var self = this;
        window.addEventListener('keydown', function(evt) {
            self.onKeyDown(evt);
        }, true);        
        
        this.start(); 
    }, 
    
    start: function() {
        this.prevTime = Date.now();
        
        // create the moving ground 
        this.entities = new Array();
        this.entities.push(new Ground(this, 0, this.boardHeight)); 
        
        // create the bird  
        this.bird = new Bird(this, 100, 100);
        this.entities.push(this.bird); 

        // start spawning pipes
        if (this.pipeTimer) {
            clearTimeout(this.pipeTimer);
        }
        this.spawnPipes();
        
        // call the main game loop 
        this.main(); 
    },
    
    getContext: function() {
        return this.canvas.getContext("2d");
    }, 
    
    main: function() {
        var now = Date.now(); 

        // calculate the delta in seconds 
        var dt = (now - this.prevTime) / 1000.0; 
        this.prevTime = now; 
        
        // update entities
        this.update(dt); 
        
        // delete entities that are marked as deleted 
        var len = this.entities.length; 
        while (len --) {
            var e = this.entities[len];
            if (e.isDeleted()) {
                this.entities.splice(len, 1); 
            }
        }        
        
        // draw the board 
        this.draw(); 
        
        if (!this.detectCollision()) {
            var self = this;
            window.requestAnimationFrame(function() {
                self.main();
            });
        }
    }, 
    
    update: function(dt) {
        for (var i = 0; i < this.entities.length; i ++) {
            var e = this.entities[i]; 
            e.update(dt); 
        }
    }, 
    
    draw: function() {
        var ctx = this.getContext(); 
        ctx.clearRect(0, 0, this.width, this.height);
        for (var i = 0; i < this.entities.length; i ++) {
            var e = this.entities[i]; 
            e.draw(); 
        }
    }, 
    
    detectCollision: function() {
        for (var i = 0; i < this.entities.length; i ++) {
            var e = this.entities[i]; 
            if (e instanceof Pipe && this.bird.collidesWith(e)) {
                return true; 
            }
        }
        return false; 
    },
    
    onKeyDown: function(evt) {
        switch (evt.keyCode) {
            case 32: 
                this.bird.flap();    
                break;
            case 27: 
                this.start();
                break; 
        }
    }, 
    
    makePipe: function() {
        var height = this.getRandom(this.minPipeHeight, this.boardHeight - (this.minPipeHeight + this.gapSize));
        this.entities.push(new Pipe(this, height, 'top'));
        this.entities.push(new Pipe(this, this.boardHeight - this.gapSize - height, 'bottom'));
    },
    
    spawnPipes: function() {
        var self = this; 
        this.pipeTimer = setTimeout(function() {
            self.makePipe();
            self.spawnPipes();
        }, this.getRandom(2000, 5000));
    }, 
    
    getRandom: function(min, max) {
        return Math.random() * (max - min) + min;
    }
});