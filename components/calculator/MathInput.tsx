'use client'

import { useEffect, useRef } from 'react'

interface MathInputProps {
  value: string
  onChange: (value: string) => void
}

interface MathField {
  latex: (value?: string) => string
}

export default function MathInput({ value, onChange }: MathInputProps) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const mathFieldRef = useRef<MathField | null>(null)

  useEffect(() => {
    // Dynamically import MathQuill only on client-side
    const initMathQuill = async () => {
      if (typeof window === 'undefined' || !spanRef.current) return

      try {
        // Load MathQuill CSS
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://cdn.jsdelivr.net/npm/mathquill@0.10.1/build/mathquill.css'
        document.head.appendChild(link)

        // Load jQuery (required by MathQuill)
        if (!(window as Window & { jQuery?: unknown }).jQuery) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement('script')
            script.src = 'https://code.jquery.com/jquery-3.6.0.min.js'
            script.onload = () => resolve()
            script.onerror = reject
            document.head.appendChild(script)
          })
        }

        // Load MathQuill
        if (!(window as Window & { MathQuill?: unknown }).MathQuill) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement('script')
            script.src = 'https://cdn.jsdelivr.net/npm/mathquill@0.10.1/build/mathquill.js'
            script.onload = () => resolve()
            script.onerror = reject
            document.head.appendChild(script)
          })
        }

        const MQ = (
          window as Window & {
            MathQuill?: {
              getInterface: (version: number) => {
                MathField: (
                  el: HTMLElement,
                  config: { handlers: { edit: () => void } }
                ) => MathField
              }
            }
          }
        ).MathQuill?.getInterface(2)

        if (!MQ) {
          throw new Error('MathQuill failed to load')
        }

        const mathField = MQ.MathField(spanRef.current, {
          handlers: {
            edit: function () {
              const latex = mathField.latex()
              onChange(latex)
            },
          },
        })

        mathFieldRef.current = mathField

        // Set initial value
        if (value) {
          mathField.latex(value)
        }
      } catch (error) {
        console.error('Failed to initialize MathQuill:', error)
      }
    }

    void initMathQuill()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update MathQuill when value changes externally
  useEffect(() => {
    if (mathFieldRef.current && mathFieldRef.current.latex() !== value) {
      mathFieldRef.current.latex(value)
    }
  }, [value])

  return (
    <div className="border border-input rounded-md p-2 min-h-[60px] bg-background">
      <span ref={spanRef} />
    </div>
  )
}
