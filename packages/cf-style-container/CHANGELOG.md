# Change Log

All notable changes to this project will be documented in this file.
See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
