import { Injectable } from '@angular/core';
import { BaseService } from '../core';
import { Environment, World, IWorldAttributes } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WorldService extends BaseService<World> {

  public create(attributes?: IWorldAttributes): World {
    const instance = new World(++this._instancesCount, attributes);
    this._instances.push(instance);
    return instance;
  }

  public getOne(id: number): World {
    return this._instances.filter(v => v.id == id)[0];
  }

  public getOneByEnvironment(environment: Environment): World {
    return this._instances.filter(v => v === environment.world)[0];
  }

  public getAll(): Array<World> {
    return this._instances;
  }

  public remove(world: World): void {
    this._instances = this._instances.filter(v => v !== world);
  }
}
