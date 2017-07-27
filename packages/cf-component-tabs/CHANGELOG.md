# Change Log

All notable changes to this project will be documented in this file.
See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="6.4.0"></a>
# [6.4.0](https://github.com/cloudflare/cf-ui/compare/cf-component-tabs@6.0.2...cf-component-tabs@6.4.0) (2017-07-27)


### Features

* **cf-component-tabs:** `TabsItem` own component (#321) ([ac8a1ab](https://github.com/cloudflare/cf-ui/commit/ac8a1ab))
* **cf-component-tabs:** allow border override (#326) ([bf5c1a7](https://github.com/cloudflare/cf-ui/commit/bf5c1a7))
* **cf-component-tabs:** selected color override (#328) ([17127fd](https://github.com/cloudflare/cf-ui/commit/17127fd))




<a name="6.3.0"></a>
# [6.3.0](https://github.com/koddsson/cf-ui/compare/cf-component-tabs@6.2.0...cf-component-tabs@6.3.0) (2017-07-27)


### Features

* **cf-component-tabs:** selected color override (#328) ([17127fd](https://github.com/koddsson/cf-ui/commit/17127fd))




<a name="6.2.0"></a>
# [6.2.0](https://github.com/koddsson/cf-ui/compare/cf-component-tabs@6.1.0...cf-component-tabs@6.2.0) (2017-07-27)


### Features

* **cf-component-tabs:** allow border override (#326) ([bf5c1a7](https://github.com/koddsson/cf-ui/commit/bf5c1a7))




<a name="6.1.0"></a>
# [6.1.0](https://github.com/koddsson/cf-ui/compare/cf-component-tabs@6.0.2...cf-component-tabs@6.1.0) (2017-07-26)


### Features

* **cf-component-tabs:** `TabsItem` own component (#321) ([ac8a1ab](https://github.com/koddsson/cf-ui/commit/ac8a1ab))




<a name="6.0.2"></a>
## [6.0.2](https://github.com/koddsson/cf-ui/compare/cf-component-tabs@6.0.0...cf-component-tabs@6.0.2) (2017-07-20)


### Bug Fixes

* **cf-component-tabs:** set the correct colors (#318) ([7aed168](https://github.com/koddsson/cf-ui/commit/7aed168))




<a name="6.0.1"></a>
## [6.0.1](https://github.com/koddsson/cf-ui/compare/cf-component-tabs@6.0.0...cf-component-tabs@6.0.1) (2017-07-20)


### Bug Fixes

* **cf-component-tabs:** set the correct colors (#318) ([7aed168](https://github.com/koddsson/cf-ui/commit/7aed168))




<a name="6.0.0"></a>
# [6.0.0](https://github.com/koddsson/cf-ui/compare/cf-component-tabs@5.3.0...cf-component-tabs@6.0.0) (2017-07-19)


* Migate tabs to fela (#314) ([68543b9](https://github.com/koddsson/cf-ui/commit/68543b9))


### BREAKING CHANGES

* This change is a significant change in the component
internals warranting a major bump in version number.

Closes: #209

* fix(cf-component-tabs): encapsulate content

Previously if a tabs panel content has had some top margin it would push
the tabs and the content apart resulting in a break in the border where
the content and the tabs meet. This was due to the content and the tabs
having separate borders made to look like the same border by being
pushed up to each other.

This patch sets the border on the whole component so it encapsulates all
the content and makes changes to the tabs and content to accommodate
this.
