import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common'
import { ObjectSchema } from 'joi'
import { ValidationMessages } from 'src/utils/messages'

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value) {
    this.schema = this.schema.messages({
      'any.required': ValidationMessages.required,
      'number.base': ValidationMessages.invalidNumber,
      'string.base': ValidationMessages.invalidString,
      'boolean.base': ValidationMessages.invalidBoolean,
      'any.only': ValidationMessages.passwordMismatch
    })

    const { error } = this.schema.validate(value)
    if (error) {
      const errors = error.details.reduce((obj: object, item) => {
        obj[item.path[0]] = [item.message]
        return obj
      }, {})

      throw new BadRequestException(errors)
    }
    return value
  }
}
