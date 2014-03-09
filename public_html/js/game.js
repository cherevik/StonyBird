var Game = Class.extend({

    width: 0, 
    height: 0, 
    entities: [],
    prevTime : 0,

    init: function(canvas) {
        this.canvas = canvas; 
        this.width = parseInt(canvas.getAttribute("width")); 
        this.height = parseInt(canvas.getAttribute("height")); 
        this.entities.push(new Ground(this, 0, 504)); 
        this.entities.push(new Bird(this, 400, 100)); 
        
        var self = this;
        window.addEventListener('keydown', function(evt) {
            self.onKeyDown(evt);
        }, true);        
        
        this.main(); 
    }, 
    
    getContext: function() {
        return this.canvas.getContext("2d");
    }, 
    
    main: function() {
        var now = Date.now(); 
        var dt = (now - this.prevTime) / 1000.0; 
        
        this.update(dt); 
        this.draw(); 
        
        this.prevTime = now; 
        
        var self = this;
        window.requestAnimationFrame(function() {
            self.main();
        });
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
    
    onKeyDown: function(evt) {
        switch (evt.keyCode) {
            case 32: 
                console.log("Space pressed");
                break;
        }
    }

});