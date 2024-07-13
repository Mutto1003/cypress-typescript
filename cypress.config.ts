// import { defineConfig } from "cypress";

const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter")

export default defineConfig({
  e2e: {
    setupNodeEvents(on: any, config: any) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);

      allureCypress(on);
      return config
    },
  },
});
