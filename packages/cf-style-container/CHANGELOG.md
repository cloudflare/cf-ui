# Change Log

All notable changes to this project will be documented in this file.
See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="5.0.0"></a>
# [5.0.0](https://github.com/cloudflare/cf-ui/compare/cf-style-container@4.1.0...cf-style-container@5.0.0) (2017-09-19)


### Chores

* **cf-style-const:** rename gradient keys in theme (#317) ([4d37d26](https://github.com/cloudflare/cf-ui/commit/4d37d26))


### Features

* **cf-component-input:** Added height to input for search label (#352) ([530a7fe](https://github.com/cloudflare/cf-ui/commit/530a7fe))
* **cf-component-toast:** Initial commit of basic toast ([2f8272e](https://github.com/cloudflare/cf-ui/commit/2f8272e))
* **cf-style-const:** Add a new color ([d23c0ad](https://github.com/cloudflare/cf-ui/commit/d23c0ad))
* **cf-style-container:** add applyStaticStyles method ([87c7913](https://github.com/cloudflare/cf-ui/commit/87c7913))
* **cf-style-provider:** Add [@media](https://github.com/media)(hover) ([80fb1eb](https://github.com/cloudflare/cf-ui/commit/80fb1eb))
* **cf-style-provider:** Add two new breakpoints to support new navigation ([f00199c](https://github.com/cloudflare/cf-ui/commit/f00199c))


### BREAKING CHANGES

* **cf-style-const:** This change will break all places that use gradients from theme

* chore(cf-style-const): Update snapshots




<a name="4.0.0"></a>
# [4.0.0](https://github.com/sejoker/cf-ui/compare/cf-style-container@1.3.3...cf-style-container@4.0.0) (2017-07-12)


### Bug Fixes

* **cf-style-container:** Change fela wrapper names (#300) ([4230f0a](https://github.com/sejoker/cf-ui/commit/4230f0a))
* **cf-style-container:** set themed component name (#303) ([4497094](https://github.com/sejoker/cf-ui/commit/4497094))


### Features

* **cf-style-provider:** Update snapshots - they use atomic classNames now ([1a42284](https://github.com/sejoker/cf-ui/commit/1a42284))


### BREAKING CHANGES

* **cf-style-container:** The display name of themed components now have a
`Themed` prefix to their display names. So if you had a themed component
that has the name `Button` it will now be `ThemedButton` instead of
`ThemedComponent`.

Related-to: #300
* **cf-style-container:** If you are targeting components in your tests you are
going to need to make some changes. Previously others have selected the
second one in the node list after querying for the display name.




<a name="3.0.0"></a>
# [3.0.0](https://github.com/koddsson/cf-ui/compare/cf-style-container@2.0.0...cf-style-container@3.0.0) (2017-07-10)


### Bug Fixes

* **cf-style-container:** set themed component name (#303) ([4497094](https://github.com/koddsson/cf-ui/commit/4497094))


### BREAKING CHANGES

* **cf-style-container:** The display name of themed components now have a
`Themed` prefix to their display names. So if you had a themed component
that has the name `Button` it will now be `ThemedButton` instead of
`ThemedComponent`.

Related-to: #300




<a name="2.0.0"></a>
# [2.0.0](https://github.com/koddsson/cf-ui/compare/cf-style-container@1.3.3...cf-style-container@2.0.0) (2017-07-10)


### Bug Fixes

* **cf-style-container:** Change fela wrapper names (#300) ([4230f0a](https://github.com/koddsson/cf-ui/commit/4230f0a))


### Features

* **cf-style-provider:** Update snapshots - they use atomic classNames now ([1a42284](https://github.com/koddsson/cf-ui/commit/1a42284))


### BREAKING CHANGES

* **cf-style-container:** If you are targeting components in your tests you are
going to need to make some changes. Previously others have selected the
second one in the node list after querying for the display name.
