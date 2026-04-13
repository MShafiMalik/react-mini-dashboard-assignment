import { useEffect, useRef, useState } from 'react'
import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'

const SEARCH_DEBOUNCE_MS = 300

type SearchBarProps = {
  value: string
  onSearchChange: (value: string) => void
}

export function SearchBar({ value, onSearchChange }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(value)
  const onSearchChangeRef = useRef(onSearchChange)

  useEffect(() => {
    onSearchChangeRef.current = onSearchChange
  }, [onSearchChange])

  useEffect(() => {
    setInputValue(value)
  }, [value])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      onSearchChangeRef.current(inputValue)
    }, SEARCH_DEBOUNCE_MS)

    return () => window.clearTimeout(timer)
  }, [inputValue])

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
