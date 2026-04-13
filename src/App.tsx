import { Navigate, Route, Routes } from 'react-router-dom'

import { AppShell } from '@/components/layout/AppShell'
import { FormPage } from '@/pages/FormPage'
import { ListingPage } from '@/pages/ListingPage'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Navigate to="/listing" replace />} />
          <Route path="/listing" element={<ListingPage />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/listing" replace />} />
      </Routes>
      <Toaster richColors />
    </>
  )
}

export default App
