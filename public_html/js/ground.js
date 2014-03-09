var Ground = Entity.extend({
    image: null, 
    imageWidth: 0,
    imageHeight: 0,
    
    init: function(game, x, y) {
        this._super(game, x, y); 
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
    }, 
    
    draw: function() {
        var ctx = this.game.getContext(); 
        ctx.drawImage(this.image, this.x, this.y); 
    }
});

  