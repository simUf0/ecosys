import { Injectable } from '@angular/core';
import { BaseService } from '../core';
import { EntityService } from './entity.service';
import { Entity, Environment, World, IEnvironmentAttributes } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService extends BaseService<Environment> {

  constructor(private entityService: EntityService) {
    super();
  }

  public create(world: World, attributes?: IEnvironmentAttributes): Environment {
    const instance = new Environment(++this._instancesCount, world, attributes);
    this._instances.push(instance);
    return instance;
  }

  public getOne(id: number): Environment {
    return this._instances.filter(v => v.id == id)[0];
  }

  public getOneByEntity(entity: Entity): Environment {
    return this.entityService.getOne(entity.id).environment;
  }

  public getAll(): Array<Environment> {
    return this._instances;
  }

  public getAllByWorld(world: World): Array<Environment> {
    return this._instances.filter(v => v.world === world);
  }

  public remove(environment: Environment): void {
    this._instances = this._instances.filter(v => v !== environment);
  }
}
