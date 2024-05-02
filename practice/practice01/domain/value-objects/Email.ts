import { ValueObject } from "./ValueObject";

const EMAILPATTERN = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export interface EmailProps {
  email: string
}


export class Email extends ValueObject<EmailProps> {

  private constructor(props: EmailProps) {
    super(props)
  }

  public get email(): string {
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