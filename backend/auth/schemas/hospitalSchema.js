const zod = require("zod");

const hospitalRegistrationSchema = zod.object({
  type: zod.string().optional(),
  ENT: zod
    .object({
      senior: zod.object(),
      junior: zod.object(),
    })
    .optional(),
  Ortho: zod
    .object({
      senior: zod.object(),
      junior: zod.object(),
    })
    .optional(),
  Neuro: zod
    .object({
      senior: zod.object(),
      junior: zod.object(),
    })
    .optional(),
  Pediatrics: zod
    .object({
      senior: zod.object(),
      junior: zod.object(),
    })
    .optional(),
  Cardio: zod
    .object({
      senior: zod.object(),
      junior: zod.object(),
    })
    .optional(),
  Pulmonary: zod
    .object({
      senior: zod.object(),
      junior: zod.object(),
    })
    .optional(),
  Dental: zod
    .object({
      senior: zod.object(),
      junior: zod.object(),
    })
    .optional(),
  Gynecology: zod
    .object({
      senior: zod.object(),
      junior: zod.object(),
    })
    .optional(),
  Dermatology: zod
    .object({
      senior: zod.object(),
      junior: zod.object(),
    })
    .optional(),
  Dental: zod
    .object({
      senior: zod.object(),
      junior: zod.object(),
    })
    .optional(),
  Psychiatry: zod
    .object({
      senior: zod.object(),
      junior: zod.object(),
    })
    .optional(),
  name: zod.string(),
  address: zod.string(),
  pincode: zod.number(),
  patients: zod.number().optional(),
  password: zod.string(),
  email: zod.string(),
});

const hospitalLoginSchema = zod.object({
  email: zod.string(),
  password: zod.string(),
});

module.exports = {
  hospitalLoginSchema,
  hospitalRegistrationSchema,
};
