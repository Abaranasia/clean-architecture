// Password validation including min and max length and including at least a special character
import { ValueObject } from "./ValueObject";
import { validatePassword } from "./shared/utils";

export interface PasswordProps {
  value: string
}

export class Password extends ValueObject<PasswordProps> {

  private constructor(props: PasswordProps) {
    super(props)
  }

  public get password(): string {
    return this.props.value;
  }

  public static create(password: string): Password {
    if (!password || password.trim().length === 0) {
      throw new Error('password is required');
    }
    const validationErrors = validatePassword(password);
    if (validationErrors.length > 0) {
      throw new Error(`Password is invalid: ${validationErrors.join(", ")}`);
    }

    return new Password({ value: password })
  }
}