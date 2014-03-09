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
    }
});


