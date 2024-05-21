
export const PASSWORD_PATTERNS = {
  pwdLength: 8,
  numbers: /[0-9]/,
  letters: /[a-z]/i,
  symbols: /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/,
  whiteSpace: /^\S*$/
}

export const PASSWORD_ERRORS = {
  invalidLength: 'Your password must be at least 8 characters',
  noLetters: 'Your password must contain at least one letter',
  noNumbers: 'Your password must contain at least one digit',
  noSymbols: 'Your password must contain at least one symbol',
  hasWhiteSpace: 'White spaces are not allowed'
}
