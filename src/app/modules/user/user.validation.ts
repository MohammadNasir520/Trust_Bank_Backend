import { z } from 'zod';

const UserSignUpZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }),
    email: z.string({ required_error: 'email is required' }),
    role: z
      .enum(['client', 'super_admin', 'admin'], {
        required_error:
          'role is required and must be  super_admin admin client',
      })
      .optional(),
    password: z.string({ required_error: 'password is required' }),
  }),
});
const UserSignInZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'email is required' }),

    password: z.string({ required_error: 'password is required' }),
  }),
});

export const userValidation = {
  UserSignUpZodSchema,
  UserSignInZodSchema,
};
