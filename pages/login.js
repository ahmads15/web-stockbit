import * as base from '../base-functions/base-functions';
import  {client} from 'nightwatch-api';

const elements = {
  usernameField : '#username',
  errMessages : '.sysmsg-content',
  passwordField : '#password',
  btnLogin: '#loginbutton',
  profileMenu: '.profile.menugroup',
  loginLogo : '#loginlogo',
  btnLoginWithGoogle : '.login-goog',
  btnLoginWithFB : '.login-fb',
  wordingOr : '.login-or',
  wordingEmailnPass: "[for='input-1']",
  wordingPassword : "[for='input-2']",
  iconEye: "[src='assets/css/images/eye.svg']",
  wordingForgoturPassword : "//p[.='Forgot your password? Click here']",
  wordingNewToStockbit : "//p[.='New to Stockbit? Sign Up']",
  iconChat : "//button[@class='intercom-launcher']/img[1]",
};


export const goToWebsiteStockbit = async () =>{
    client.url('https://stockbit.com/#/login');
};

export const inputEmail = async (valueEmail)=> {
    await base.setValueElement(elements.usernameField, valueEmail);
};

export const inputPassword = async (valuePass)=> {
    await base.setValueElement(elements.passwordField, valuePass);
    await base.clickElement(elements.btnLogin);
};

export const errMessage = async () => {
    await base.expectElementEqualText(elements.errMessages,'Username atau password salah. Mohon coba lagi.');
};

export const verifySuccessLogin = async () => {
    await client.assert.urlEquals('https://stockbit.com/#/stream');
    await base.waitElementVisible(elements.profileMenu);
};

export const verifyUIlogin = async () => {
    await base.waitElementVisible(elements.loginLogo);
    await base.waitElementVisible(elements.btnLoginWithGoogle);
    await base.expectAttributeContains(elements.btnLoginWithGoogle,'value','Log in with Google');
    await base.expectElementEqualText(elements.btnLoginWithFB,'Log in with Facebook');
    await base.expectElementEqualText(elements.wordingOr,'Or');
    await base.expectElementEqualText(elements.wordingEmailnPass,'E-mail dan Username');
    await base.waitElementVisible(elements.usernameField);
    await base.waitElementVisible(elements.passwordField);
    await base.waitElementVisible(elements.wordingPassword);
    await base.waitElementVisible(elements.iconEye);
    await client.useXpath();
    await base.expectElementEqualText(elements.wordingForgoturPassword,'Forgot your password? Click here');
    await base.expectElementEqualText(elements.wordingNewToStockbit,'New to Stockbit? Sign Up');
    await client.useCss();
    await base.expectAttributeContains(elements.btnLogin,'value','Login');
};