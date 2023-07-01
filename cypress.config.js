const { defineConfig } = require('cypress');
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('config', `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return getConfigurationByFile(config.env.configFile);
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    pageLoadTimeout: 20000,
    videoCompression: false,
    videoUploadOnPasses: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
  }
});
