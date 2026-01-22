import { Id } from "../../value-objects/Id";

export interface EntityData { id: Id };

const isEntity = (value: any): value is Entity<any> => value instanceof Entity;

export abstract class Entity<T> implements EntityData {
  constructor(public id: Id) { }

  public equals(object?: Entity<T>): boolean {
    if (object === null || object == undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this.id.equals(object.id);
  }

}