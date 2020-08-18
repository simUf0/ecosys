import { BaseModel } from '../core';
import { Species } from './species.model';
import { Environment } from './environment.model';

export class Entity extends BaseModel {

  private _name: string;
  private _species: Species;
  private _environment: Environment;
  private _oxygen: number;
  private _energy: number;
  private _weight: number;
  private _size: number;
  private _speed: number;

  public get name(): string {
    return this._name;
  }

  public get species(): Species {
    return this._species;
  }

  public get environment(): Environment {
    return this._environment;
  }

  public get oxygen(): number {
    return this._oxygen;
  }

  public get energy(): number {
    return this._energy;
  }

  public get weight(): number {
    return this._weight;
  }

  public get size(): number {
    return this._size;
  }

  public get speed(): number {
    return this._speed;
  }

  public set environment(v: Environment) {
    this._environment = v;
  }

  public set oxygen(v: number) {
    if (v >= 0) this._oxygen = v;
  }

  public set energy(v: number) {
    if (v >= 0) this._energy = v;
  }

  public set weight(v: number) {
    if (v >= 0) this._weight = v;
  }

  public set size(v: number) {
    if (v >= 0) this._size = v;
  }

  public set speed(v: number) {
    if (v >= 0) this._speed = v;
  }
  
  constructor(id: number, species: Species, environment: Environment) {
    super(id);
    this._name = `${species.name}-${id}`;
    this._species = species;
    this._environment = environment;
    this.oxygen = species.oxygenNeeds;
    this.energy = species.nutritionalNeeds;
    this.weight = species.averageWeight;
    this.size = species.averageSize;
    this.speed = species.averageSpeed;
  }
}