interface Literal {
  [key: string]: any
}

export function hasOwnProp(obj: Literal, prop: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

/**
 * Get value from object if it exists, default to `fallback`
 * Return value will be cast to passed type
 *
 * Example: const NODE_ENV = getOwnProp<string>(process.env, 'NODE_ENV', 'production')
 */
export function getOwnProp<T>(
  obj: Record<string, T | undefined>, // Allow value to be undefined ...
  prop: string,
  fallback: T,
): T {
  return hasOwnProp(obj, prop)
    ? (obj[prop] as T) // ... but cast to passed type
    : fallback
}
