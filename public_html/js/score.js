var Score = Entity.extend({
    init: function(game) {
        this._super(game, 0, 0, 20); 
    },
    
    draw: function() {
        var score = this.game.score + "";
        var ctx = this.game.getContext(); 
        ctx.fillStyle = "white";
        ctx.font = "60px gamefont";
        var width = ctx.measureText(score).width;
        ctx.fillText(score, (this.game.width - width)/2, 100);        
    }
});

