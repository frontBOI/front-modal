module.exports = {
  // Type check TypeScript files
  '**/*.(ts)': () => 'tsc-files --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.ts': filenames => [
    `npx eslint --fix --quiet ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`
  ]
}
