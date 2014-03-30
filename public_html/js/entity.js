var Entity = Class.extend({
    x: 0, 
    y: 0, 
    game: null, 
    deleted: false,
    
    init: function(game, x, y) {
        this.game = game; 
        this.x = x; 
        this.y = y; 
    },
    
    draw: function() {
    },
    
    update: function(dt) {
    }, 
    
    isDeleted: function() {
        return this.deleted; 
    }, 
    
    getBoundingRectangle: function() {
        return { top: this.x, left: this.y, right: this.x, bottom: this.y };
    }, 
    
    collidesWith: function(e) {
        var r1 = this.getBoundingRectangle(); 
        var r2 = e.getBoundingRectangle(); 
        return !(r2.left > r1.right || 
           r2.right < r1.left || 
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
    }
});


