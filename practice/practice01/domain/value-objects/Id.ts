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

  public static create(id: string): Id {
    if ((id).length == 0 ) {
      throw new Error("Id is required");
    }
    return new Id({ id });
  }

  public static generate(): Id {
    return Id.create(uidGenerator())
  }
}