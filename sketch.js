let nPelotas = 300;
let pelotas = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < nPelotas; i ++){
    pelotas[i] = new RandomWalek(i);
  }
}

function draw() {

  for(let i = 0; i < nPelotas; i ++){
    pelotas[i].update();
    pelotas[i].display();
    }
    
}

// ------------ Classes ------------- //

// --------Random Walker ------------ //

class RandomWalek {
  constructor(_number){
    this.blue = random(0,255);
    this.red = random(50,255);
    this.green = random(0,140);

    this.t = 0;
    this. tSpeed = random(1)
    this.noiseShitf = random(130);

    this.number = _number;
    this.pos = createVector(width/2, height/2);
    this.speed = createVector(random(-2, 4), random(-2, 4));
    this.diametro = random(5, 15);
    print('Hola soy una pelota' + this.number);
  }
  update(_t){

    this.speed.rotate(map(noise(this.t + this.noiseShitf), 0, 1, -0.3, 0.5));
    this.pos.add(this.speed);

    this.t += this.tSpeed;
  }
  display(){
    stroke("rgba(0,0,0,.2)");
    strokeWeight(2);
    fill(this.red, this.green, this.blue);
    ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);
  }
}

