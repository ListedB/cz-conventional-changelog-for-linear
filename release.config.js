module.exports = {
  branches: ['master'],
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'conventionalcommits',
      config: 'conventional-changelog-conventionalcommits',
      releaseRules: [
        { type: 'perf', release: 'minor' },
        { type: 'improvement', release: 'minor' },
        { type: 'refactor', release: 'patch' },
        { type: 'chore', release: 'patch' },
        { type: 'chore', scope: 'deps', release: 'patch' }, // *  For github dependabot to update dependencies
      ],
      presetConfig: {
        issuePrefixes: ['ENG-'],
        // eslint-disable-next-line no-template-curly-in-string
        issueUrlFormat: 'https://linear.app/listedb/issue/{{id}}',
      },
    }],
    ['@semantic-release/release-notes-generator', {
      preset: 'conventionalcommits',
      config: 'conventional-changelog-conventionalcommits',
      presetConfig: {
        issuePrefixes: ['ENG-'],
        // eslint-disable-next-line no-template-curly-in-string
        issueUrlFormat: 'https://linear.app/listedb/issue/{{id}}',
        types: [
          { type: 'feat', section: ':sparkles: Features' },
          { type: 'feature', section: ':sparkles: Features' },
          { type: 'fix', section: ':bug: Bug Fixes' },
          { type: 'perf', section: ':rocket: Performance Improvements' },
          { type: 'revert', section: ':back: Reverts' },
          { type: 'improvement', section: ':dizzy: Feature Improvements' },
          { type: 'refactor', section: ':hammer: Code Refactoring' },
          { type: 'chore', section: ':wrench: Miscellaneous Chores' },
          { type: 'docs', section: ':books: Documentation' },
          { type: 'style', section: ':gem: Styles' },
          { type: 'test', section: ':rotating_light: Tests' },
          { type: 'build', section: ':package: Build System' },
          { type: 'ci', section: ':construction_worker: Continuous Integration' },
        ],
      },
    }],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
