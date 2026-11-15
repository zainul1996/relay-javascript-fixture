import assert from "node:assert/strict";
import test from "node:test";

import { add, slugify } from "../src/math.js";

test("add adds two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("slugify lowercases, trims, and hyphenates non-alphanumerics", () => {
  assert.equal(slugify("  Hello World!  "), "hello-world");
});

test("slugify strips leading and trailing hyphens", () => {
  assert.equal(slugify("---Test---"), "test");
});

test("slugify collapses runs of non-alphanumerics into one hyphen", () => {
  assert.equal(slugify("a   b__c!!d"), "a-b-c-d");
});

test("slugify handles input of only punctuation", () => {
  assert.equal(slugify("  !!!  "), "");
});
