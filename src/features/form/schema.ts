import { z } from 'zod'

export const formSchema = z.object({
  fullName: z.string().trim().min(1, 'Full Name is required.'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required.')
    .email('Please enter a valid email address.'),
  phoneNumber: z.string().trim().min(1, 'Phone Number is required.'),
  password: z
    .string()
    .trim()
    .superRefine((val, ctx) => {
      if (!val) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Password is required.' })
        return
      }
      const missing: string[] = []
      if (val.length < 6) missing.push('at least 6 characters')
      if (!/[A-Z]/.test(val)) missing.push('one uppercase letter (A–Z)')
      if (!/[a-z]/.test(val)) missing.push('one lowercase letter (a–z)')
      if (!/[0-9]/.test(val)) missing.push('one number (0–9)')
      if (!/[^A-Za-z0-9]/.test(val)) missing.push('one special character (!@# etc.)')
      if (missing.length > 0) {
        const missingText =
          missing.length === 1
            ? missing[0]
            : `${missing.slice(0, -1).join(', ')} and ${missing[missing.length - 1]}`
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Password must include ${missingText}`,
        })
      }
    }),
})

export type FormValues = z.infer<typeof formSchema>
