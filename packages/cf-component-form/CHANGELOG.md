# Change Log

All notable changes to this project will be documented in this file.
See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="7.1.2"></a>
## [7.1.2](https://github.com/cloudflare/cf-ui/compare/cf-component-form@7.1.0...cf-component-form@7.1.2) (2017-08-22)


### Bug Fixes

* **cf-component-form:** fix form field error position ([a2ff3e3](https://github.com/cloudflare/cf-ui/commit/a2ff3e3))




<a name="7.1.1"></a>
## [7.1.1](https://github.com/sejoker/cf-ui/compare/cf-component-form@7.1.0...cf-component-form@7.1.1) (2017-08-22)


### Bug Fixes

* **cf-component-form:** fix form field error position ([a2ff3e3](https://github.com/sejoker/cf-ui/commit/a2ff3e3))




<a name="7.1.0"></a>
# [7.1.0](https://github.com/cloudflare/cf-ui/compare/cf-component-form@7.0.1...cf-component-form@7.1.0) (2017-08-15)


### Bug Fixes

* **cf-component-form:** Remove cf-component-flex from the example since it was deprecated ([d906576](https://github.com/cloudflare/cf-ui/commit/d906576))


### Features

* **cf-component-select:** migrate select to fela (#335) ([ca87352](https://github.com/cloudflare/cf-ui/commit/ca87352))




<a name="7.0.0"></a>
# [7.0.0](https://github.com/sejoker/cf-ui/compare/cf-component-form@4.6.0...cf-component-form@7.0.0) (2017-07-12)


* Migrate textarea & copyable-textarea to fela (#295) ([be0bb03](https://github.com/sejoker/cf-ui/commit/be0bb03))


### Features

* **cf-component-input:** rewrite styling in fela (#289) ([c0901b9](https://github.com/sejoker/cf-ui/commit/c0901b9))


### BREAKING CHANGES

* **cf-component-input:** There is no default export in `cf-component-input`
anymore, the previously exported default is now exported as `Input`.

Additionally the `className` prop is now ignored.

Closes: #226
* Internals have been rewritten in a significant way.
This warrants a breaking change version bump.

Closes: #218

* feat(cf-component-textarea): s/CSS/fela/
* Internals have been rewritten in a significant way.
This warrants a breaking change version bump.

Closes: #213




<a name="6.0.0"></a>
# [6.0.0](https://github.com/koddsson/cf-ui/compare/cf-component-form@5.0.0...cf-component-form@6.0.0) (2017-07-12)


### Features

* **cf-component-input:** rewrite styling in fela (#289) ([c0901b9](https://github.com/koddsson/cf-ui/commit/c0901b9))


### BREAKING CHANGES

* **cf-component-input:** There is no default export in `cf-component-input`
anymore, the previously exported default is now exported as `Input`.

Additionally the `className` prop is now ignored.

Closes: #226




<a name="5.0.0"></a>
# [5.0.0](https://github.com/koddsson/cf-ui/compare/cf-component-form@4.6.2...cf-component-form@5.0.0) (2017-07-11)


* Migrate textarea & copyable-textarea to fela (#295) ([be0bb03](https://github.com/koddsson/cf-ui/commit/be0bb03))


### BREAKING CHANGES

* Internals have been rewritten in a significant way.
This warrants a breaking change version bump.

Closes: #218

* feat(cf-component-textarea): s/CSS/fela/
* Internals have been rewritten in a significant way.
This warrants a breaking change version bump.

Closes: #213




<a name="4.6.2"></a>
## [4.6.2](https://github.com/koddsson/cf-ui/compare/cf-component-form@4.6.1...cf-component-form@4.6.2) (2017-07-10)




<a name="4.6.1"></a>
## [4.6.1](https://github.com/koddsson/cf-ui/compare/cf-component-form@4.6.0...cf-component-form@4.6.1) (2017-07-10)




<a name="4.6.0"></a>
# [4.6.0](https://github.com/cloudflare/cf-ui/compare/cf-component-form@4.5.2...cf-component-form@4.6.0) (2017-07-05)


### Bug Fixes

* **cf-component-form:** fix snapshot ([1d003a7](https://github.com/cloudflare/cf-ui/commit/1d003a7))
* **cf-component-form:** replace custom media query by alias ([7617e6c](https://github.com/cloudflare/cf-ui/commit/7617e6c))


### Features

* **cf-style-provider:** Update snapshots - they use atomic classNames now ([1a42284](https://github.com/cloudflare/cf-ui/commit/1a42284))




<a name="4.4.5"></a>
## [4.4.5](https://github.com/koddsson/cf-ui/compare/cf-component-form@4.4.4...cf-component-form@4.4.5) (2017-06-23)


### Bug Fixes

* **cf-component-form:** remove background color (#272) ([46cbe7b](https://github.com/koddsson/cf-ui/commit/46cbe7b))
* **cf-component-form:** remove missing background (#273) ([da33932](https://github.com/koddsson/cf-ui/commit/da33932))
