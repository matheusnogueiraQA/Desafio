const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseURL : 'https://seubarriga.wcaquino.me/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
