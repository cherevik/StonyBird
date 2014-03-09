var Sprite = Class.extend({
    image: null,
    x: 0, 
    y: 0, 
    width: 0, 
    height: 0,
    speed: 0, 
    index: 0, 
    url: null, 
    frames: [],
    
    init: function(url, x, y, width, height, speed, frames) {
        this.image = new Image(); 
        this.image.src = url; 
        this.x = x; 
        this.y = y; 
        this.width = width; 
        this.height = height; 
        this.speed = speed;
        this.frames = frames; 
    }, 
    
    update: function(dt) {
        this.index += this.speed * dt; 
    }, 
    
    draw: function(ctx) {
        var frame; 
        if (this.speed > 0) {
            var max = this.frames.length; 
            var idx = Math.floor(this.index); 
            frame = this.frames[idx % max];
        } else {
            frame = 0; 
        }
        ctx.drawImage(this.image, 
            this.x + frame * this.width, this.y, this.width, this.height, 
            0, 0, this.width, this.height); 
    }
});
