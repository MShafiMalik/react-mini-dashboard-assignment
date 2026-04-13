import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useSubmitUserRegistrationMutation } from '@/features/form/formApi'
import { formSchema, type FormValues } from '@/features/form/schema'
import { ErrorAlert } from '@/pages/FormPage/components/ErrorAlert'
import { FormInputField } from '@/pages/FormPage/components/FormInputField'

const defaultValues: FormValues = {
  fullName: '',
  email: '',
  phoneNumber: '',
  password: '',
}

export function FormPage() {
  const [retryPayload, setRetryPayload] = useState<FormValues | null>(null)
  const [submitUser, { isError, isLoading, reset: resetSubmitState }] =
    useSubmitUserRegistrationMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onSubmit',
  })

  const clearApiError = () => {
    resetSubmitState()
  }

  const runSubmit = async (data: FormValues) => {
    setRetryPayload(data)
    try {
      await submitUser(data).unwrap()
      toast.success('Form submitted successfully.')
      reset(defaultValues)
      resetSubmitState()
      setRetryPayload(null)
    } catch {
      void 0
    }
  }

  const onValidSubmit = (data: FormValues) => {
    void runSubmit(data)
  }

  const onSubmitForm = handleSubmit(onValidSubmit)

  const handleRetry = () => {
    if (retryPayload) void runSubmit(retryPayload)
  }

  const handleFieldChange = () => {
    clearApiError()
  }

  return (
    <Card className="border-border/80 bg-card/95 shadow-sm dark:bg-card/90">
      <CardHeader>
        <CardTitle>User Input Form</CardTitle>
        <CardDescription>
          Enter Full Name, Email, Phone Number, and Password. All fields are required.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={(event) => void onSubmitForm(event)} noValidate>
          {isError && <ErrorAlert onRetry={handleRetry} />}

          <div className="grid gap-4 sm:grid-cols-2">
            <FormInputField
              id="fullName"
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              inputProps={register('fullName', { onChange: handleFieldChange })}
              error={errors.fullName?.message}
            />

            <FormInputField
              id="email"
              label="Email"
              type="email"
              placeholder="example@email.com"
              inputProps={register('email', { onChange: handleFieldChange })}
              error={errors.email?.message}
            />

            <FormInputField
              id="phoneNumber"
              label="Phone Number"
              type="tel"
              placeholder="+92 300 1234567"
              inputProps={register('phoneNumber', { onChange: handleFieldChange })}
              error={errors.phoneNumber?.message}
            />

            <FormInputField
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              inputProps={register('password', { onChange: handleFieldChange })}
              error={errors.password?.message}
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2">
            <Button type="submit" disabled={isLoading} className="h-8 min-w-28 px-4 sm:min-w-32">
              {isLoading ? 'Submitting…' : 'Submit'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
