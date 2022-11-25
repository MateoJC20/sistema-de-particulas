let nPelotas = 500;
let pelotas = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < nPelotas; i ++){
    pelotas[i] = new RandomWalek(i);
  }
}

function draw() {
  background('rgba(0,0,0,0.1)')
  for(let i = 0; i < nPelotas; i ++){
    pelotas[i].update();
    pelotas[i].display();
    }
    
}

// ------------ Classes ------------- //

// --------Random Walker ------------ //

class RandomWalek {
  constructor(_number){
    this.blue = random(0,150);
    this.red = random(0,255);
    this.green = random(0,10);

    this.t = 0;
    this. tSpeed = random(1)
    this.noiseShitf = random(100);

    this.number = _number;
    this.pos = createVector(width, height/2);
    this.speed = createVector(random(-2, 2), random(-2, 2));
    this.mult = random(-3, 3);
    this.rem = random (-1, -5, -10);
    this.diametro = random(5, 15);
    this.diametro2 = random(20, 25);
    print('Hola soy una pelota' + this.number);
  }
  update(_t){

    this.speed.rotate(map(noise(this.t + this.noiseShitf), 0, 1, -0.3, 0.3));
    this.pos.add(this.speed);
    this.pos.add(this.mult);
    this.pos.add(this.rem);

    this.t += this.tSpeed;
  }
  display(){
    stroke("rgba(0,0,0,.3)");
    strokeWeight(2);
    fill(this.red, this.green, this.blue);
    ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);

    
    
  }
  
}

