/**
 * Session storage utilities for persisting calculator state
 * Uses localStorage for client-side storage
 */

export const SESSION_KEY = 'physim-session'

export interface Session {
  history: Array<{
    expression: string
    result: string
  }>
  timestamp?: number
}

/**
 * Save session data to localStorage
 * @param session - The session data to save
 */
export function saveSession(session: Session): void {
  if (typeof window === 'undefined') {
    return // Skip on server-side
  }

  try {
    const sessionData = {
      ...session,
      timestamp: Date.now(),
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData))
  } catch (error) {
    console.error('Failed to save session:', error)
  }
}

/**
 * Load session data from localStorage
 * @returns The loaded session or null if none exists
 */
export function loadSession(): Session | null {
  if (typeof window === 'undefined') {
    return null // Skip on server-side
  }

  try {
    const data = localStorage.getItem(SESSION_KEY)
    if (!data) {
      return null
    }

    const session = JSON.parse(data) as Session
    return session
  } catch (error) {
    console.error('Failed to load session:', error)
    return null
  }
}

/**
 * Clear session data from localStorage
 */
export function clearSession(): void {
  if (typeof window === 'undefined') {
    return // Skip on server-side
  }

  try {
    localStorage.removeItem(SESSION_KEY)
  } catch (error) {
    console.error('Failed to clear session:', error)
  }
}
