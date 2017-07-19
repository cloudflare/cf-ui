# Change Log

All notable changes to this project will be documented in this file.
See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
