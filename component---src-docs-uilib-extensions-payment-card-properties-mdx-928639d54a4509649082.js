"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[59576],{98218:function(e,d,r){r.r(d);var s=r(52322),c=r(45392);function n(e){const d=Object.assign({h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",em:"em",a:"a",strong:"strong"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h2,{children:"Card Properties"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Properties"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"product_code"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," if product code matches one of the codes in the list the card will get that design, if no match is found Default design will be used."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"raw_data"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(optional)"})," useful if you want to create custom cards. See Card data properties."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"card_status"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(optional)"})," use one of these: ",(0,s.jsx)(d.code,{children:"active"}),", ",(0,s.jsx)(d.code,{children:"blocked"}),", ",(0,s.jsx)(d.code,{children:"expired"}),". Defaults to ",(0,s.jsx)(d.code,{children:"active"}),"."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"variant"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(optional)"})," defines the appearance. Use one of these: ",(0,s.jsx)(d.code,{children:"normal"})," or ",(0,s.jsx)(d.code,{children:"compact"}),". Defaults to ",(0,s.jsx)(d.code,{children:"normal"}),"."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"digits"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(optional)"})," will use 8 digits if none are specified."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"card_number"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(optional)"})," masked card number."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"locale"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(optional)"})," use ",(0,s.jsx)(d.code,{children:"nb-NO"})," or ",(0,s.jsx)(d.code,{children:"en-GB"}),". Defaults to the Eufemia provider."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"skeleton"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(optional)"})," if set to ",(0,s.jsx)(d.code,{children:"true"}),", an overlaying skeleton with animation will be shown."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/uilib/components/space/properties",children:"Space"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(optional)"})," spacing properties like ",(0,s.jsx)(d.code,{children:"top"})," or ",(0,s.jsx)(d.code,{children:"bottom"})," are supported."]})]})]})]}),"\n",(0,s.jsx)(d.h2,{children:"Card Data"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Properties"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"productCode"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," product code for the given card."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"productName"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," product name. Can be blank."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"displayName"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," the visible product name. Can be empty."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"cardDesign"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," object that describes the style properties of the card. ",(0,s.jsx)(d.code,{children:"import { Designs } from '@dnb/eufemia/extensions/payment-card'"})," (see available designs below) or a custom one can be created."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"cardType"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Union Type"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," ",(0,s.jsx)(d.code,{children:"import { CardType } from '@dnb/eufemia/extensions/payment-card'"})," to use. Can be CardType.Visa, CardType.Mastercard or CardType.None"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"productType"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Union Type"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," ",(0,s.jsx)(d.code,{children:"import { ProductType } from '@dnb/eufemia/extensions/payment-card'"})," to use. Can be ProductType.Saga, ProductType.Pluss, ProductType.Intro, ProductType.Business, ProductType.Bedrift, ProductType.PrivateBanking or ProductType.None"]})]})]})]}),"\n",(0,s.jsx)(d.h2,{children:"Card Design"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Properties"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"name"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," string Name of design"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"cardStyle"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," css class. mainly to set background and color"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bankLogo"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Union Type"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," Union Type. import DNB from ./card/utils/Types to use. Can be DNB.Colored('HexValue')"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"visa"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Union Type"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," Union Type. import Visa from ./card/utils/Types to use. Can be Visa.Colored('HexValue') or Visa.Platinum"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"mastercard"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Union Type"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," Union Type. import Mastercard from ./card/utils/Types to use. Can be Mastercard.Default or Mastercard.Dark"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bankAxept"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Union Type"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," Union Type. import BankAxept from ./card/utils/Types to use. Can be BankAxept.White, BankAxept.Black, BankAxept.Gold, BankAxept.Black20 or BankAxept.Gray"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"saga"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Union Type"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," Union Type. import Saga from ./card/utils/Types to use. Can be Saga.Gold, Saga.Platinum or Saga.None"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"privateBanking"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Union Type"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.em,{children:"(required)"})," Union Type. import PB from ./card/utils/Types to use. Can be PB.Default or PB.None"]})]})]})]}),"\n",(0,s.jsx)(d.h2,{children:"List of designs"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Properties"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"defaultDesign"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsx)(d.td,{children:"Default"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"pluss"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsx)(d.td,{children:"Pluss"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"young"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsx)(d.td,{children:"Ung"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"myFirst"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsx)(d.td,{children:"My first"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"youth"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsx)(d.td,{children:"Youth"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"gold"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsx)(d.td,{children:"Gold"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"saga"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsx)(d.td,{children:"Saga"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"sagaPlatinum"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsx)(d.td,{children:"Saga platinum"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"privateBanking"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsx)(d.td,{children:"Private Banking"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"mcBlack"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsx)(d.td,{children:"Mastercard Black"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"businessNoVisa"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsx)(d.td,{children:"Bedriftskort BankAxept"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"businessWithVisa"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"object"})}),(0,s.jsx)(d.td,{children:"Bedriftskort Visa"})]})]})]}),"\n",(0,s.jsx)(d.h2,{children:"Types"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.th,{children:"Type"})})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"DNB"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Colored"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"Saga"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Gold"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Platinum"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"None"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"PB"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Default"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"None"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"Mastercard"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Default"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Dark"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"ProductType"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Saga"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Pluss"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Intro"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Bedrift"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Business"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"PrivateBanking"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"None"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"CardType"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Visa"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Mastercard"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"None"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"BankAxept"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"White"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Black"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Gold"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Black20"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Gray"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"Visa"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Colored"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Platinum"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"Status"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Expired"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Blocked"})})}),(0,s.jsx)(d.tr,{children:(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Active"})})})]})]})]})}d.default=function(e){void 0===e&&(e={});const{wrapper:d}=Object.assign({},(0,c.ah)(),e.components);return d?(0,s.jsx)(d,Object.assign({},e,{children:(0,s.jsx)(n,e)})):n(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-payment-card-properties-mdx-928639d54a4509649082.js.map