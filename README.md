# Guild_AmazonProject
Cypress + TS project for Amazon Fresh

two test files under e2e: amazonFreshOrders.cy.ts and login.cy
amazonFreshOrders.cy.ts include login steps as well

to run test run 'npm run runner' 

in package.json runner is set to run tests --e2e --browser chrome so if you want to run it on another browser, you can change it there

P.S: sometimes amazon doesn't open Home page, so login test is failed. Re-freshing page or re-running test should fix it :)


