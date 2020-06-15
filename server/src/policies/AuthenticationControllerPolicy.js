const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9!@#$%&*]{8,32}$')).required()
    }

    const {value, error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Must provide a valid email address.'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Password does not meet complexity rules:<br>
              1. Can only have: lowercase, uppercase, numbers and !@#$%&*<br>
              2. Must be at least 8 characters long and not greater than 32 characters in length.`
          })
          break
        case 'first_name':
          res.status(400).send({
            error: `First name invalid`
          })
          break
        case 'last_name':
          res.status(400).send({
            error: `Last name invalid`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
          break
      }
    } else {
      next()
    }
  }
}