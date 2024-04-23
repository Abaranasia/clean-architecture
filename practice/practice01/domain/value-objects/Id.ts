import { ValueObject } from "./ValueObject";
import { uidGenerator } from "./shared/helpers";

export interface IdProps {
  id: string
}


export class Id extends ValueObject<IdProps> {
  // id: string;

  private constructor(props: IdProps) {
    super(props)
    // this.id = props.id;
    // console.log(`The id ${this.id} has been succesfully created`)
  }

  public getId(): string {
    console.log(`Your id is ${this.props.id}`);
    return this.props.id;
  }

  public static create(): Id {
    const id = uidGenerator()

    return new Id({ id })
  }
}