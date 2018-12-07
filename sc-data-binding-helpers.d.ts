export interface SCDataBindingHelpers extends Polymer.Element {
    _equal(a: any, b: any): boolean;
    _lessThan(a: any, b: any): boolean;
    _lessThanEqual(a: any, b: any): boolean;
    _greaterThan(a: any, b: any): boolean;
    _greaterThanEqual(a: any, b: any): boolean;
    _oneOf(value: any, ...options: any[]): boolean;
    _includes(array: any[], value: any): boolean;
    _ensureText(str: unknown): string;
    _isTruthy(value: any): boolean;
    _isFalsey(value: any): boolean;
    _all(...values: any[]): boolean;
}
/**
 * Element class mixin that provides some useful methods for data bindings.
 *
 * @mixinFunction
 * @polymer
 * @summary Element class mixin that provides some useful methods for data bindings.
 */
declare const mixin: (base: new () => Polymer.Element) => new () => SCDataBindingHelpers;
export default mixin;
