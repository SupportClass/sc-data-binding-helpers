/**
 * Element class mixin that provides some useful methods for data bindings.
 *
 * @mixinFunction
 * @polymer
 * @summary Element class mixin that provides some useful methods for data bindings.
 */
declare const mixin: (base: new () => Polymer.Element) => {
    new (): {
        [x: string]: any;
        /**
         * Checks if two arguments are strict equal (===).
         * Does not check for deep equality.
         *
         * @param a - Left argument to compare.
         * @param b - Right argument to compare.
         * @return True if both arguments are strict equal (does not check deep equality).
         */
        _equal(a: any, b: any): boolean;
        /**
         * Checks if A is less than B.
         *
         * @param a - Left argument to compare.
         * @param b - Right argument to compare.
         * @return True if A is less than B.
         */
        _lessThan(a: any, b: any): boolean;
        /**
         * Checks if A is less than or equal to B.
         *
         * @param a - Left argument to compare.
         * @param b - Right argument to compare.
         * @return True if A is less than or equal to B.
         */
        _lessThanEqual(a: any, b: any): boolean;
        /**
         * Checks if A is greater than B.
         *
         * @param a - Left argument to compare.
         * @param b - Right argument to compare.
         * @return True if A is greater than B.
         */
        _greaterThan(a: any, b: any): boolean;
        /**
         * Checks if A is greater than or equal to B.
         *
         * @param a - Left argument to compare.
         * @param b - Right argument to compare.
         * @return True if A is greater than or equal to B.
         */
        _greaterThanEqual(a: any, b: any): boolean;
        /**
         * Checks if the first argument is equal to any of the remaining arguments.
         *
         * @param value - The value to check the remaining arguments for.
         * @param options - As many other arguments as you want to check against.
         * @returns True if the first argument is equal to any of the remaining arguments.
         */
        _oneOf(value: any, ...options: any[]): boolean;
        /**
         * Checks if an array includes a value.
         *
         * @param array - The array to check in.
         * @param value - The value to attempt to locate in the array.
         * @returns True if the array includes this value.
         */
        _includes(array: any[], value: any): boolean;
        /**
         * Ensures that some text will always be present in the output.
         * Mostly useful for elements whose height is determined by their text content,
         * and for whom having no text context at all would constitute a visual error.
         *
         * Works by checking if the argument is a string, and then if it has a length greater than 0.
         * If it does not, it returns an non-breaking space (Alt+255) instead.
         *
         * @returns Either the input string or an Alt+255 non-breaking space.
         */
        _ensureText(str: unknown): string;
        /**
         * Checks if a value is truthy.
         * @param value - The value to check for truthiness.
         * @returns True if the value is truthy.
         */
        _isTruthy(value: any): boolean;
        /**
         * Checks if a value is falsey.
         * @param value - The value to check for falsiness.
         * @returns True if the value is falsey.
         */
        _isFalsey(value: any): boolean;
        /**
         * Checks if every argument is truthy.
         *
         * @param values - As many other arguments as you want to check for truthiness.
         * @returns True if all arguments are truthy.
         */
        _all(...values: any[]): boolean;
    };
};
export default mixin;
