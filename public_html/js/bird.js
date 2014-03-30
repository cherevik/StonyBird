var Bird = Entity.extend({
    sprite: null, 
    velocity: 10, 
    gravity: 1000,
    angle: 0,
    angleSpeed: 1  ,
    maxy: 0, 
    
    init: function(game, x, y) {
        this._super(game, x, y); 
        this.sprite = new Sprite("img/bird.png", 0, 0, 85, 60, 10, [0,1,2]);
        this.maxy = game.boardHeight - 60; 
    }, 
    
    update: function(dt) {
        this.sprite.update(dt); 
        var ny = this.y + this.velocity * dt; 
        if (ny >= 0 && ny < this.maxy) {
            this.y = ny; 
        }
        if (this.y < this.maxy) {
            this.velocity = this.velocity + this.gravity  * dt; 
        }
        var na = this.angle + this.angleSpeed * dt;
        if (na > -Math.PI/2 && na < Math.PI/2) {
            this.angle = na;
        }
    }, 
    
    draw: function() {
        var ctx = this.game.getContext(); 
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        this.sprite.draw(ctx); 
        ctx.restore();
    }, 
    
    flap: function() {
        this.velocity = -200; 
        this.angle = -Math.PI/6;
    }, 
    
    getBoundingRectangle : function() {
        // not taking into account the rotation angle 
        return { top: this.y, left: this.x, right: this.x + this.sprite.width, bottom: this.y + this.sprite.height };
    }
    
});
