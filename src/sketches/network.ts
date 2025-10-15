import p5 from 'p5';

const network = (p: p5) => {
  const dots: {x: number, y: number}[] = []

  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(0);

    for (let i = 0; i < 50; i++) {
      dots.push({x: p.random(p.width), y: p.random(p.height)})
    }
  };

  p.draw = () => {
    p.background(0);

    dots.forEach((dot) => {
      p.fill(255)
      p.ellipse(dot.x, dot.y, 10, 10);

      dots.forEach((otherDot) => {
        if (dot === otherDot) return;

        const distance = p.dist(dot.x, dot.y, otherDot.x, otherDot.y);
        if (distance > 200) return;

        p.stroke(255)
        p.line(dot.x, dot.y, otherDot.x, otherDot.y);
      });
    });
  };
};

export default network;
