const {Given, Then, When} = require('@cucumber/cucumber');
import * as homepage from '../pages/homepage'

Given(/^User open browser stockbit$/, async () => {
    await homepage.openStockbit();
});

Then(/^User can see page homepage$/, async () => {
    await homepage.verifyHomepage();
});