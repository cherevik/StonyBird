var Bird = Entity.extend({
    image: null,
    
    init: function(game, x, y) {
        this._super(game, x, y); 
        this.image = new Image(); 
        this.image.src = "img/bird.png";
    }, 
    
    update: function(dt) {
    }, 
    
    draw: function() {
        var ctx = this.game.getContext(); 
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.drawImage(this.image, 0, 0, 85, 60, 0, 0, 85, 60); 
        ctx.restore();
    }
    
});
