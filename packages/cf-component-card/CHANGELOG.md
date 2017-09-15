# Change Log

All notable changes to this project will be documented in this file.
See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="3.0.4"></a>
## [3.0.4](https://github.com/cloudflare/cf-ui/compare/cf-component-card@3.0.3...cf-component-card@3.0.4) (2017-09-15)




<a name="3.0.3"></a>
## [3.0.3](https://github.com/cloudflare/cf-ui/compare/cf-component-card@3.0.2...cf-component-card@3.0.3) (2017-08-26)




<a name="3.0.2"></a>
## [3.0.2](https://github.com/cloudflare/cf-ui/compare/cf-component-card@3.0.1...cf-component-card@3.0.2) (2017-08-25)




<a name="3.0.1"></a>
## [3.0.1](https://github.com/cloudflare/cf-ui/compare/cf-component-card@3.0.0...cf-component-card@3.0.1) (2017-08-15)




<a name="3.0.0"></a>
# [3.0.0](https://github.com/cloudflare/cf-ui/compare/cf-component-card@2.1.1...cf-component-card@3.0.0) (2017-08-02)


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
