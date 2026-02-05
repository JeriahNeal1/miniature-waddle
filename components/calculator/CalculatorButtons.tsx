import Button from '@/components/ui/Button'

interface CalculatorButtonsProps {
  onCalculate: () => void
  onClear: () => void
  onClearHistory: () => void
}

export default function CalculatorButtons({
  onCalculate,
  onClear,
  onClearHistory,
}: CalculatorButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={onCalculate} variant="primary" className="flex-1 min-w-[120px]">
        Calculate
      </Button>
      <Button onClick={onClear} variant="secondary" className="flex-1 min-w-[120px]">
        Clear
      </Button>
      <Button onClick={onClearHistory} variant="outline" className="flex-1 min-w-[120px]">
        Clear History
      </Button>
    </div>
  )
}
