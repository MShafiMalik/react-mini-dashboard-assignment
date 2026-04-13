import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type UserRegistrationPayload = {
  fullName: string
  email: string
  phoneNumber: string
  password: string
}

const rawFormSubmitUrl = import.meta.env.VITE_FORM_SUBMIT_URL as unknown

const FORM_SUBMIT_URL =
  typeof rawFormSubmitUrl === 'string' && rawFormSubmitUrl.length > 0
    ? rawFormSubmitUrl
    : 'https://jsonplaceholder.typicode.com/posts'

type FakePostResponse = {
  id: number
  title: string
  body: string
  userId: number
}

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    submitUserRegistration: builder.mutation<FakePostResponse, UserRegistrationPayload>({
      queryFn: async (formData) => {
        const response = await fetch(FORM_SUBMIT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: `Registration: ${formData.fullName}`,
            body: JSON.stringify({
              fullName: formData.fullName,
              email: formData.email,
              phoneNumber: formData.phoneNumber,
              password: formData.password,
            }),
            userId: 1,
          }),
        })

        if (!response.ok) {
          return {
            error: {
              status: response.status,
              data: await response.text().catch(() => 'Request failed'),
            },
          }
        }

        const data = (await response.json()) as FakePostResponse
        return { data }
      },
    }),
  }),
})

export const { useSubmitUserRegistrationMutation } = formApi
