# cf-util-markdown

> Cloudflare Markdown Util

This utility library is a simple interface that hides away the markdown
implementation being used so that it can easily be swapped out for something
else.

## Installation

```sh
$ npm install cf-util-markdown
```

## Usage

```js
import markdown from 'cf-util-markdown';

markdown('# Hello World');
// >> <h1>Hello World</h1>
```

If for some **crazy crazy crazy** reason you need to stop the markdown from
being sanitized you may do the following:

**WARNING:** Be extremely careful about XSS vulnerabilities when doing this!

```js
markdown('<h1>Hello World</h1>', { __dangerouslyDontSanitizeMarkdown: true });
```
