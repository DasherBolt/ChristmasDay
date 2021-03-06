function setup () {
  
  createCanvas(400, 400);
  rectMode(CENTER);
  
}
var Snow = [];
var isFalling = true;

var snowflake = function() {
    
    this.x = random(-300, 600);
    this.y = -10;
    this.ySpeed = random(1, 5);
    this.xSpeed = random(1, 2);
    this.Size = random(5, 7); 
    
    this.drawSnowflakes = function() {
        
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.Size, this.Size);
        this.y += this.ySpeed;
        this.x -= this.xSpeed; 
    };
};


function drawSnowflake() {
    
    if(Snow.length < 400) {
        
        Snow.push(new snowflake());
        
    }
    
    for(var i = 0; i < Snow.length; i++) {
        
        Snow[i].drawSnowflakes();
        
        if(Snow[i].y > 400 && isFalling) {
            
            Snow[i] = new snowflake();
        }
    }
}



function draw() {
  
    background(0, 0, 0);
    drawSnowflake();
    noStroke();
    fill(148, 99, 71);
    ellipse(200, 400, 500, 200);
    fill(83, 49, 24);
    rect(300, 300, 50, 100);
    fill(0, 255, 0);
    triangle(300, 150, 350, 200, 250, 200);
    triangle(300, 150, 350, 250, 250, 250);
    triangle(300, 150, 350, 300, 250, 300);
    fill(255, 255, 255);
    ellipse(100, 300, 80, 80);
    ellipse(100, 250, 60, 60);
    ellipse(100, 210, 50, 50);
    stroke(148, 99, 71);
    strokeWeight(5);
    line(120, 250, 160, 200);
    line(80, 250, 50, 200);
}
    
function mouseClicked() {
  
  isFalling = !isFalling;
  
}