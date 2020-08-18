export abstract class BaseService<T> {

  protected _instances: Array<T>;
  protected _instancesCount: number;

  constructor() {
    this._instances = [];
    this._instancesCount = this._instances.length;
  }

}