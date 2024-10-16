import { main } from "./main.js"
import { test, expect } from "vitest"


test('Gives a random Car', () => {
  expect(main()).toString
});
