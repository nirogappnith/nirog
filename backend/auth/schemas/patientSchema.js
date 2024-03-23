const zod = require('zod')

const userRegistrationSchema = zod.object({
  name: zod.string(),
  sex: zod.string(),
  dob: zod.date().optional(),
  age: zod.number(),
  hospitals: zod.array(),
  prevReport: zod.array(),
  curReport: zod.string(),
  DoctorAssigned: zod.string(),
  curToken: zod.string() ,
  email: zod.string(),
  mobile: zod.number(),
  createdAt: zod.date().optional,
  otp: zod.number().optional(),
  done: zod.boolean().optional()
})

const userLoginSchema = zod.object({
  email: zod.string()
})

module.exports = {
  userRegistrationSchema,
  userLoginSchema
};