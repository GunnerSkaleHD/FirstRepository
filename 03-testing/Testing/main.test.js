import { main } from "./main.js"
import { expect, vi, afterEach, beforeEach, describe, it } from "vitest"



describe('Random Car', () => {
    beforeEach(() => {
      vi.useFakeTimers()
      const mocked = vi.fn(() => 0)
      Math.random = mocked
    })
  
    afterEach(() => {
      vi.useRealTimers()
    })
  
    it('returns only electric cars', () => {
  
      const date = new Date(2040, 1, 1, 1)
      vi.setSystemTime(date)
  
      expect(main()).toEqual("Your random car is a used Taycan in blue!")
    })
  
    it('returns also gas powered vehicles', () => {
      const date = new Date(2000, 1, 1, 19)
      vi.setSystemTime(date)
  
      expect(main()).toEqual("Your random car is a used 911 in blue!")
    })
  })