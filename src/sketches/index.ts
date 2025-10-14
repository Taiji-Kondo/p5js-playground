import p5 from 'p5';
import base from './base';
import grid from './grid';
import array from './array';

export type Sketch = (p: p5) => void;

export const sketches: Record<string, Sketch> = {
  base,
  grid,
  array
};

export const defaultSketchKey: keyof typeof sketches = 'base';
