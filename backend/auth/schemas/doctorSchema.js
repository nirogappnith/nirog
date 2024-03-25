const zod = require('zod')

const doctorRegistrationSchema = zod.object({
  name: zod.string(),
  password: zod.string(),
  exp: zod.string().optional(),
  patients: zod.array().optional(),
  today: zod.array().optional(),
  tomorrow: zod.array().optional(),
  email: zod.string(),
  mobile: zod.number(),
  specialisation: zod.string().optional(),
  createdAt: zod.date().optional()
})

const doctorLoginSchema = zod.object({
  email: zod.string(),
  password: zod.string()
})

module.exports = {
  doctorRegistrationSchema,
  doctorLoginSchema
};