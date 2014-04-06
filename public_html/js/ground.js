var Ground = Entity.extend({
    image: null, 
    scrollPos: 0,
    imageWidth: 0,
    imageHeight: 0,
    speed: 150, 
    
    init: function(game, x, y) {
        this._super(game, x, y, 10); 
        this.scrollPos = 0; 
        this.image = new Image(); 
        
        // read the width and height of the image once it is loaded 
        var self = this; 
        this.image.onload = function() {
            self.imageWidth = self.image.width; 
            self.imageHeight = self.image.height; 
        };
        
        this.image.src = "img/ground.png";
    },
    
    update: function(dt) {
        this.scrollPos += this.speed * dt; 
        if (this.scrollPos > this.imageWidth) { 
            this.scrollPos = 0; 
        }
    }, 
    
    draw: function() {
        var ctx = this.game.getContext(); 
        ctx.drawImage(this.image, 
            this.scrollPos, 0, this.imageWidth - this.scrollPos, this.imageHeight, 
            this.x, this.y, this.imageWidth - this.scrollPos, this.imageHeight); 
        ctx.drawImage(this.image, 
            0, 0, this.scrollPos, this.imageHeight, 
            this.x + this.imageWidth - this.scrollPos, this.y, this.scrollPos, this.imageHeight); 
    }
});

  