# Change Log

All notable changes to this project will be documented in this file.
See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

      <a name="4.0.0"></a>
# [4.0.0](https://github.com/koddsson/cf-ui/compare/cf-component-radio@3.0.0...cf-component-radio@4.0.0) (2017-08-02)


### Features

* **cf-component-radio:** abstract children out of group ([9374888](https://github.com/koddsson/cf-ui/commit/9374888))


### BREAKING CHANGES

* **cf-component-radio:** Changed the API that accepts radio options as props
and rather accept the whole `<Radio />` components as children.  This
allows us to pass in `<Radio />` components that have different
themes or even behave differently.

Before:

```jsx
<RadioGroup
value={this.state.radioValue}
onChange={this.onRadioChange}
options={[
  { label: 'Option 1', name: 'group-option-1', value: 'option1' },
  { label: 'Option 2', name: 'group-option-2', value: 'option2' }
]}
/>
```

After:

```jsx
<RadioGroup value={this.state.radioValue} onChange={this.onRadioChange}>
<RadioGroupItem
  label="Option 1"
  name="group-option-1"
  value="option1"
/>
<RadioGroupItem
  label="Option 2"
  name="group-option-2"
  value="option2"
/>
</RadioGroup>
```

Related-to: #




      <a name="3.0.0"></a>
# [3.0.0](https://github.com/koddsson/cf-ui/compare/cf-component-radio@1.0.6...cf-component-radio@3.0.0) (2017-08-01)


### Features

* **cf-component-radio:** rewrite styling in fela (#316) ([93c722e](https://github.com/koddsson/cf-ui/commit/93c722e))


### BREAKING CHANGES

* **cf-component-radio:** This change is a significant change in the component
internals warranting a major bump in version number.

Closes: #222

* feat(cf-component-radio): rewrite styling in fela
* **cf-component-radio:** This change is a significant change in the component
internals warranting a major bump in version number.

Closes: #222
