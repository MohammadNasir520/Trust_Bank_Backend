"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankBalanceValidation = void 0;
const zod_1 = require("zod");
const CreateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        currency: zod_1.z.enum(['USD', 'BDT', 'EURO'], {
            required_error: 'currency must be  USD , BDT',
        }),
        balance: zod_1.z.number({ required_error: 'balance  is required' }),
    }),
});
const updateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        currency: zod_1.z
            .enum(['USD', 'BDT'], {
            required_error: 'currency must be  USD , BDT',
        })
            .optional(),
        balance: zod_1.z.number({ required_error: 'balance  is required' }).optional(),
    }),
});
exports.BankBalanceValidation = {
    CreateZodSchema,
    updateZodSchema,
};
