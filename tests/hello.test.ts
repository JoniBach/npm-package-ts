import { strict as assert } from "assert";
import {
  containsHello
} from "../src/hello"; // Adjust the path as necessary

import { test } from "node:test";

test('containsHello should return true if string contains hello', () => {
  assert.strictEqual(containsHello('Hello World!'), true);
});

test('containsHello should return false if string does not contain hello', () => {
  assert.strictEqual(containsHello('Goodbye World!'), false);
});

