import { ValueObject } from "./ValueObject";

export interface NameProps {
  name: string
}

export class Name extends ValueObject<NameProps> {

  private constructor(props: NameProps) {
    super(props)
  }

  public get name(): string {
    console.log(`Your name is ${this.props.name}`);
    return this.props.name;
  }

  public set name(name: string) {
    console.log(`Your name is ${this.props.name}`);
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