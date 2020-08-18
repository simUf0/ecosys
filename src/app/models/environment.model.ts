import { BaseModel } from '../core/base.model';
import { World } from './world.model';

export class Environment extends BaseModel {

  private static DEFAULT_OXYGEN_LEVEL = .8;
  private static DEFAULT_NUTRIENT_LEVEL x= .5;

  private _world: World;
  private _oxygenLevel = Environment.DEFAULT_OXYGEN_LEVEL;
  private _nutrientLevel = Environment.DEFAULT_NUTRIENT_LEVEL;
  
  public get world(): World {
    return this._world;
  }

  public get oxygenLevel(): number {
    return this._oxygenLevel;
  }

  public get nutrientLevel(): number {
    return this._nutrientLevel;
  }

  public set oxygenLevel(v: number) {
    if (v >= 0 && v <= 1) this._oxygenLevel = v;
  }

  public set nutrientLevel(v: number) {
    if (v >= 0 && v <= 1) this._nutrientLevel = v;
  }

  constructor(id: number, world: World, attributes: IEnvironmentAttributes) {
    super(id);
    this._world = world;
    if (attributes) {
      this.oxygenLevel = attributes.oxygenLevel;
      this.nutrientLevel = attributes.nutrientLevel;
    }
  }
}

export interface IEnvironmentAttributes {
  oxygenLevel?: number;
  nutrientLevel?: number;
}