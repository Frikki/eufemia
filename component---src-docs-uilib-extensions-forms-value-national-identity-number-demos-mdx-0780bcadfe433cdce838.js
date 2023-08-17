"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[77262],{42245:function(n,e,l){l.r(e),l.d(e,{default:function(){return b}});var t={};l.r(t),l.d(t,{Empty:function(){return s},Inline:function(){return p},Label:function(){return d},LabelAndValue:function(){return m},Placeholder:function(){return u},WithValue:function(){return c}});var a=l(52322),o=l(45392),r=l(82058),i=l(75482);const s=()=>(0,a.jsx)(r.Z,{scope:{Value:i.Z},children:"<Value.NationalIdentityNumber showEmpty />\n"}),u=()=>(0,a.jsx)(r.Z,{scope:{Value:i.Z},children:'<Value.NationalIdentityNumber placeholder="The value was not filled in" />\n'}),c=()=>(0,a.jsx)(r.Z,{scope:{Value:i.Z},children:'<Value.NationalIdentityNumber value="25017598765" />\n'}),d=()=>(0,a.jsx)(r.Z,{scope:{Value:i.Z},children:'<Value.NationalIdentityNumber label="Label text" showEmpty />\n'}),m=()=>(0,a.jsx)(r.Z,{scope:{Value:i.Z},children:'<Value.NationalIdentityNumber label="Label text" value="25017598765" />\n'}),p=()=>(0,a.jsx)(r.Z,{scope:{Value:i.Z},children:'<p>\n  This is before the component\n  <Value.NationalIdentityNumber value="25017598765" inline />\n  This is after the component\n</p>\n'});function h(n){const e=Object.assign({h2:"h2",h3:"h3"},(0,o.ah)(),n.components);return t||v("Examples",!1),s||v("Examples.Empty",!0),p||v("Examples.Inline",!0),d||v("Examples.Label",!0),m||v("Examples.LabelAndValue",!0),u||v("Examples.Placeholder",!0),c||v("Examples.WithValue",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Demos"}),"\n",(0,a.jsx)(e.h3,{children:"Empty"}),"\n",(0,a.jsx)(s,{}),"\n",(0,a.jsx)(e.h3,{children:"Placeholder"}),"\n",(0,a.jsx)(u,{}),"\n",(0,a.jsx)(e.h3,{children:"Value"}),"\n",(0,a.jsx)(c,{}),"\n",(0,a.jsx)(e.h3,{children:"Label"}),"\n",(0,a.jsx)(d,{}),"\n",(0,a.jsx)(e.h3,{children:"Label and value"}),"\n",(0,a.jsx)(m,{}),"\n",(0,a.jsx)(e.h3,{children:"Inline"}),"\n",(0,a.jsx)(p,{})]})}var b=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(h,n)})):h(n)};function v(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},75482:function(n,e,l){l.d(e,{Z:function(){return v}});var t=l(49406),a=l(63472),o=l(2784),r=l(95955),i=l.n(r),s=l(72210);function u(n){const{path:e}=n,l=(0,o.useContext)(s.Z.Context);if(e&&"/"!==e.substring(0,1))throw new Error("Invalid path. Input path JSON Pointers  must be from root (starting with a /).");const t=(0,o.useMemo)((()=>{var t;return null!==(t=n.value)&&void 0!==t?t:l.data&&void 0!==e&&i().has(l.data,e)?i().get(l.data,e):void 0}),[e,n.value,l.data]);return{...n,value:t}}var c=l(52322);function d(n){const{className:e,label:l,placeholder:o,value:r,inline:i,showEmpty:s,prepare:d=(n=>n)}=u(n);return(0,c.jsx)(t.Z,{className:e,label:l,showEmpty:s,placeholder:o,inline:i,...(0,a.p)(n),children:d(r)})}function m(n,e){const{thousandSeparator:l,decimalLimit:t,fixedDecimals:a,decimalSymbol:o=",",magnitude:r,prefix:i,suffix:s}=null!=e?e:{},u=void 0!==r?n/Math.pow(10,r):n,c=void 0!==a?u.toFixed(a):t?(Math.round(u*Math.pow(10,t))/Math.pow(10,t)).toString():u.toString(),d=void 0!==o?c.replace(".",o):c,m=void 0!==l?d.replace(/\B(?=(\d{3})+(?!\d))/g,l):d,p=void 0!==i?i+m:m;return void 0!==s?p+s:p}function p(n){const{className:e,label:l,placeholder:o,value:r,inline:i,showEmpty:s,thousandSeparator:d,decimalSymbol:p,decimalLimit:h,prefix:b,suffix:v}=u(n);return(0,c.jsx)(t.Z,{className:e,label:l,showEmpty:s,placeholder:o,inline:i,...(0,a.p)(n),children:void 0!==r?m(r,{thousandSeparator:!0===d?" ":d,decimalSymbol:p,decimalLimit:h,prefix:b,suffix:v}):null})}var h=l(32831);var b=l(41672);var v={String:d,Number:p,Boolean:function(n){const e=(0,o.useContext)(h.Z),{className:l,label:r,placeholder:i,showEmpty:s,value:d,inline:m}=u(n);return(0,c.jsx)(t.Z,{className:l,label:r,showEmpty:s,placeholder:i,inline:m,...(0,a.p)(n),children:!0===d||!1===d?!0===d?null==e?void 0:e.translation.Forms.booleanYes:null==e?void 0:e.translation.Forms.booleanNo:null})},Currency:function(n){var e,l;const t={...n,label:n.label,thousandSeparator:null!==(e=n.thousandSeparator)&&void 0!==e?e:" ",suffix:null!==(l=n.suffix)&&void 0!==l?l:" kr"};return(0,c.jsx)(p,{...t})},Date:function(n){var e;const l=(0,o.useContext)(h.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:null==l?void 0:l.translation.Forms.dateLabel};return(0,c.jsx)(d,{...t})},Email:function(n){var e;const l=(0,o.useContext)(h.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:null==l?void 0:l.translation.Forms.emailLabel};return(0,c.jsx)(d,{...t})},FirstName:function(n){var e;const l=(0,o.useContext)(h.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:null==l?void 0:l.translation.Forms.firstNameLabel};return(0,c.jsx)(d,{...t})},LastName:function(n){var e;const l=(0,o.useContext)(h.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:null==l?void 0:l.translation.Forms.lastNameLabel};return(0,c.jsx)(d,{...t})},NationalIdentityNumber:function(n){var e;const l=(0,o.useContext)(h.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:n.inline||null==l?void 0:l.translation.Forms.nationalIdentityNumberLabel,prepare:n=>(0,b.WU)((0,b.bR)(n),{nin:!0}).toString()};return(0,c.jsx)(d,{...t})},PhoneNumber:function(n){var e;const l=(0,o.useContext)(h.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:n.inline||null==l?void 0:l.translation.Forms.phoneNumberLabel,prepare:n=>(0,b.WU)((0,b.bR)(n),{phone:!0}).toString()};return(0,c.jsx)(d,{...t})},BankAccountNumber:function(n){var e;const l=(0,o.useContext)(h.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:n.inline||null==l?void 0:l.translation.Forms.bankAccountNumberLabel,prepare:n=>(0,b.WU)((0,b.bR)(n),{ban:!0}).toString()};return(0,c.jsx)(d,{...t})}}},49406:function(n,e,l){l.d(e,{Z:function(){return u}});var t=l(65731),a=l(94799),o=l(63472),r=l(72779),i=l.n(r),s=l(52322);function u(n){const{className:e,label:l,inline:r,placeholder:u,showEmpty:c,children:d}=n;return null!=d&&!1!==d||c||u?(0,s.jsxs)(t.Z,{className:i()("dnb-forms-value",r&&"dnb-forms-value-block--inline",e),...(0,o.p)(n),children:[l&&(0,s.jsx)(a.Z,{className:"dnb-forms-value-block__label",label_direction:r?"horizontal":"vertical",children:l}),null!=d?d:(0,s.jsx)("span",{className:"dnb-forms-value-block__placeholder",children:u})]}):null}},63472:function(n,e,l){l.d(e,{N:function(){return a},p:function(){return t}});const t=n=>({space:null==n?void 0:n.space,top:null==n?void 0:n.top,bottom:null==n?void 0:n.bottom,left:null==n?void 0:n.left,right:null==n?void 0:n.right}),a=n=>{const{space:e,top:l,bottom:t,left:a,right:o,...r}=n;return r}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-value-national-identity-number-demos-mdx-0780bcadfe433cdce838.js.map