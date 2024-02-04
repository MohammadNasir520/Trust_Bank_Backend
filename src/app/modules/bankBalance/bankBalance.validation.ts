import { z } from 'zod';

const CreateZodSchema = z.object({
  body: z.object({
    currency: z.enum(['USD', 'BDT'], {
      required_error: 'currency must be  USD , BDT',
    }),
    balance: z.number({ required_error: 'balance  is required' }),
  }),
});
const updateZodSchema = z.object({
  body: z.object({
    currency: z
      .enum(['USD', 'BDT'], {
        required_error: 'currency must be  USD , BDT',
      })
      .optional(),
    balance: z.number({ required_error: 'balance  is required' }).optional(),
  }),
});

export const BankBalanceValidation = {
  CreateZodSchema,
  updateZodSchema,
};
