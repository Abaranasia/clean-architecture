import { ValueObject } from "./ValueObject";
import { EMAILPATTERN } from "./shared/constants";

export interface EmailProps {
  email: string
}


export class Email extends ValueObject<EmailProps> {
  // email: string;

  private constructor(props: EmailProps) {
    super(props)
    // this.email = props.email;
    // console.log(`The email ${this.email} has been succesfully created`)
  }

  public getEmail(): string {
    console.log(`Your email is ${this.props.email}`);
    return this.props.email;
  }

  public static validateEmail = (email: string): boolean => {
    return !!email.match(EMAILPATTERN);
  };

  public static create(email: string): Email {
    if (!email || email.trim().length === 0) {
      throw new Error('Email is required');
    }

    if (!Email.validateEmail(email)) {
      throw new Error('Email is invalid');
    }

    return new Email({ email: email.trim() })
  }
}