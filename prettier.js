const prettier = require('prettier');
const glob = require('glob');
const fs = require('fs');

// check if the glob was passed (user wants to run it only for a subset of files)
const args = process.argv.slice(2);

const files = glob.sync(args[0] ? args[0] : '**/*.js', {
  ignore: [
    '**/node_modules/**',
    'build/**',
    'coverage/**',
    'packages/*/lib/**',
    'packages/*/es/**',
    'packages/*/dist/**',
    'docs/**'
  ]
});

files.forEach(file => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    const formatted = prettier.format(data, {
      // Fit code within this line limit
      printWidth: 80,

      // Number of spaces it should use per tab
      tabWidth: 2,

      // If true, will use single instead of double quotes
      singleQuote: true,

      // Controls the printing of trailing commas wherever possible. Valid options:
      // "none" - No trailing commas
      // "es5"  - Trailing commas where valid in ES5 (objects, arrays, etc)
      // "all"  - Trailing commas wherever possible (function arguments)
      //
      // NOTE: Above is only available in 0.19.0 and above. Previously this was
      // a boolean argument.
      trailingComma: 'none',

      // Controls the printing of spaces inside object literals
      bracketSpacing: true,

      // If true, puts the `>` of a multi-line jsx element at the end of
      // the last line instead of being alone on the next line
      jsxBracketSameLine: false,

      // Which parser to use. Valid options are 'flow' and 'babylon'
      parser: 'babylon'
    });
    if (data !== formatted) {
      fs.writeFile(file, formatted, err => {
        if (err) throw err;
        console.log(file + ' was updated!');
      });
    }
  });
});
