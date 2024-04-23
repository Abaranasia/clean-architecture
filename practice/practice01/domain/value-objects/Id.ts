import { ValueObject } from "./ValueObject";
import { uidGenerator } from "./shared/utils";

export interface IdProps {
  id: string
}

export class Id extends ValueObject<IdProps> {

  private constructor(props: IdProps) {
    super(props)
  }

  public get id(): string {
    return this.props.id;
  }

  public static create(): Id {
    const id = uidGenerator()

    return new Id({ id })
  }
}