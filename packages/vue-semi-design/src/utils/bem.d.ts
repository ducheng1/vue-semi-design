/**
 * generate bem className for component
 * @param componentName
 * @returns a function that generates bem className
 */
export declare function bem(
  componentName: string,
): (
  elementOrModifiers?: string | Record<string, string | boolean>,
  modifiers?: Record<string, string | boolean>,
) => string
