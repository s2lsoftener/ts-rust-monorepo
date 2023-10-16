import { test, expect, describe } from '@jest/globals'
import { multiply, divide } from '.'

describe('math', () => {
  test('multiply', () => {
    const result = multiply(2, 5)

    expect(result).toEqual(10)
  })

  test('divide', () => {
    const result = divide(10, 2)

    expect(result).toEqual(5)
  })
})
