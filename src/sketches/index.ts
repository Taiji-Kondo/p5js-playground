import p5 from 'p5';
import base from './base';
import grid from './grid';
import array from './array';
import network from './network';

export type Sketch = (p: p5) => void;

export const sketches: Record<string, Sketch> = {
  base,
  grid,
  array,
  network
};

export const defaultSketchKey: keyof typeof sketches = 'base';
