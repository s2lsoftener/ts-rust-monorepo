import { test, expect } from '@jest/globals'
import { add } from '.'

test('add', () => {
  const result = add(2, 10)
  expect(result).toEqual(12)
})
