// eslint-disable  @typescript-eslint/no-unused-vars
import Input from "./input";

export type EntityEffector = (entity: Entity) => void;

export default abstract class Entity {
  x: number;
  y: number;
  destroyed: boolean = false;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  init(_context: { ctx: CanvasRenderingContext2D }) {}
  draw(_context: {
    ctx: CanvasRenderingContext2D;
    time: {
      deltaTime: number;
    };
  }) {}
  update(_context: {
    time: {
      deltaTime: number;
    };
    input: Input;
    addEntity: EntityEffector;
    destroyEntity: EntityEffector;
  }) {}

  destroy() {
    this.destroyed = true;
  }
}
