module.exports = {
    extends: ['@commitlint/config-conventional'],
    plugins: ['commitlint-plugin-function-rules'],
    rules: {
      'type-enum': [2, 'always', ['ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'test']],
      'subject-case': [2, 'always', 'lower-case'],
      'function-rules/scope-enum': [
        2,
        'always',
        (parsed) => {
          // The scope enum should contain an Azure Boards Reference, such as AB#1234
          if (/^AB#\d*$/.test(parsed.scope)) return [true];
          return [false, 'scope must contain an Azure Boards card number prefixed with AB#'];
        },
      ],
    },
  };
  