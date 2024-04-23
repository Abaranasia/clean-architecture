import { PASSWORD_ERRORS, PASSWORD_PATTERNS } from "./constants";

47

export const validatePassword = (password: string): Array<string> => {

  const errors = [];
  if (password.length < PASSWORD_PATTERNS.pwdLength) {
    errors.push(PASSWORD_ERRORS.invalidLength);
  }
  if (password.search(PASSWORD_PATTERNS.letters) < 0) {
    errors.push(PASSWORD_ERRORS.noLetters);
  }
  if (password.search(PASSWORD_PATTERNS.numbers) < 0) {
    errors.push(PASSWORD_ERRORS.noNumbers);
  }
  if (password.search(PASSWORD_PATTERNS.symbols) < 0) {
    errors.push(PASSWORD_ERRORS.noSymbols);
  }
  if (password.search(PASSWORD_PATTERNS.whiteSpace) < 0) {
    errors.push(PASSWORD_ERRORS.hasWhiteSpace);
  }
  return errors;
}

export const uidGenerator = (): string => {
  return (new Date().getTime() + Math.random().toString().slice(2)).toString();
}