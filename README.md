# Polymer.SCDataBindingHelpers [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/SupportClass/sc-data-binding-helpers) [![Build Status](https://travis-ci.org/SupportClass/sc-data-binding-helpers.svg?branch=master)](https://travis-ci.org/SupportClass/sc-data-binding-helpers)

A Polymer 2.x mixin that provides some useful methods for data bindings. See the [listing on webcomponents.org](https://www.webcomponents.org/element/SupportClass/sc-data-binding-helpers/mixins/Polymer.SCDataBindingHelpers) for full documentation (You'll need to click on "Show N protected methods" to see them).

## Example
<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="../polymer/polymer-element.html">
    <link rel="import" href="../polymer/lib/elements/dom-if.html">
    <link rel="import" href="sc-data-binding-helpers.html">
    <next-code-block></next-code-block>
    <my-element></my-element>
  </template>
</custom-element-demo>
```
-->
```html
<dom-module id="my-element">
    <template>
        <style>
            :host {
                display: block;
            }
        </style>
        
        <template is="dom-if" if="[[_isTruthy(foo)]]">
            foo is: truthy
        </template>
        
        <template is="dom-if" if="[[_isFalsey(foo)]]">
            foo is: falsey
        </template>
    </template>
    
    <script>
        /**
         * @customElement
         * @polymer
         * @appliesMixin Polymer.SCDataBindingHelpers
         */
        class MyElement extends Polymer.SCDataBindingHelpers(Polymer.Element) {
            static get is() { 
                return 'my-element';
            }
            
            static get properties() { 
                return {
                    foo: {
                        type: String,
                        value: 'foo'
                    }
                };
            }
        }
        
        customElements.define(MyElement.is, MyElement);
    </script>
</dom-module>
```
