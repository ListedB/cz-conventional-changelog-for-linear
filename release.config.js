// eslint-disable-next-line import/no-extraneous-dependencies
const { slackBotConfig, commitAnalyzerConfig, releaseNotesGeneratorConfig } = require('@listedb/semantic-release-config');
const { name } = require('./package.json');

module.exports = {
  branches: ['master'],
  plugins: [
    ['@semantic-release/commit-analyzer', commitAnalyzerConfig],
    ['@semantic-release/release-notes-generator', releaseNotesGeneratorConfig],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
