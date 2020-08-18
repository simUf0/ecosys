import { Injectable } from '@angular/core';
import { BaseService } from '../core';
import { NutritionalType } from '../enums';
import { EntityService } from './entity.service';
import { Entity, Species, ISpeciesAttributes } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService extends BaseService<Species> {

  constructor(private entityService: EntityService) {
    super();
  }

  public create(
    name: string,
    nutritionalType: NutritionalType,
    attributes: ISpeciesAttributes): Species {

    const instance = new Species(++this._instancesCount, name, nutritionalType, attributes);
    this._instances.push(instance);
    return instance;
  }

  public getOne(id: number): Species {
    return this._instances.filter(v => v.id == id)[0];
  }

  public getOneByEntity(entity: Entity): Species {
    return this.entityService.getOne(entity.id).species;
  }

  public getAll(): Array<Species> {
    return this._instances;
  }

  public getAllByNutritionalType(nutritionalType: NutritionalType): Array<Species> {
    return this._instances.filter(v => v.nutritionalType == nutritionalType);
  }

  public remove(species: Species): void {
    this._instances = this._instances.filter(v => v !== species);
  }
}
