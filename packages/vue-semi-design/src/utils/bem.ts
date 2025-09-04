import { blockPrefix, elementPrefix, modifierPrefix, namespace } from '../constants'

/**
 * generate bem className for component
 * @param componentName
 * @returns a function that generates bem className
 */
export function bem(componentName: string) {
  /**
   * generate bem className
   * @param elementOrModifiers
   * @param modifiers
   * @returns
   * with no params: `semi-button`
   * with first element param: `semi-button__element`
   * with first modifier param: `semi-button--primary`
   * with both params: `semi-button__content--primary`
   */
  return function (
    elementOrModifiers?: string | Record<string, string | boolean>,
    modifiers?: Record<string, string | boolean>,
  ) {
    let className = namespace + blockPrefix + componentName
    if (!elementOrModifiers) {
      return className
    }
    let element
    // if elementOrModifiers is string, it's element
    if (typeof elementOrModifiers === 'string') {
      element = elementOrModifiers
    } else {
      // else it's modifiers
      modifiers = elementOrModifiers
    }
    if (element) {
      className += elementPrefix + element
    }
    // if no modifiers, return className
    if (!modifiers) {
      return className
    }
    // loop modifiers
    const modifiedClassNames = Object.entries(modifiers).reduce((res, [modifier, value]) => {
      if (typeof value === 'boolean' && value) {
        res.push(className + modifierPrefix + modifier)
      } else {
        res.push(className + modifierPrefix + value)
      }
      return res
    }, [] as string[])

    return `${className} ${modifiedClassNames.join(' ')}`
  }
}
