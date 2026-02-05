interface CalculatorDisplayProps {
  result: string | null
  error: string | null
}

export default function CalculatorDisplay({ result, error }: CalculatorDisplayProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Result
      </label>
      <div className="border border-input rounded-md p-4 min-h-[60px] bg-gray-50 dark:bg-gray-900">
        {error ? (
          <div className="text-red-600 dark:text-red-400">{error}</div>
        ) : result ? (
          <div className="text-2xl font-semibold text-gray-900 dark:text-white">{result}</div>
        ) : (
          <div className="text-gray-400 dark:text-gray-600 italic">
            Enter an expression and click Calculate
          </div>
        )}
      </div>
    </div>
  )
}
