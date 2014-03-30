var Pipe = Entity.extend({
    image: null, 
    height: 0, 
    location: 0,
    speed: 150,
    
    init: function(game, height, location) {
        this._super(game, game.width, 0); 
        this.height = height; 
        this.location = location; 
        this.image = new Image(); 
        this.image.src = "img/pipe.png";
    }, 
    
    update: function(dt) {
        this.x = this.x - this.speed * dt; 
        if (this.x + this.image.width < 0) {
            this.deleted = true;
        }
    }, 
    
    draw: function() {
        // determine the image size 
        var imageHeight = this.image.height; 
        var imageWidth = this.image.width; 
        
        // draw a fragment of the pipe
        var ctx = this.game.getContext(); 
        ctx.save();
        if (this.location == 'top') {
            ctx.translate(this.x, this.y);
        } else {
            ctx.translate(this.x, this.game.boardHeight);
            ctx.scale(1, -1); 
        }
        ctx.drawImage(this.image, 
            0, imageHeight - this.height, imageWidth, this.height, 
            0, 0, imageWidth, this.height); 
        ctx.restore();
    },
    
    getBoundingRectangle : function() {
        if (this.location == 'top') {
            return { top: this.y, left: this.x, right: this.x + this.image.width, bottom: this.y + this.height };         
        } else {
            return { top: this.game.boardHeight - this.height, left: this.x, right: this.x + this.image.width, bottom: this.game.boardHeight };                     
        }
    }    
});