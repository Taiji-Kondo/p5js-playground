import p5 from 'p5';

const network = (p: p5) => {
  const dots: {x: number, y: number}[] = []

  const createNetwork = (dotsArray: typeof dots, level: number) => {
    dotsArray.forEach((dot) => {
      const alpha = p.map(10 - level * level, 10,0, 255, 0)

      p.fill(255, 255, 255, alpha)
      p.ellipse(dot.x, dot.y, 10, 10);

      dotsArray.forEach((otherDot) => {
        if (dot === otherDot) return;

        const distance = p.dist(dot.x, dot.y, otherDot.x, otherDot.y);
        if (distance > 200) return;

        p.stroke(255, 255, 255, alpha)
        p.line(dot.x, dot.y, otherDot.x, otherDot.y);
      });
    });
  }

  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(0);

    for (let i = 0; i < 200; i++) {
      dots.push({x: p.random(p.width), y: p.random(p.height)})
    }
  };

  p.draw = () => {
    p.background(0);

    createNetwork(dots.slice(0, 50), 1)
    createNetwork(dots.slice(50, 100), 2)
    createNetwork(dots.slice(100, 200), 3)
  };
};

export default network;
