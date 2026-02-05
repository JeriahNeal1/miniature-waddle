/**
 * Math engine powered by Math.js
 * Handles all mathematical calculations client-side
 */
import { create, all } from 'mathjs'

// Create a math.js instance with all functions
const math = create(all)

/**
 * Evaluate a mathematical expression
 * @param expression - The mathematical expression to evaluate
 * @returns The result as a string
 */
export function evaluate(expression: string): string {
  try {
    const result = math.evaluate(expression)

    // Handle different result types
    if (typeof result === 'number') {
      return result.toString()
    }

    if (typeof result === 'object' && result !== null) {
      // Handle complex numbers, matrices, etc.
      return math.format(result, { precision: 14 })
    }

    return String(result)
  } catch (error) {
    throw new Error(
      `Invalid expression: ${error instanceof Error ? error.message : 'Unknown error'}`
    )
  }
}

/**
 * Simplify a mathematical expression
 * @param expression - The expression to simplify
 * @returns The simplified expression as a string
 */
export function simplify(expression: string): string {
  try {
    const simplified = math.simplify(expression)
    return simplified.toString()
  } catch (error) {
    throw new Error(
      `Unable to simplify: ${error instanceof Error ? error.message : 'Unknown error'}`
    )
  }
}

/**
 * Derive a mathematical expression with respect to a variable
 * @param expression - The expression to derive
 * @param variable - The variable to derive with respect to
 * @returns The derivative as a string
 */
export function derivative(expression: string, variable: string): string {
  try {
    const derived = math.derivative(expression, variable)
    return derived.toString()
  } catch (error) {
    throw new Error(`Unable to derive: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

export default math
