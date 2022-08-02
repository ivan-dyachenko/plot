import assert from "assert";
import {valueof} from "../../src/options.js";

it("valueof reads arrays", () => {
  assert.deepStrictEqual(
    valueof([1, 2, 3], (d) => d),
    [1, 2, 3]
  );
  assert.deepStrictEqual(
    valueof([1, 2, 3], (d) => `${d}`, Array),
    ["1", "2", "3"]
  );
  assert.deepStrictEqual(
    valueof([1, 2, 3], (d) => d, Float64Array),
    Float64Array.of(1, 2, 3)
  );
});

// We don't expect the Datum to be complicated things, but the user can provide their
// own, if they also provide the proper accessor function; here's a way to type this:
it("valueof can read arrays of complicated things", () => {
  assert.deepStrictEqual(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    valueof<any>([(d: number) => d, new Promise(() => {})], (d: any) => `(${d})`),
    ["(d=>d)", "([object Promise])"]
  );
});

it("data passed to valueof can be nullish and generated by the transform method", () => {
  assert.deepStrictEqual(valueof(undefined, {transform: () => [1, "text"]}), [1, "text"]);
  assert.deepStrictEqual(valueof(null, {transform: () => [1, "text"]}, Float32Array), Float32Array.of(1, NaN));
  assert.deepStrictEqual(valueof(null, {transform: () => new Float64Array(2)}, Array), [0, 0]);

  // ts type tests
  valueof([1, 2, 3], (d: unknown) => d as number, Float32Array);
  valueof(["1", 2, 3], (d: unknown) => d as string | number);
  valueof(["1", 2, 3], (d: unknown) => d as string | number, Array);
  valueof(["1", 2, 3], (d: unknown) => d as string | number, Float64Array);
  valueof(["1", 2, 3], (d: unknown) => +(d as number), Float32Array);
  valueof(new Set(["1", 2, 3]), (d: unknown) => +(d as number), Float32Array);
});

it("valueof does not crash on non iterable values with an accessor", () => {
  for (const n of [null, undefined])
    assert.strictEqual(
      valueof(n, () => 1),
      n
    );
});

// A function is not a valid input Data
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
valueof(() => {}, "red");

// A Promise is not a valid input Data
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
valueof(new Promise(() => {}), "red");
