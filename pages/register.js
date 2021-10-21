import * as base from '../base-functions/base-functions';
import  {client} from 'nightwatch-api';

const elements = {
  logoStockbit : '#loginlogo',
  registWithGoog : '.register-goog',
  registWithFB : '.register-fb',
  wordingOr : '.login-or',
  registWithEmail : '.register-email',
  wordingAlready : "p:nth-of-type(1)",
  wordingTermnCondition : "p:nth-of-type(2)",
  logoIntercom: '.intercom-launcher > img',
};


export const goToWebsiteStockbitRegister = async () =>{
    client.url('https://stockbit.com/#/register');
};

export const verifyPageRegister = async () => {
   await client.assert.urlEquals('https://stockbit.com/#/register');
   await base.waitElementVisible(elements.logoStockbit);
   await base.expectAttributeContains (elements.registWithGoog, 'value', 'Register with Google');
   await base.expectElementEqualText(elements.registWithFB, 'Register with Facebook');
   await base.waitElementVisible(elements.wordingOr);
   await base.expectElementEqualText(elements.registWithEmail, 'Register with Email');
   await base.expectElementEqualText(elements.wordingAlready, 'Already have a Stockbit account? Login');
   await base.expectElementEqualText(elements.wordingTermnCondition, 'By signing up you agree with our Terms & Conditions.');
   await base.waitElementVisible(elements.logoIntercom);
};