/**
 * Given an iterable *data* and some *value* accessor, returns an array (a column) of the specified *arrayType* with the corresponding value of each element of the data. The *value* accessor may be one of the following types:
 *
 * * a string - corresponding to the field accessor (`d => d[value]`)
 * * an accessor function - called as *arrayType*.from(*data*, *value*)
 * * a number, Date, or boolean — resulting in an array uniformly filled with the *value*
 * * an object with a transform method — called as *value*.transform(*data*)
 * * an array of values - returning the same
 * * null or undefined - returning the same
 *
 * If *arrayType* is specified, it must be Array or a similar class that implements the [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) interface such as a typed array. When *type* is Array or a typed array class, the return value of valueof will be an instance of the same (or null or undefined). If *type* is not specified, valueof may return either an array or a typed array (or null or undefined).
 *
 * Plot.valueof is not guaranteed to return a new array. When a transform method is used, or when the given *value* is an array that is compatible with the requested *arrayType*, the array may be returned as-is without making a copy.
 */
export function valueof(data: any, value: any, arrayType: any): any;
export function percentile(reduce: any): (I: any, f: any) => number | undefined;
export function maybeColorChannel(value: any, defaultValue: any): any[];
export function maybeNumberChannel(value: any, defaultValue: any): any[];
export function maybeKeyword(input: any, name: any, allowed: any): string | undefined;
export function keyword(input: any, name: any, allowed: any): string;
export function arrayify(data: any, type: any): any;
export function map(values: any, f: any, type?: ArrayConstructor): any[];
export function slice(values: any, type?: ArrayConstructor): any[];
export function isTypedArray(values: any): boolean;
export function isObject(option: any): boolean;
export function isScaleOptions(option: any): boolean;
export function isOptions(option: any): boolean;
export function isDomainSort(sort: any): boolean;
export function maybeZero(x: any, x1: any, x2: any, x3?: {
    transform: (d: any) => any;
}): any[];
export function maybeTuple(x: any, y: any): any[];
export function maybeZ({ z, fill, stroke }?: {
    z: any;
    fill: any;
    stroke: any;
}): any;
export function range(data: any): Uint32Array;
export function where(data: any, test: any): Uint32Array;
export function take(values: any, index: any): any[];
export function keyof(value: any): any;
export function maybeInput(key: any, options: any): any;
/**
 * This helper for constructing derived columns returns a [*column*, *setColumn*] array. The *column* object implements *column*.transform, returning whatever value was most recently passed to *setColumn*. If *setColumn* is not called, then *column*.transform returns undefined. If a *source* is specified, then *column*.label exposes the given *source*’s label, if any: if *source* is a string as when representing a named field of data, then *column*.label is *source*; otherwise *column*.label propagates *source*.label. This allows derived columns to propagate a human-readable axis or legend label.
 *
 * Plot.column is typically used by options transforms to define new channels; the associated columns are populated (derived) when the **transform** option function is invoked.
 */
export function column(source: any): (((v: any) => any) | {
    transform: () => any;
    label: any;
})[];
export function maybeColumn(source: any): any[];
export function labelof(value: any, defaultValue: any): any;
export function mid(x1: any, x2: any): {
    transform(data: any): any[];
    label: any;
};
export function maybeValue(value: any): any;
export function numberChannel(source: any): {
    transform: (data: any) => any;
    label: any;
} | null;
export function isIterable(value: any): any;
export function isTextual(values: any): boolean | undefined;
export function isOrdinal(values: any): boolean | undefined;
export function isTemporal(values: any): boolean | undefined;
export function isTemporalString(values: any): false | Date | undefined;
export function isNumericString(values: any): boolean | undefined;
export function isNumeric(values: any): boolean | undefined;
export function isFirst(values: any, is: any): any;
export function isEvery(values: any, is: any): boolean;
export function isColor(value: any): any;
export function isNoneish(value: any): boolean;
export function isNone(value: any): boolean;
export function isRound(value: any): boolean;
export function maybeFrameAnchor(value?: string): string;
export function order(values: any): number | undefined;
export function inherit(options?: {}, ...rest: any[]): {};
export function Named(things: any): any;
export function maybeNamed(things: any): any;
export function field(name: any): (d: any) => any;
export function indexOf(d: any, i: any): any;
export namespace identity {
    function transform(d: any): any;
}
export function zero(): number;
export function one(): number;
export function yes(): boolean;
export function string(x: any): any;
export function number(x: any): any;
export function boolean(x: any): any;
export function first(x: any): any;
export function second(x: any): any;
export function constant(x: any): () => any;
