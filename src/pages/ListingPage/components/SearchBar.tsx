import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'

type SearchBarProps = {
  value: string
  onSearchChange: (value: string) => void
}

export function SearchBar({ value, onSearchChange }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      onSearchChange(inputValue)
    }, 300)

    return () => window.clearTimeout(timer)
  }, [inputValue, onSearchChange])

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute top-2 left-2 size-4 text-muted-foreground" />
      <Input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Search by product name..."
        className="pl-8"
      />
    </div>
  )
}
