export const ValidationMessages = {
  required: 'This field is required.',
  invalidBoolean: 'A valid boolean is required.',
  invalidNumber: 'A valid number is required.',
  invalidString: 'A valid string is required.',
  invalidArray: 'A valid array is required.',
  invalidISOFormat: 'A valid iso date format is required.',
  invalidChoice: (valueUsed: string, validValues: string) =>
    `${valueUsed || 'This field'} is not a valid choice. Use one of these values instead: [${validValues}].`,
  invalidDate: 'This field value must be greater then date now.',
  invalidFormat: (validFormat: string) => `This field has wrong format. Use this format instead: ${validFormat}.`,
  invalidEmailPassword: 'Invalid email and/or password.',
  alreadyExists: 'Already exists.',
  passwordMismatch: 'Password mismatch.'
}

export const ErrorMessages = {
  unauthorized401: 'Authentication credentials were not provided.',
  forbidden403: 'You do not have permission to perform this action.',
  notFound404: 'Not found.'
}
