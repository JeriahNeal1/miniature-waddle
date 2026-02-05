'use client'

import { useState } from 'react'

interface MathInputProps {
  value: string
  onChange: (value: string) => void
}

export default function MathInput({ value, onChange }: MathInputProps) {
  const [localValue, setLocalValue] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setLocalValue(newValue)
    onChange(newValue)
  }

  return (
    <div className="border border-input rounded-md p-2 min-h-[60px] bg-background">
      <textarea
        value={localValue}
        onChange={handleChange}
        className="w-full min-h-[40px] bg-transparent border-none outline-none resize-none font-mono text-base"
        placeholder="Enter mathematical expression (e.g., 2 + 2, sqrt(16), sin(pi/2))"
        rows={2}
      />
      <div className="text-xs text-muted-foreground mt-1">
        Supports: +, -, *, /, ^, sqrt(), sin(), cos(), tan(), log(), etc.
      </div>
    </div>
  )
}
