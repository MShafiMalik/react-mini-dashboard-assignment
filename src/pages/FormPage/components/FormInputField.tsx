import type { ComponentProps } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type FormInputFieldProps = {
  id: string
  label: string
  type?: ComponentProps<typeof Input>['type']
  placeholder: string
  error?: string
  required?: boolean
  inputProps: Omit<ComponentProps<typeof Input>, 'id' | 'type' | 'placeholder' | 'aria-invalid'>
}

export function FormInputField({
  id,
  label,
  type = 'text',
  placeholder,
  error,
  required = true,
  inputProps,
}: FormInputFieldProps) {
  return (
    <div className="space-y-2.5">
      <Label htmlFor={id} className="inline-flex items-baseline gap-0.5">
        <span>{label}</span>
        {required ? (
          <span className="text-destructive" aria-hidden>
            *
          </span>
        ) : null}
      </Label>
      <Input
        {...inputProps}
        id={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-required={required}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
