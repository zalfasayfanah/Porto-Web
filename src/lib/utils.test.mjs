import test from "node:test";
import assert from "node:assert/strict";
import { isValidUrl, cn } from "./utils.ts";

test("isValidUrl returns true for valid http, https, and mailto links", () => {
  assert.equal(isValidUrl("https://eduhealth.informatikaunimus.id/"), true);
  assert.equal(isValidUrl("http://example.com"), true);
  assert.equal(isValidUrl("mailto:zalfaulislam@gmail.com"), true);
});

test("isValidUrl returns false for placeholders, empty strings, and null/undefined", () => {
  assert.equal(isValidUrl("[ISI_URL_CV_PDF]"), false);
  assert.equal(isValidUrl("[ISI_URL_FOTO_PROFIL]"), false);
  assert.equal(isValidUrl(""), false);
  assert.equal(isValidUrl("   "), false);
  assert.equal(isValidUrl(undefined), false);
  assert.equal(isValidUrl(null), false);
  assert.equal(isValidUrl("invalid-url-string"), false);
});

test("cn merges class names properly", () => {
  assert.equal(cn("px-2 py-1", "bg-blue-500"), "px-2 py-1 bg-blue-500");
  assert.equal(cn("p-2", false && "hidden", "p-4"), "p-4");
});
