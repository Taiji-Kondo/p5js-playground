import p5 from 'p5';

const base = (p: p5) => {
  const width = 800
  const height = 800
  const initial = {x: width / 2, y: height / 2, size: 0, color: 255} satisfies {x: number, y: number, size: number, color: number}
  const agents = Array.from({length: 1000}, () => ({...initial, size: p.random(20, 50), color: p.random(0, 100)})) satisfies typeof initial[]

  p.setup = () => {
    p.createCanvas(width, height);
    p.noStroke()
  };

  p.draw = () => {
    p.background(220)

    for (let i = 0; i < agents.length; i++) {
      agents[i].x = agents[i].x + p.random(-10, 10)
      agents[i].y = agents[i].y + p.random(-10, 10)

      p.fill(agents[i].color, 0, 0)
      p.ellipse(agents[i].x, agents[i].y, agents[i].size, agents[i].size)
    }
  };
};

export default base;
