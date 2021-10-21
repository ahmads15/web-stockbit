const {Given, Then, When} = require('@cucumber/cucumber');
import * as login from '../pages/login'

Given(/^User open browser stockbit.com$/, async () => {
    await login.goToWebsiteStockbit();
});

When(/^User input '([^"]*)' as email$/,async (valueEmail) => {
    await login.inputEmail(valueEmail);
});

Then(/^User can see alert error message$/, async () => {
    await login.errMessage();
});

When(/^User input '([^"]*)' as password$/,async (valuePass) => {
    await login.inputPassword(valuePass);
});

Then(/^User can see stream page stockbit$/, async () => {
    await login.verifySuccessLogin();
});

Then(/^User can verify UI login page$/, async () => {
    await login.verifyUIlogin();
});


