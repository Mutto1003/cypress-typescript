# cypress-typescript

### How to set up Project ###

Step 1: Create repo gitHub
Step 2: Open folder in VS Code
Step 3: Run commands 
        - npm init -y
        - npm install cypress --save-dev
        - npm install typescript --save-dev
        - npm install --save-dev @types/cypress
        - npm install @cypress/grep @shelex/cypress-allure-plugin --save-dev

Step 4: initialize a new tsconfig.json file using command
        - npx tsc --init --types cypress --lib dom,es6
Step 5: Run command
        - npx cypress open

### Setting allurereport ###
# DOC :https://allurereport.org/docs/cypress/
Step 1: Install the Allure Report command-line tool.
        - npm install --save-dev allure-commandline
Step 2: Install the Allure Cypress adapter.
        - npm install --save-dev allure-cypress [ Version can't open report ]
        - npm install allure-cypress@2.15.1 
Step 3: In the e2e section of your Cypress configuration script, define a setupNodeEvents() function that calls allureCypress(), as shown in the example.
Pass the configuration options if necessary, see Allure Cypress configuration.

        const { defineConfig } = require("cypress");
        const { allureCypress } = require("allure-cypress/reporter");

        module.exports = defineConfig({
        e2e: {
                setupNodeEvents(on, config) {
                allureCypress(on);
                },
            },
        });
Step 4: Run tests
        - npx cypress run
Step 5: Generate a report
        - npx allure serve allure-results


### Docker Integration with Cypress ###

### CICD Integration ###
