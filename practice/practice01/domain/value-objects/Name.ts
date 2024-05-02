import { ValueObject } from "./ValueObject";

export interface NameProps {
  name: string
}

export class Name extends ValueObject<NameProps> {

  private constructor(props: NameProps) {
    super(props)
  }

  public get name(): string {
    return this.props.name;
  }

  // Not usable since value-objects should be inmutable
  public set name(name: string) {
    if (typeof (name) != "string" || !name || name.trim().length === 0) {
      throw new Error('Name is not valid');
    }
    this.props.name = name
  }

  public static create(name: string): Name {
    if (!name || name.trim().length === 0) {
      throw new Error('Name is required');
    }
    return new Name({ name: name.trim() })
  }
}