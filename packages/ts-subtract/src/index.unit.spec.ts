import { test, expect } from '@jest/globals'
import { subtract } from '.'

test('subtract', () => {
  const result = subtract(10, 2)
  expect(result).toEqual(8)
})
