const {Given, Then, When} = require('@cucumber/cucumber');
import * as register from '../pages/register'

Given(/^User open browser Register page stockbit.com$/, async () => {
    await register.goToWebsiteStockbitRegister();
});

Then(/^User can see page register$/, async () => {
    await register.verifyPageRegister();
});
