# Change Log

All notable changes to this project will be documented in this file.
See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="3.0.3"></a>
## [3.0.3](https://github.com/cloudflare/cf-ui/compare/cf-builder-card@3.0.2...cf-builder-card@3.0.3) (2017-08-26)




<a name="3.0.2"></a>
## [3.0.2](https://github.com/cloudflare/cf-ui/compare/cf-builder-card@3.0.1...cf-builder-card@3.0.2) (2017-08-25)




<a name="3.0.1"></a>
## [3.0.1](https://github.com/cloudflare/cf-ui/compare/cf-builder-card@3.0.0...cf-builder-card@3.0.1) (2017-08-15)




<a name="3.0.0"></a>
# [3.0.0](https://github.com/cloudflare/cf-ui/compare/cf-builder-card@2.5.0...cf-builder-card@3.0.0) (2017-08-02)


### Features

* **cf-component-card:** migrate to `fela` (#293) ([f5b9eef](https://github.com/cloudflare/cf-ui/commit/f5b9eef))


### BREAKING CHANGES

* **cf-component-card:** Deprecated `CardLoadingText` since it wasn't used at
all.

Additionally a major overhaul of a package internal warrants a major
version bump

Related-to: #220

* feat(cf-component-card): title/footer as components

Abstract the `title` and `footerMessage` props on a `CardContent`
component into their own components.
* **cf-component-card:** `CardContent` no longer respects the `title` or
`footerMessage` props. If you need a title or footer in a `CardContent`
component, use the newly created `CardTitle` and `CardFooter`
components.




<a name="2.5.0"></a>
# [2.5.0](https://github.com/koddsson/cf-ui/compare/cf-builder-card@2.4.3...cf-builder-card@2.5.0) (2017-07-31)


### Features

* **cf-component-dynamic-content:** css2fela (#323) ([0565631](https://github.com/koddsson/cf-ui/commit/0565631))




<a name="2.4.3"></a>
## [2.4.3](https://github.com/cloudflare/cf-ui/compare/cf-builder-card@2.4.1...cf-builder-card@2.4.3) (2017-07-27)




<a name="2.4.2"></a>
## [2.4.2](https://github.com/koddsson/cf-ui/compare/cf-builder-card@2.4.1...cf-builder-card@2.4.2) (2017-07-26)
