// test("", () => {});
import { ArrayBufferConverter, getBuffer } from "../ArrayBuffer";
test("Should correctly load and convert ArrayBuffer to string", () => {
  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();

  converter.load(buffer);

  const result = converter.toString();

  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test("Should throw error if load is called with non-ArrayBuffer", () => {
  const converter = new ArrayBufferConverter();

  expect(() => converter.load("invalid buffer")).toThrow(
    "Provided argument is not an ArrayBuffer"
  );
});
