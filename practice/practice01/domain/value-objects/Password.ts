// Password validation including min and max length and including at least a special character
import { ValueObject } from "./ValueObject";
import { validatePassword } from "./shared/helpers";

export interface PasswordProps {
  password: string
}

export class Password extends ValueObject<PasswordProps> {
  // password: string;

  private constructor(props: PasswordProps) {
    super(props)
    // this.password = props.password;
    // console.log(`The password ${this.password} has been succesfully created`)
  }

  public getPassword(): string {
    console.log(`Your password is ${this.props.password}`);
    return this.props.password;
  }

  public static create(password: string): Password {
    if (!password || password.trim().length === 0) {
      throw new Error('password is required');
    }
    const validationErrors = validatePassword(password);
    if (validationErrors.length > 0) {
      throw new Error(`Password is invalid: ${validationErrors.join(", ")}`);
    }

    return new Password({ password: password })
  }
}