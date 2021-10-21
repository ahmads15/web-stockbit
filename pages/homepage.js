import * as base from '../base-functions/base-functions';
import  {client} from 'nightwatch-api';

const elements = {
  logoStockbit :'.logo-big',
  taInvesting : ".desktop [href='https://stockbit.com/info/mulai-investasi']",
  tabProTools : ".desktop [href='https://stockbit.com/info/pro-tools']",
  tabAcademy : ".desktop [href='https://academy.stockbit.com/']",
  tabBlog: ".desktop [href='https://blog.stockbit.com/']",
  tabHelp : ".desktop [href='http://help.stockbit.com/']",
  tabSignUp: ".desktop .register-lnd",
  tabLogin: ".desktop .login-ldn",
  logoMahakarya: "[src='https://stockbit.com/assets/template/mahakaryalogo.svg']",
  homeTitle: '.home-title',
  homeText: '.fp-completely .home-text',
  btnMulaiInvestasi: '.home-btn',
  appStore: ".home-badges [src='https://stockbit.com/assets/template/4b70f6fae447.png']",
  googlePlay: ".home-badges [src='https://stockbit.com/assets/template/f06b908907d5.png']",
  contetnPromo: ".section-price .content-big > .content-in",
  imageRpo: "[src='https://stockbit.com/assets/template/Rp0.svg']",
  biayaNormal: '.new-price',
  textNote: '.text-note',
  daftar100 : "//h1[.='Daftar 100% Online  Tanpa Minimum Deposit']",
  imageCeklis: "[src='https://stockbit.com/assets/template/buy-sell-image.svg']",
  wordingKeuntunganBersama : "//h1[@class='fadeInX fadeIn']",
  informatif: ".frbtm > td:nth-of-type(1)",
  lebihCepat: ".frbtm > td:nth-of-type(2)",
  lebihSeru: ".frbtm > td:nth-of-type(3)",
  sectionStepTransaksi: "#fullpage > div:nth-of-type(4) > .fp-tableCell",
  sectionSahamCompany: "#fullpage > div:nth-of-type(5) > .fp-tableCell",
  wordingProfesionalTools: "//h1[.='Professional Tools bahkan untuk Pemula']",
  wordingInvestai: ".homeprotoolpre-box > .home-text",
  sectionBerita: "div:nth-of-type(7) > .fp-tableCell",
  sectionNotification: ".fp-completely > .fp-tableCell",
  sectionKeyFeatures : "div:nth-of-type(9) > .fp-tableCell",
  sectionKomunitasdanAman: "div:nth-of-type(10) > .fp-tableCell",
  sectionFeatured: ".featuredpage-box > div",
  sectionVirtualTrading: ".virtualtradingpage-box2",
  footer: '.in-footer',
  footer_copyright: 'div:nth-of-type(15) > .fp-tableCell',

};


export const openStockbit = async () =>{
    client.url('https://stockbit.com/');
};

export const verifyHomepage = async () =>{
    await base.waitElementVisible(elements.logoStockbit);
    await base.waitElementVisible(elements.taInvesting);
    await base.waitElementVisible(elements.tabProTools);
    await base.waitElementVisible(elements.tabAcademy);
    await base.waitElementVisible(elements.tabBlog);
    await base.waitElementVisible(elements.tabHelp);
    await base.waitElementVisible(elements.tabSignUp);
    await base.waitElementVisible(elements.tabLogin);
    await base.waitElementVisible(elements.homeTitle);
    await base.waitElementVisible(elements.homeText);
    await base.waitElementVisible(elements.btnMulaiInvestasi);
    await base.waitElementVisible(elements.appStore);
    await base.waitElementVisible(elements.googlePlay);
    await base.waitElementVisible(elements.contetnPromo);
    await base.waitElementVisible(elements.imageRpo);
    await base.waitElementVisible(elements.biayaNormal);
    await base.waitElementVisible(elements.textNote);
    await base.waitElementVisibleWithXpath(elements.daftar100);
    await base.waitElementVisible(elements.imageCeklis);
    await base.waitElementVisible(elements.informatif);
    await base.waitElementVisible(elements.lebihCepat);
    await base.waitElementVisible(elements.lebihSeru);
    await base.waitElementVisible(elements.sectionStepTransaksi);
    await base.waitElementVisible(elements.sectionSahamCompany);
    await base.waitElementVisibleWithXpath(elements.wordingProfesionalTools);
    await base.waitElementVisible(elements.wordingInvestai);
    await base.waitElementVisible(elements.sectionBerita);
    await base.waitElementVisible(elements.sectionNotification);
    await base.waitElementVisible(elements.sectionKeyFeatures);
    await base.waitElementVisible(elements.sectionKomunitasdanAman);
    await base.waitElementVisible(elements.sectionFeatured);
    await base.waitElementVisible(elements.sectionVirtualTrading);
    await base.waitElementVisible(elements.footer);
    await base.waitElementVisible(elements.footer_copyright);
};