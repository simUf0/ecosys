import { BaseModel } from '../core';

export class World extends BaseModel {

  private static DEFAULT_TIMESPEED = 1;

  private _timespeed = World.DEFAULT_TIMESPEED;
  
  public get timespeed(): number {
    return this._timespeed;
  }

  public set timespeed(v: number) {
    if (v >= 0 && v <= 100) this._timespeed = v;
  }
  
  constructor(id: number, attributes: IWorldAttributes) {
    super(id);
    if (attributes) {
      this.timespeed = attributes.timespeed;
    }
  }
}

export interface IWorldAttributes {
  timespeed?: number;
}
