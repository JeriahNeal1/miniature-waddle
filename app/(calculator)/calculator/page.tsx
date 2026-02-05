'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { evaluate } from '@/lib/math/mathEngine'
import { saveSession, loadSession, SESSION_KEY } from '@/lib/math/sessionStorage'
import CalculatorDisplay from '@/components/calculator/CalculatorDisplay'
import CalculatorButtons from '@/components/calculator/CalculatorButtons'

// Dynamic import for MathQuill with no SSR
const MathInput = dynamic(() => import('@/components/calculator/MathInput'), {
  ssr: false,
  loading: () => <div className="h-[60px] animate-pulse bg-muted rounded-md" />,
})

export default function CalculatorPage() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [history, setHistory] = useState<Array<{ expression: string; result: string }>>([])
  const [error, setError] = useState<string | null>(null)

  // Load session from localStorage on mount
  useEffect(() => {
    const session = loadSession()
    if (session) {
      setHistory(session.history || [])
    }
  }, [])

  // Save session to localStorage whenever history changes
  useEffect(() => {
    if (history.length > 0) {
      saveSession({ history })
    }
  }, [history])

  const handleCalculate = () => {
    if (!expression.trim()) {
      setError('Please enter an expression')
      return
    }

    try {
      const calculatedResult = evaluate(expression)
      setResult(calculatedResult)
      setError(null)
      setHistory((prev) => [...prev, { expression, result: calculatedResult }])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Calculation error')
      setResult(null)
    }
  }

  const handleClear = () => {
    setExpression('')
    setResult(null)
    setError(null)
  }

  const handleClearHistory = () => {
    setHistory([])
    localStorage.removeItem(SESSION_KEY)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            PhySim Calculator
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Advanced symbolic calculator for AP Physics & Calculus
          </p>
        </header>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Expression
            </label>
            <MathInput value={expression} onChange={setExpression} />
          </div>

          <CalculatorDisplay result={result} error={error} />

          <CalculatorButtons
            onCalculate={handleCalculate}
            onClear={handleClear}
            onClearHistory={handleClearHistory}
          />
        </div>

        {history.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">History</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600"
                >
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.expression}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    = {item.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
