import p5 from 'p5';

const base = (p: p5) => {
  const width = 800
  const height = 800
  const pos = {x: width / 2, y: height / 2} satisfies {x: number, y: number}

  p.setup = () => {
    p.createCanvas(width, height);
    p.noStroke()
  };

  p.draw = () => {
    p.background(220)
    pos.x = pos.x + p.random(-10, 10)
    pos.y = pos.y + p.random(-10, 10)

    p.fill(0)
    p.ellipse(pos.x, pos.y, 20, 20)
  };
};

export default base;
