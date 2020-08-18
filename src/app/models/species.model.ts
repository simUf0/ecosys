import { BaseModel } from '../core';
import { NutritionalType } from '../enums';

export class Species extends BaseModel {

  private _name: string;
  private _nutritionalType: NutritionalType;
  private _nutritionalNeeds: number;
  private _oxygenNeeds: number;
  private _averageWeight: number;
  private _averageSize: number;
  private _averageSpeed: number;

  public get name(): string {
    return this._name;
  }

  public get nutritionalType(): NutritionalType {
    return this._nutritionalType;
  }

  public get nutritionalNeeds(): number {
    return this._nutritionalNeeds;
  }

  public get oxygenNeeds(): number {
    return this._oxygenNeeds;
  }

  public get averageWeight(): number {
    return this._averageWeight;
  }

  public get averageSize(): number {
    return this._averageSize;
  }

  public get averageSpeed(): number {
    return this._averageSpeed;
  }

  public set nutritionalNeeds(v: number) {
    if (v >= 0) this._nutritionalNeeds = v;
  }

  public set oxygenNeeds(v: number) {
    if (v >= 0) this._oxygenNeeds = v;
  }

  public set averageWeight(v: number) {
    if (v >= 0) this._averageWeight = v;
  }

  public set averageSize(v: number) {
    if (v >= 0) this._averageSize = v;
  }

  public set averageSpeed(v: number) {
    if (v >= 0) this._averageSpeed = v;
  }

  constructor(
    id: number,
    name: string,
    nutritionalType: NutritionalType,
    attributes: ISpeciesAttributes) {

    super(id);
    this._name = name;
    this._nutritionalType = nutritionalType;
    this.nutritionalNeeds = attributes.nutritionalNeeds;
    this.oxygenNeeds = attributes.oxygenNeeds;
    this.averageWeight = attributes.averageWeight;
    this.averageSize = attributes.averageSize;
    this.averageSpeed = attributes.averageSpeed;
  }
}

export interface ISpeciesAttributes {
  nutritionalNeeds: number;
  oxygenNeeds: number;
  averageWeight: number;
  averageSize: number;
  averageSpeed: number;
}