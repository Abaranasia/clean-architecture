import { ValueObject } from "./ValueObject";

export interface NameProps {
  value: string
}

export class Name extends ValueObject<NameProps> {

  private constructor(props: NameProps) {
    super(props)
  }

  public get name(): string {
    return this.props.value;
  }

  // Not usable since value-objects should be inmutable
  public set name(name: string) {
    if (typeof (name) != "string" || !name || name.trim().length === 0) {
      throw new Error('Name is not valid');
    }
    this.props.value = name
  }

  public static create(name: string): Name {
    if (!name || name.trim().length === 0) {
      throw new Error('Name is required');
    }
    return new Name({ value: name.trim() })
  }
}