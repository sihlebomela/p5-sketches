var bg;

function preload() {
  bg = loadImage("https://i.ibb.co/gPNBMMf/oldie-1.jpg");
}

class Noise {
  constructor() {
    this.width = 1;
    this.height = this.width;
    this.position = {
      x: random(0 + this.width, windowWidth - 20),
      y: random(0 + this.height, windowHeight - 20),
    };
  }

  add(color = "white") {
    rect(this.position.x, this.position.y, this.width, this.height);
    fill(color);
  }
}

class LineNoise {
  constructor() {
    this.width = 2;
    this.height = this.width * 299;
    this.position = {
      x: random(0 + 20, 300),
      y1: random(0 + this.height, 0),
      y2: random(0 + this.height, 10),
    };
  }

  add(color = "white") {
    setTimeout(() => {
      line(
        this.position.x,
        this.position.y1,
        this.position.x,
        this.position.y2
      );
      stroke(color);
    }, random(0, 300));
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(bg);
  bg.filter(GRAY);
  
  let noise1 = new Noise();
  noise1.add("white");
  
  let noise2 = new Noise();
  noise2.add("white");

  let line1 = new LineNoise();
  line1.add();
}
