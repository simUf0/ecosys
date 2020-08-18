import { Injectable } from '@angular/core';
import { BaseService } from '../core/base.service';
import { Entity, Environment, Species } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EntityService extends BaseService<Entity> {

  public create(species: Species, environment: Environment): Entity {
    const instance = new Entity(++this._instancesCount, species, environment);
    this._instances.push(instance);
    return instance;
  }

  public getOne(id: number): Entity {
    return this._instances.filter(v => v.id == id)[0];
  }

  public getAll(): Array<Entity> {
    return this._instances;
  }

  public getAllBySpecies(species: Species): Array<Entity> {
    return this._instances.filter(v => v.species == species);
  }

  public getAllByEnvironment(environment: Environment): Array<Entity> {
    return this._instances.filter(v => v.environment == environment);
  }

  public remove(entity: Entity): void {
    this._instances = this._instances.filter(v => v !== entity);
  }
}
