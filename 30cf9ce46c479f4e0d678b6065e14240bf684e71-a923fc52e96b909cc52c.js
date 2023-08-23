"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[13976],{16240:function(e,o,a){a.d(o,{Z:function(){return he}});var n=a(2784),i=a(72779),l=a.n(i),s=a(16353),r=a(75511),t=a(72858),d=t.Z,c=a(63472),u=a(32831),m=a(96781),p=a(95955),v=a.n(p),b=a(27439),h=a(34763),f=a(72210),g=a(52322);const S=n.createContext(void 0);function x(e){const{className:o,label:a,labelDescription:i,labelSecondary:s,info:r,warning:t,error:d,children:u}=e,{0:p,1:v}=(0,n.useState)({}),{0:b,1:h}=(0,n.useState)({}),f=(0,n.useCallback)(((e,o)=>{v((a=>{if(o)return{...a,[e]:o};{const{[e]:o,...n}=a;return n}}))}),[]),x=(0,n.useCallback)(((e,o)=>{h((a=>{if(o)return{...a,[e]:!0};{const{[e]:o,...n}=a;return n}}))}),[]),_=(0,n.useMemo)((()=>{const e=Object.entries(p).filter((e=>{let[o]=e;return!0===b[o]})).map((e=>{let[,o]=e;return o}));return e.length>0?new Error(e.map((e=>e.message)).join(" | ")):void 0}),[p,b]);return(0,g.jsx)(S.Provider,{value:{setFieldError:f,setShowFieldError:x},children:(0,g.jsx)(m.Z,{className:l()("dnb-forms-field-group",o),label:a,labelDescription:i,labelSecondary:s,info:r,warning:t,error:null!=d?d:_,...(0,c.p)(e),children:u})})}x._supportsEufemiaSpacingProps=!0;var _=x,C=a(66485);function N(e){const{path:o,emptyValue:a,required:i,error:l,onFocus:s,onBlur:r,onChange:t,validator:d,onBlurValidator:c,schema:u,errorMessages:m,validateInitially:p,validateUnchanged:g,toInput:x=(e=>e),fromInput:_=(e=>e)}=e,N=(0,n.useMemo)((()=>{var o;return null!==(o=e.id)&&void 0!==o?o:(0,C.Xo)()}),[e.id]),y=(0,n.useContext)(f.Z.Context),M=(0,n.useContext)(S),E=Boolean(M),{setFieldError:F,setShowFieldError:k}=null!=M?M:{},{handlePathChange:Z,setPathWithError:P,errors:w}=null!=y?y:{};if(o&&"/"!==o.substring(0,1))throw new Error("Invalid path. Input path JSON Pointers  must be from root (starting with a /).");const j=(0,n.useMemo)((()=>{var a;return null!==(a=e.value)&&void 0!==a?a:y.data&&void 0!==o&&v().has(y.data,o)?v().get(y.data,o):void 0}),[o,e.value,y.data]),{0:I,1:A}=(0,n.useState)(j),B=(0,n.useRef)(!1);(0,n.useEffect)((()=>{A(j)}),[j]);const{0:L,1:T}=(0,n.useState)(),{0:G,1:R}=(0,n.useState)(Boolean(p||l)),V=(0,n.useMemo)((()=>u&&Object.keys(u).length>0?h.ZP.compile(u):void 0),[u]),K=(0,n.useCallback)((e=>{const a=e instanceof b.X&&"string"==typeof e.validationRule&&void 0!==(null==m?void 0:m[e.validationRule])?new b.X(m[e.validationRule]):e;T(a),o&&(null==P||P(o,Boolean(e))),null==F||F(null!=o?o:N,a)}),[o,N,m,P,F]),D=(0,n.useCallback)((e=>{if("function"==typeof d&&Promise.resolve(d(e)).then(K),e===a&&i){const e=new b.X("The value is required",{validationRule:"required"});return K(e),e}if(V){if(void 0===e&&void 0===a)return void K(void 0);V(e);const o=(0,h.K$)(V.errors);return K(o),o}K(void 0)}),[V,a,i,K,d]);(0,n.useEffect)((()=>{!L&&o&&null!=w&&w[o]&&K(w[o])}),[o,w,L,K]),(0,n.useEffect)((()=>{y.showAllErrors&&(R(!0),null==k||k(null!=o?o:N,!0))}),[N,o,y.showAllErrors,k]);const O=(0,n.useCallback)((e=>{let{onFocusValue:o}=e;null==s||s(null!=o?o:I)}),[I,s]),q=(0,n.useCallback)((e=>{let{onBlurValue:a}=e;null==r||r(null!=a?a:I),(B.current||g)&&("function"==typeof c&&Promise.resolve(c(null!=a?a:I)).then(K),R(!0),null==k||k(null!=o?o:N,!0))}),[N,o,I,r,g,c,K,k]),$=(0,n.useCallback)((e=>{const a=_(e);A(a),B.current=!0,R(!1),null==k||k(null!=o?o:N,!1),D(a),null==t||t(a),o&&(null==Z||Z(o,a))}),[N,o,t,D,Z,k,_]),z=(0,n.useMemo)((()=>null!=l?l:L),[l,L]);return(0,n.useEffect)((()=>(o&&(null==y||y.handleMountField(o)),D(j),()=>{o&&(null==y||y.handleUnMountField(o))})),[]),{...e,id:N,value:x(I),error:E?void 0:G?z:void 0,onFocus:O,onBlur:q,onChange:$}}function y(e){var o,a,i,t,p,v,b,h;const f=(0,n.useContext)(u.Z),S={...e,errorMessages:{required:null==f?void 0:f.translation.Forms.inputErrorRequired,minLength:null==f?void 0:f.translation.Forms.stringInputErrorMinLength.replace("{minLength}",null===(o=e.minLength)||void 0===o?void 0:o.toString()),maxLength:null==f?void 0:f.translation.Forms.stringInputErrorMaxLength.replace("{maxLength}",null===(a=e.maxLength)||void 0===a?void 0:a.toString()),pattern:null==f?void 0:f.translation.Forms.inputErrorPattern,...e.errorMessages},schema:null!==(i=e.schema)&&void 0!==i?i:{type:"string",minLength:e.minLength,maxLength:e.maxLength,pattern:e.pattern},fromInput:o=>{let{value:a,cleanedValue:n}=o;return""===a?e.emptyValue:null!=n?n:a},width:null!==(t=e.width)&&void 0!==t?t:"large"},{id:x,className:_,inputClassName:C,layout:y,type:M,placeholder:E,label:F,labelDescription:k,labelSecondary:Z,value:P,info:w,warning:j,error:I,disabled:A,multiline:B,leftIcon:L,rightIcon:T,clear:G,autoresize:R=!0,autoresizeMaxRows:V=6,characterCounter:K,mask:D,width:O,onFocus:q,onBlur:$,onChange:z}=N(S),U=K?e.maxLength?`${null!==(p=null==P?void 0:P.length)&&void 0!==p?p:"0"}/${e.maxLength}`:`${null!==(v=null==P?void 0:P.length)&&void 0!==v?v:"0"}`:void 0,H=l()("dnb-forms-field-string__input",C);return(0,g.jsx)(m.Z,{className:l()("dnb-forms-field-string",_),forId:x,layout:y,label:F,labelDescription:k,labelSecondary:null!=Z?Z:U,info:w,warning:j,error:I,contentsWidth:!1!==O?O:void 0,...(0,c.p)(e),children:B?(0,g.jsx)(s.Z,{id:x,className:H,placeholder:E,value:P,on_focus:q,on_blur:$,on_change:z,autoresize:R,autoresize_max_rows:V,disabled:A,stretch:void 0!==O}):D?(0,g.jsx)(d,{className:H,mask:D,placeholder:E,value:null!==(b=null==P?void 0:P.toString())&&void 0!==b?b:"",icon:null!=L?L:T,icon_position:T&&!L?"right":void 0,on_focus:q,on_blur:$,on_change:z,disabled:A,stretch:void 0!==O}):(0,g.jsx)(r.ZP,{id:x,className:H,type:M,placeholder:E,value:null!==(h=null==P?void 0:P.toString())&&void 0!==h?h:"",icon:null!=L?L:T,icon_position:T&&!L?"right":void 0,clear:G,on_focus:q,on_blur:$,on_change:z,disabled:A,stretch:void 0!==O})})}y._supportsEufemiaSpacingProps=!0;var M=y;function E(e){var o,a;const{thousandSeparator:n,decimalSymbol:i=",",decimalLimit:s=12,prefix:r,suffix:d,rightAligned:u}=e,p={...e,schema:null!==(o=e.schema)&&void 0!==o?o:{type:"number",minimum:e.minimum,maximum:e.maximum,exclusiveMinimum:e.exclusiveMinimum,exclusiveMaximum:e.exclusiveMaximum,multipleOf:e.multipleOf},toInput:e=>void 0===e?"":e,fromInput:e=>{let{value:o,numberValue:a}=e;return""===o?Z:a},width:null!==(a=e.width)&&void 0!==a?a:"medium"},{id:v,className:b,inputClassName:h,layout:f,placeholder:S,label:x,labelDescription:_,labelSecondary:C,value:y,disabled:M,info:E,warning:F,error:k,emptyValue:Z,width:P,onFocus:w,onBlur:j,onChange:I}=N(p);return(0,g.jsx)(m.Z,{className:l()("dnb-forms-field-number",b),forId:v,layout:f,label:x,labelDescription:_,labelSecondary:C,info:E,warning:F,error:k,contentsWidth:!1!==P?P:void 0,...(0,c.p)(e),children:(0,g.jsx)(t.Z,{id:v,className:l()("dnb-forms-field-number__input",h),placeholder:S,value:y,as_number:!0,number_mask:{decimalLimit:s,decimalSymbol:i,includeThousandsSeparator:void 0!==n,thousandsSeparatorSymbol:!0===n?" ":n,prefix:r,suffix:d},right:u,on_focus:w,on_blur:j,on_change:I,disabled:M,stretch:void 0!==P})})}E._supportsEufemiaSpacingProps=!0;var F=E,k=a(72151),Z=a(90524),P=a(96844),w=a(80215),j=a(66151);function I(e){const o=(0,n.useContext)(u.Z),{id:a,className:i,valueOn:s,valueOff:r,layout:t,variant:d,disabled:p,label:v,labelDescription:b,textOn:h,textOff:f,value:S,info:x,warning:_,error:C,onChange:y}=N(e),M=(0,n.useCallback)((e=>{let{checked:o}=e;null==y||y(o?s:r)}),[y,s,r]),E=(0,n.useCallback)((()=>{S!==s&&(null==y||y(s))}),[y,S,s]),F=(0,n.useCallback)((()=>{S!==r&&(null==y||y(r))}),[y,S,r]),I=l()("dnb-forms-field-boolean",i),A={forId:a,className:I,...(0,c.p)(e),info:x,warning:_,error:C},B={...A,layout:t,label:v,labelDescription:b},L=S===s;switch(d){default:case"checkbox":return(0,g.jsx)(m.Z,{...A,children:(0,g.jsx)(k.Z,{id:a,className:I,label:v,checked:L,disabled:p,on_change:M,...(0,c.p)(e)})});case"button":return(0,g.jsx)(m.Z,{...B,children:(0,g.jsx)(Z.Z,{id:a,text:L?null!=h?h:null==o?void 0:o.translation.Forms.booleanYes:null!=f?f:null==o?void 0:o.translation.Forms.booleanNo,checked:L,disabled:p,value:S?"true":"false",on_change:M})});case"buttons":return(0,g.jsxs)(m.Z,{...B,children:[(0,g.jsxs)(j.Z,{children:[(0,g.jsx)(P.Z,{id:a,text:null!=h?h:null==o?void 0:o.translation.Forms.booleanYes,on_click:E,variant:L?void 0:"secondary",status:C?"error":void 0,disabled:p}),(0,g.jsx)(P.Z,{id:a,text:null!=f?f:null==o?void 0:o.translation.Forms.booleanNo,on_click:F,variant:L?"secondary":void 0,status:C?"error":void 0,disabled:p})]}),(0,g.jsx)(w.Z,{bottom:"x-small"})]});case"checkbox-button":return(0,g.jsx)(m.Z,{...B,children:(0,g.jsx)(Z.Z,{id:a,variant:"checkbox",text:L?null!=h?h:null==o?void 0:o.translation.Forms.booleanYes:null!=f?f:null==o?void 0:o.translation.Forms.booleanNo,checked:L,disabled:p,value:S?"true":"false",on_change:M})})}}I._supportsEufemiaSpacingProps=!0;var A=I;function B(e){const o=(0,n.useContext)(u.Z),{trueText:a,falseText:i,...l}=e;return(0,g.jsx)(A,{...l,valueOn:!0,valueOff:!1,textOn:null!=a?a:null==o?void 0:o.translation.Forms.booleanYes,textOff:null!=i?i:null==o?void 0:o.translation.Forms.booleanNo})}B._supportsEufemiaSpacingProps=!0;var L=B;function T(e){var o;const a={...e,fromInput:o=>{let{value:a,numberValue:n}=o;return""===a?e.emptyValue:n}},{className:n,currency:i,placeholder:s,label:r,value:d,error:u,disabled:m,onFocus:p,onBlur:v,onChange:b}=N(a);return(0,g.jsx)(t.Z,{as_currency:null==i||i,className:l()("dnb-forms-field-currency",n),placeholder:null!=s?s:"kr",value:null!==(o=null==d?void 0:d.toString())&&void 0!==o?o:"",label:r,label_direction:"vertical",on_focus:p,on_blur:v,on_change:b,status:null==u?void 0:u.message,disabled:m,...(0,c.p)(e)})}T._supportsEufemiaSpacingProps=!0;var G=T,R=a(47081);function V(e){const o=(0,n.useContext)(u.Z),a={...e,fromInput:e=>{let{date:o}=e;return o}},{className:i,label:l,value:s,error:r,disabled:t,onFocus:d,onBlur:m,onChange:p}=N(a);return(0,g.jsx)(R.Z,{className:i,label:null!=l?l:null==o?void 0:o.translation.Forms.dateLabel,label_direction:"vertical",date:s,status:null==r?void 0:r.message,disabled:t,show_input:!0,show_cancel_button:!0,show_reset_button:!0,on_change:p,on_show:d,on_hide:m,...(0,c.p)(e)})}V._supportsEufemiaSpacingProps=!0;var K=V;function D(e){var o,a,i;const l=(0,n.useContext)(u.Z),s={...e,type:null!==(o=e.type)&&void 0!==o?o:"email",pattern:null!==(a=e.pattern)&&void 0!==a?a:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",label:null!==(i=e.label)&&void 0!==i?i:null==l?void 0:l.translation.Forms.emailLabel,errorMessages:{required:null==l?void 0:l.translation.Forms.emailErrorRequired,pattern:null==l?void 0:l.translation.Forms.emailErrorPattern,...e.errorMessages}};return(0,g.jsx)(M,{...s})}D._supportsEufemiaSpacingProps=!0;var O=D;function q(e){var o;const a=(0,n.useContext)(u.Z),i={...e,label:null!==(o=e.label)&&void 0!==o?o:null==a?void 0:a.translation.Forms.firstNameLabel,errorMessages:{required:null==a?void 0:a.translation.Forms.firstNameErrorRequired,...e.errorMessages}};return(0,g.jsx)(M,{...i})}q._supportsEufemiaSpacingProps=!0;var $=q;function z(e){var o;const a=(0,n.useContext)(u.Z),i={...e,label:null!==(o=e.label)&&void 0!==o?o:null==a?void 0:a.translation.Forms.lastNameLabel,errorMessages:{required:null==a?void 0:a.translation.Forms.lastNameErrorRequired,...e.errorMessages}};return(0,g.jsx)(M,{...i})}z._supportsEufemiaSpacingProps=!0;var U=z;function H(e){var o,a,i;const l=(0,n.useContext)(u.Z),{validate:s=!0,omitMask:r}=e,t={...e,pattern:null!==(o=e.pattern)&&void 0!==o?o:s?"^[0-9]{11}$":void 0,label:null!==(a=e.label)&&void 0!==a?a:null==l?void 0:l.translation.Forms.nationalIdentityNumberLabel,errorMessages:{required:null==l?void 0:l.translation.Forms.nationalIdentityNumberErrorRequired,pattern:null==l?void 0:l.translation.Forms.nationalIdentityNumberErrorPattern,...e.errorMessages},mask:r?[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]:[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/,/\d/],width:null!==(i=e.width)&&void 0!==i?i:"medium"};return(0,g.jsx)(M,{...t})}H._supportsEufemiaSpacingProps=!0;var W=H,Y=a(34107),J=a(25807),X=[{name:"Afghanistan",code:"93",iso:"AF"},{name:"Albania",code:"355",iso:"AL"},{name:"Algeria",code:"213",iso:"DZ"},{name:"American Samoa",code:"1-684",iso:"AS"},{name:"Andorra",code:"376",iso:"AD"},{name:"Angola",code:"244",iso:"AO"},{name:"Anguilla",code:"1-264",iso:"AI"},{name:"Antarctica",code:"672",iso:"AQ"},{name:"Antigua and Barbuda",code:"1-268",iso:"AG"},{name:"Argentina",code:"54",iso:"AR"},{name:"Armenia",code:"374",iso:"AM"},{name:"Aruba",code:"297",iso:"AW"},{name:"Australia",code:"61",iso:"AU"},{name:"Austria",code:"43",iso:"AT"},{name:"Azerbaijan",code:"994",iso:"AZ"},{name:"Bahamas",code:"1-242",iso:"BS"},{name:"Bahrain",code:"973",iso:"BH"},{name:"Bangladesh",code:"880",iso:"BD"},{name:"Barbados",code:"1-246",iso:"BB"},{name:"Belarus",code:"375",iso:"BY"},{name:"Belgium",code:"32",iso:"BE"},{name:"Belize",code:"501",iso:"BZ"},{name:"Benin",code:"229",iso:"BJ"},{name:"Bermuda",code:"1-441",iso:"BM"},{name:"Bhutan",code:"975",iso:"BT"},{name:"Bolivia",code:"591",iso:"BO"},{name:"Bosnia and Herzegovina",code:"387",iso:"BA"},{name:"Botswana",code:"267",iso:"BW"},{name:"Brazil",code:"55",iso:"BR"},{name:"British Indian Ocean Territory",code:"246",iso:"IO"},{name:"British Virgin Islands",code:"1-284",iso:"VG"},{name:"Brunei",code:"673",iso:"BN"},{name:"Bulgaria",code:"359",iso:"BG"},{name:"Burkina Faso",code:"226",iso:"BF"},{name:"Burundi",code:"257",iso:"BI"},{name:"Cambodia",code:"855",iso:"KH"},{name:"Cameroon",code:"237",iso:"CM"},{name:"Canada",code:"1",iso:"CA"},{name:"Cape Verde",code:"238",iso:"CV"},{name:"Cayman Islands",code:"1-345",iso:"KY"},{name:"Central African Republic",code:"236",iso:"CF"},{name:"Chad",code:"235",iso:"TD"},{name:"Chile",code:"56",iso:"CL"},{name:"China",code:"86",iso:"CN"},{name:"Christmas Island",code:"61",iso:"CX"},{name:"Cocos Islands",code:"61",iso:"CC"},{name:"Colombia",code:"57",iso:"CO"},{name:"Comoros",code:"269",iso:"KM"},{name:"Cook Islands",code:"682",iso:"CK"},{name:"Costa Rica",code:"506",iso:"CR"},{name:"Croatia",code:"385",iso:"HR"},{name:"Cuba",code:"53",iso:"CU"},{name:"Curacao",code:"599",iso:"CW"},{name:"Cyprus",code:"357",iso:"CY"},{name:"Czech Republic",code:"420",iso:"CZ"},{name:"Democratic Republic of the Congo",code:"243",iso:"CD"},{name:"Denmark",code:"45",iso:"DK"},{name:"Djibouti",code:"253",iso:"DJ"},{name:"Dominica",code:"1-767",iso:"DM"},{name:"Dominican Republic",code:"1-809, 1-829, 1-849",iso:"DO"},{name:"East Timor",code:"670",iso:"TL"},{name:"Ecuador",code:"593",iso:"EC"},{name:"Egypt",code:"20",iso:"EG"},{name:"El Salvador",code:"503",iso:"SV"},{name:"Equatorial Guinea",code:"240",iso:"GQ"},{name:"Eritrea",code:"291",iso:"ER"},{name:"Estonia",code:"372",iso:"EE"},{name:"Ethiopia",code:"251",iso:"ET"},{name:"Falkland Islands",code:"500",iso:"FK"},{name:"Faroe Islands",code:"298",iso:"FO"},{name:"Fiji",code:"679",iso:"FJ"},{name:"Finland",code:"358",iso:"FI"},{name:"France",code:"33",iso:"FR"},{name:"French Polynesia",code:"689",iso:"PF"},{name:"Gabon",code:"241",iso:"GA"},{name:"Gambia",code:"220",iso:"GM"},{name:"Georgia",code:"995",iso:"GE"},{name:"Germany",code:"49",iso:"DE"},{name:"Ghana",code:"233",iso:"GH"},{name:"Gibraltar",code:"350",iso:"GI"},{name:"Greece",code:"30",iso:"GR"},{name:"Greenland",code:"299",iso:"GL"},{name:"Grenada",code:"1-473",iso:"GD"},{name:"Guam",code:"1-671",iso:"GU"},{name:"Guatemala",code:"502",iso:"GT"},{name:"Guernsey",code:"44-1481",iso:"GG"},{name:"Guinea",code:"224",iso:"GN"},{name:"Guinea-Bissau",code:"245",iso:"GW"},{name:"Guyana",code:"592",iso:"GY"},{name:"Haiti",code:"509",iso:"HT"},{name:"Honduras",code:"504",iso:"HN"},{name:"Hong Kong",code:"852",iso:"HK"},{name:"Hungary",code:"36",iso:"HU"},{name:"Iceland",code:"354",iso:"IS"},{name:"India",code:"91",iso:"IN"},{name:"Indonesia",code:"62",iso:"ID"},{name:"Iran",code:"98",iso:"IR"},{name:"Iraq",code:"964",iso:"IQ"},{name:"Ireland",code:"353",iso:"IE"},{name:"Isle of Man",code:"44-1624",iso:"IM"},{name:"Israel",code:"972",iso:"IL"},{name:"Italy",code:"39",iso:"IT"},{name:"Ivory Coast",code:"225",iso:"CI"},{name:"Jamaica",code:"1-876",iso:"JM"},{name:"Japan",code:"81",iso:"JP"},{name:"Jersey",code:"44-1534",iso:"JE"},{name:"Jordan",code:"962",iso:"JO"},{name:"Kazakhstan",code:"7",iso:"KZ"},{name:"Kenya",code:"254",iso:"KE"},{name:"Kiribati",code:"686",iso:"KI"},{name:"Kosovo",code:"383",iso:"XK"},{name:"Kuwait",code:"965",iso:"KW"},{name:"Kyrgyzstan",code:"996",iso:"KG"},{name:"Laos",code:"856",iso:"LA"},{name:"Latvia",code:"371",iso:"LV"},{name:"Lebanon",code:"961",iso:"LB"},{name:"Lesotho",code:"266",iso:"LS"},{name:"Liberia",code:"231",iso:"LR"},{name:"Libya",code:"218",iso:"LY"},{name:"Liechtenstein",code:"423",iso:"LI"},{name:"Lithuania",code:"370",iso:"LT"},{name:"Luxembourg",code:"352",iso:"LU"},{name:"Macao",code:"853",iso:"MO"},{name:"Macedonia",code:"389",iso:"MK"},{name:"Madagascar",code:"261",iso:"MG"},{name:"Malawi",code:"265",iso:"MW"},{name:"Malaysia",code:"60",iso:"MY"},{name:"Maldives",code:"960",iso:"MV"},{name:"Mali",code:"223",iso:"ML"},{name:"Malta",code:"356",iso:"MT"},{name:"Marshall Islands",code:"692",iso:"MH"},{name:"Mauritania",code:"222",iso:"MR"},{name:"Mauritius",code:"230",iso:"MU"},{name:"Mayotte",code:"262",iso:"YT"},{name:"Mexico",code:"52",iso:"MX"},{name:"Micronesia",code:"691",iso:"FM"},{name:"Moldova",code:"373",iso:"MD"},{name:"Monaco",code:"377",iso:"MC"},{name:"Mongolia",code:"976",iso:"MN"},{name:"Montenegro",code:"382",iso:"ME"},{name:"Montserrat",code:"1-664",iso:"MS"},{name:"Morocco",code:"212",iso:"MA"},{name:"Mozambique",code:"258",iso:"MZ"},{name:"Myanmar",code:"95",iso:"MM"},{name:"Namibia",code:"264",iso:"NA"},{name:"Nauru",code:"674",iso:"NR"},{name:"Nepal",code:"977",iso:"NP"},{name:"Netherlands",code:"31",iso:"NL"},{name:"Netherlands Antilles",code:"599",iso:"AN"},{name:"New Caledonia",code:"687",iso:"NC"},{name:"New Zealand",code:"64",iso:"NZ"},{name:"Nicaragua",code:"505",iso:"NI"},{name:"Niger",code:"227",iso:"NE"},{name:"Nigeria",code:"234",iso:"NG"},{name:"Niue",code:"683",iso:"NU"},{name:"North Korea",code:"850",iso:"KP"},{name:"Northern Mariana Islands",code:"1-670",iso:"MP"},{name:"Norway",code:"47",iso:"NO"},{name:"Oman",code:"968",iso:"OM"},{name:"Pakistan",code:"92",iso:"PK"},{name:"Palau",code:"680",iso:"PW"},{name:"Palestine",code:"970",iso:"PS"},{name:"Panama",code:"507",iso:"PA"},{name:"Papua New Guinea",code:"675",iso:"PG"},{name:"Paraguay",code:"595",iso:"PY"},{name:"Peru",code:"51",iso:"PE"},{name:"Philippines",code:"63",iso:"PH"},{name:"Pitcairn",code:"64",iso:"PN"},{name:"Poland",code:"48",iso:"PL"},{name:"Portugal",code:"351",iso:"PT"},{name:"Puerto Rico",code:"1-787, 1-939",iso:"PR"},{name:"Qatar",code:"974",iso:"QA"},{name:"Republic of the Congo",code:"242",iso:"CG"},{name:"Reunion",code:"262",iso:"RE"},{name:"Romania",code:"40",iso:"RO"},{name:"Russia",code:"7",iso:"RU"},{name:"Rwanda",code:"250",iso:"RW"},{name:"Saint Barthelemy",code:"590",iso:"BL"},{name:"Saint Helena",code:"290",iso:"SH"},{name:"Saint Kitts and Nevis",code:"1-869",iso:"KN"},{name:"Saint Lucia",code:"1-758",iso:"LC"},{name:"Saint Martin",code:"590",iso:"MF"},{name:"Saint Pierre and Miquelon",code:"508",iso:"PM"},{name:"Saint Vincent and the Grenadines",code:"1-784",iso:"VC"},{name:"Samoa",code:"685",iso:"WS"},{name:"San Marino",code:"378",iso:"SM"},{name:"Sao Tome and Principe",code:"239",iso:"ST"},{name:"Saudi Arabia",code:"966",iso:"SA"},{name:"Senegal",code:"221",iso:"SN"},{name:"Serbia",code:"381",iso:"RS"},{name:"Seychelles",code:"248",iso:"SC"},{name:"Sierra Leone",code:"232",iso:"SL"},{name:"Singapore",code:"65",iso:"SG"},{name:"Sint Maarten",code:"1-721",iso:"SX"},{name:"Slovakia",code:"421",iso:"SK"},{name:"Slovenia",code:"386",iso:"SI"},{name:"Solomon Islands",code:"677",iso:"SB"},{name:"Somalia",code:"252",iso:"SO"},{name:"South Africa",code:"27",iso:"ZA"},{name:"South Korea",code:"82",iso:"KR"},{name:"South Sudan",code:"211",iso:"SS"},{name:"Spain",code:"34",iso:"ES"},{name:"Sri Lanka",code:"94",iso:"LK"},{name:"Sudan",code:"249",iso:"SD"},{name:"Suriname",code:"597",iso:"SR"},{name:"Svalbard and Jan Mayen",code:"47",iso:"SJ"},{name:"Swaziland",code:"268",iso:"SZ"},{name:"Sweden",code:"46",iso:"SE"},{name:"Switzerland",code:"41",iso:"CH"},{name:"Syria",code:"963",iso:"SY"},{name:"Taiwan",code:"886",iso:"TW"},{name:"Tajikistan",code:"992",iso:"TJ"},{name:"Tanzania",code:"255",iso:"TZ"},{name:"Thailand",code:"66",iso:"TH"},{name:"Togo",code:"228",iso:"TG"},{name:"Tokelau",code:"690",iso:"TK"},{name:"Tonga",code:"676",iso:"TO"},{name:"Trinidad and Tobago",code:"1-868",iso:"TT"},{name:"Tunisia",code:"216",iso:"TN"},{name:"Turkey",code:"90",iso:"TR"},{name:"Turkmenistan",code:"993",iso:"TM"},{name:"Turks and Caicos Islands",code:"1-649",iso:"TC"},{name:"Tuvalu",code:"688",iso:"TV"},{name:"U.S. Virgin Islands",code:"1-340",iso:"VI"},{name:"Uganda",code:"256",iso:"UG"},{name:"Ukraine",code:"380",iso:"UA"},{name:"United Arab Emirates",code:"971",iso:"AE"},{name:"United Kingdom",code:"44",iso:"GB"},{name:"United States",code:"1",iso:"US"},{name:"Uruguay",code:"598",iso:"UY"},{name:"Uzbekistan",code:"998",iso:"UZ"},{name:"Vanuatu",code:"678",iso:"VU"},{name:"Vatican",code:"379",iso:"VA"},{name:"Venezuela",code:"58",iso:"VE"},{name:"Vietnam",code:"84",iso:"VN"},{name:"Wallis and Futuna",code:"681",iso:"WF"},{name:"Western Sahara",code:"212",iso:"EH"},{name:"Yemen",code:"967",iso:"YE"},{name:"Zambia",code:"260",iso:"ZM"},{name:"Zimbabwe",code:"263",iso:"ZW"}];function Q(e){var o,a;const i=(0,n.useContext)(u.Z),s={...e,errorMessages:{required:null==i?void 0:i.translation.Forms.phoneNumberErrorRequired,...null==e?void 0:e.errorMessages}},{className:t,countryCodeFieldClassName:d,numberFieldClassName:m,placeholder:p,label:v=(null==i?void 0:i.translation.Forms.phoneNumberLabel),value:b,emptyValue:h,error:f,disabled:S,width:x="large",onFocus:_,onBlur:C,onChange:y}=N(s),[,M="+47",E=""]=null!==(o=null===(a=null!=b?b:"")||void 0===a?void 0:a.match(/^(\+[^ ]+)? ?(.*)$/))&&void 0!==o?o:[],F=(0,n.useMemo)((()=>X.map((e=>({selected_key:`+${e.code}`,selected_value:`${e.iso} (+${e.code})`,content:`+${e.code} ${e.name}`})))),[]),k=(0,n.useCallback)((e=>{let{data:o}=e;o&&o.selected_key.trim()||E.trim()?null==y||y(`${(null==o?void 0:o.selected_key)||""} ${E}`):null==y||y(h)}),[E,h,y]),Z=(0,n.useCallback)((e=>{let{value:o}=e;o.trim()||M.trim()?null==y||y([M,o].filter(Boolean).join(" ")):null==y||y(h)}),[M,h,y]);return(0,g.jsxs)(Y.Z,{className:l()("dnb-forms-field-phone-number",void 0!==x&&`dnb-forms-field-phone-number--width-${x}`,t),...(0,c.p)(s),children:[(0,g.jsx)(J.Z,{className:l()("dnb-forms-field-phone-number__country-code",d),label_direction:"vertical",label:null==i?void 0:i.translation.Forms.countryCodeLabel,data:F,value:null!=M?M:"+47",disabled:S,on_change:k,independent_width:!0}),(0,g.jsx)(r.ZP,{className:l()("dnb-forms-field-phone-number__number",m),label_direction:"vertical",label:null!=v?v:" ",placeholder:null!=p?p:"00 00 00 00",on_change:Z,on_focus:_,on_blur:C,value:E,status:null==f?void 0:f.message,disabled:S,type:"tel"})]})}Q._supportsEufemiaSpacingProps=!0;var ee=Q;function oe(e){var o,a,i;const l=(0,n.useContext)(u.Z),{validate:s=!0,omitMask:r}=e,t={...e,className:"dnb-forms-field-organization-number",pattern:null!==(o=e.pattern)&&void 0!==o?o:s?"^[0-9]{9}$":void 0,label:null!==(a=e.label)&&void 0!==a?a:null==l?void 0:l.translation.Forms.organizationNumberLabel,errorMessages:{required:null==l?void 0:l.translation.Forms.organizationNumberErrorRequired,pattern:null==l?void 0:l.translation.Forms.organizationNumberErrorPattern,...e.errorMessages},mask:r?[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]:[/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/],width:null!==(i=e.width)&&void 0!==i?i:"medium"};return(0,g.jsx)(M,{...t})}oe._supportsEufemiaSpacingProps=!0;var ae=oe;function ne(e){var o,a,i,s;const r=(0,n.useContext)(u.Z),{postalCode:t={},city:d={},width:c="large",...m}=e;return(0,g.jsx)(_,{className:l()("dnb-forms-field-postal-code-and-city",e.className),...m,children:(0,g.jsxs)("div",{className:l()("dnb-forms-field-postal-code-and-city__fields",void 0!==c&&`dnb-forms-field-postal-code-and-city--width-${c}`),children:[(0,g.jsx)(M,{...t,pattern:null!==(o=t.pattern)&&void 0!==o?o:"^[0-9]{4}$",className:l()("dnb-forms-field-postal-code-and-city__postal-code",t.className),label:null!==(a=t.label)&&void 0!==a?a:null==r?void 0:r.translation.Forms.postalCodeLabel,errorMessages:{required:null==r?void 0:r.translation.Forms.postalCodeErrorRequired,pattern:null==r?void 0:r.translation.Forms.postalCodeErrorPattern,...t.errorMessages},placeholder:null!==(i=t.placeholder)&&void 0!==i?i:"0000",width:!1,inputClassName:"dnb-forms-field-postal-code-and-city__postal-code-input"}),(0,g.jsx)(M,{...d,className:l()("dnb-forms-field-postal-code-and-city__city",d.className),label:null!==(s=d.label)&&void 0!==s?s:null==r?void 0:r.translation.Forms.cityLabel,errorMessages:{required:null==r?void 0:r.translation.Forms.cityErrorRequired,...d.errorMessages},width:"stretch"})]})})}ne._supportsEufemiaSpacingProps=!0;var ie=ne,le=a(20167),se=a(469);function re(e){let{className:o,title:a,text:n,children:i}=e;return(0,g.jsxs)("span",{className:l()("dnb-forms-field-option",o),role:"option",children:[null!=i?i:a,n]})}function te(e){const{className:o,variant:a,label:i,layout:s="vertical",placeholder:r,value:t,error:d,disabled:u,emptyValue:m,width:p="large",onBlur:v,onFocus:b,onChange:h,children:f}=N(e),S=(0,n.useCallback)((e=>{let{data:{selected_key:o}}=e;null==h||h(o||m)}),[h,m]),x=(0,n.useCallback)((e=>{let{value:o}=e;null==h||h(void 0===o?m:o)}),[h,m]),_=(0,n.useCallback)((e=>{let{data:o}=e;null==v||v({onBlurValue:null==o?void 0:o.selected_key})}),[v]);switch(a){case"checkbox":return(0,g.jsx)(Y.Z,{className:l()("dnb-forms-field-selection",o),...(0,c.p)(e),children:n.Children.toArray(f).filter((e=>n.isValidElement(e)&&e.type===re)).map(((e,o)=>{var a,n,i;return(0,g.jsx)(k.Z,{label:null!==(n=e.props.title)&&void 0!==n?n:e.props.children,value:String(null!==(i=e.props.value)&&void 0!==i?i:"")},null!==(a=e.props.value)&&void 0!==a?a:`option-${o}`)}))});case"radio":return(0,g.jsx)(le.Z.Group,{className:l()("dnb-forms-field-selection",o),label:i,layout_direction:"column",on_change:x,...(0,c.p)(e),vertical:!0,children:n.Children.toArray(f).filter((e=>n.isValidElement(e)&&e.type===re)).map(((e,o)=>{var a,n,i;return(0,g.jsx)(le.Z,{label:null!==(n=e.props.title)&&void 0!==n?n:e.props.children,value:String(null!==(i=e.props.value)&&void 0!==i?i:"")},null!==(a=e.props.value)&&void 0!==a?a:`option-${o}`)}))});default:{const a=n.Children.map(f,(e=>{var o,a,i,l;return n.isValidElement(e)&&e.type===re?e.props.text?{selected_key:String(null!==(o=e.props.value)&&void 0!==o?o:""),content:[null!==(a=null!==(i=e.props.title)&&void 0!==i?i:e.props.children)&&void 0!==a?a:(0,g.jsx)("em",{children:"Untitled"}),e.props.text]}:{selected_key:e.props.value,content:null!==(l=e.props.title)&&void 0!==l?l:e.props.children}:{content:e}}));return(0,g.jsx)(se.Z,{className:l()("dnb-forms-field-selection","stretch"!==p&&`dnb-forms-field-selection--width-${p}`,o),list_class:"dnb-forms-field-selection__list",portal_class:"dnb-forms-field-selection__portal",title:r,default_value:String(null!=t?t:""),label:i,label_direction:s,status:null==d?void 0:d.message,disabled:u,data:a,on_change:S,on_show:b,on_hide:_,...(0,c.p)(e),stretch:"stretch"===p})}}}te._supportsEufemiaSpacingProps=!0;var de=te,ce=a(84616);function ue(e){const{className:o,variant:a,layout:i,label:s,labelDescription:r,labelSecondary:t,value:d,error:u,info:p,warning:v,disabled:b,emptyValue:h,onChange:f,children:S}=N(e),x=n.Children.toArray(S).filter((e=>n.isValidElement(e)&&e.type===re));return(0,g.jsx)(m.Z,{className:l()("dnb-forms-field-string",o),layout:i,label:s,labelDescription:r,labelSecondary:t,info:p,warning:v,error:u,...(0,c.p)(e),children:x.map(((e,o)=>{var a,i;return(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(k.Z,{label:null!==(i=e.props.title)&&void 0!==i?i:e.props.children,checked:e.props.value&&(null==d?void 0:d.includes(e.props.value)),top:o>0?"x-small":void 0,disabled:b,onChange:()=>{const o=e.props.value;void 0===o&&(null==f||f(h));const a=null!=d&&d.includes(o)?d.filter((e=>e!==o)):[].concat((0,ce.Z)(null!=d?d:[]),[o]);null==f||f(0===a.length?h:a)}}),(0,g.jsx)("br",{})]},null!==(a=e.props.value)&&void 0!==a?a:`option-${o}`)}))})}ue._supportsEufemiaSpacingProps=!0;var me=ue;function pe(e){var o,a;const i=(0,n.useContext)(u.Z),l={...e,placeholder:null!==(o=e.placeholder)&&void 0!==o?o:null==i?void 0:i.translation.Forms.selectCountryPlaceholder,label:null!==(a=e.label)&&void 0!==a?a:null==i?void 0:i.translation.Forms.selectCountryLabel,errorMessages:{required:null==i?void 0:i.translation.Forms.selectCountryErrorRequired,...e.errorMessages}};return(0,g.jsx)(de,{...l,children:X.map((e=>(0,g.jsx)(re,{value:e.iso,title:e.name},e.iso)))})}pe._supportsEufemiaSpacingProps=!0;var ve=pe;function be(e){var o,a,i;const l=(0,n.useContext)(u.Z),{validate:s=!0,omitMask:r}=e,t={...e,className:"dnb-forms-field-bank-account-number",pattern:null!==(o=e.pattern)&&void 0!==o?o:s?"^[0-9]{11}$":void 0,label:null!==(a=e.label)&&void 0!==a?a:null==l?void 0:l.translation.Forms.bankAccountNumberLabel,errorMessages:{required:null==l?void 0:l.translation.Forms.bankAccountNumberErrorRequired,pattern:null==l?void 0:l.translation.Forms.bankAccountNumberErrorPattern,...e.errorMessages},mask:r?[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]:[/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/,/\d/],width:null!==(i=e.width)&&void 0!==i?i:"medium"};return(0,g.jsx)(M,{...t})}be._supportsEufemiaSpacingProps=!0;var he={String:M,Number:F,Toggle:A,Boolean:L,Currency:G,Date:K,Email:O,FirstName:$,LastName:U,NationalIdentityNumber:W,OrganizationNumber:ae,PhoneNumber:ee,PostalCodeAndCity:ie,Selection:de,ArraySelection:me,Option:re,SelectCountry:ve,BankAccountNumber:be}},96781:function(e,o,a){var n=a(72779),i=a.n(n),l=a(34107),s=a(65731),r=a(94799),t=a(79583),d=a(63472),c=a(27439),u=a(52322);function m(e){const{className:o,forId:a,layout:n="vertical",label:m,labelDescription:p,labelSecondary:v,info:b,warning:h,error:f,width:g,contentsWidth:S,children:x}=e,_=i()("dnb-forms-field-block",void 0!==g&&`dnb-forms-field-block--width-${g}`,o);return(0,u.jsxs)(l.Z,{className:_,...(0,d.p)(e),children:[p||v?(0,u.jsxs)("div",{className:"dnb-forms-field-block__label-block",children:[m||p?(0,u.jsxs)(r.Z,{for_id:a,label_direction:n,space:{bottom:"x-small"},children:[m,p&&(0,u.jsx)("span",{className:"dnb-forms-field-block__label-description",children:p})]}):(0,u.jsx)(u.Fragment,{children:" "}),v&&(0,u.jsx)(s.Z,{className:"dnb-forms-field-block__label-secondary",children:v})]}):m&&(0,u.jsx)(r.Z,{for_id:a,label_direction:n,space:{bottom:"x-small"},children:m}),(0,u.jsx)("div",{className:i()("dnb-forms-field-block__contents",void 0!==S&&`dnb-forms-field-block__contents--width-${S}`),children:x}),f&&(0,u.jsx)(t.ZP,{state:"error",id:a?`${a}-form-status`:void 0,text:null==f?void 0:f.message,label:m,space:{top:"x-small"}}),h&&(0,u.jsx)(t.ZP,{state:"warn",id:a?`${a}-form-status`:void 0,text:h instanceof Error&&h.message||h instanceof c.X&&h.message||(null==b?void 0:b.toString()),label:m,space:{top:"x-small"}}),b&&(0,u.jsx)(t.ZP,{state:"info",id:a?`${a}-form-status`:void 0,text:b instanceof Error&&b.message||b instanceof c.X&&b.message||(null==b?void 0:b.toString()),label:m,space:{top:"x-small"}})]})}m._supportsEufemiaSpacingProps=!0,o.Z=m},66151:function(e,o,a){var n=a(72779),i=a.n(n),l=a(34107),s=a(63472),r=a(52322);function t(e){const{className:o,children:a}=e;return(0,r.jsx)(l.Z,{className:i()("dnb-forms-button-row",o),...(0,s.p)(e),children:a})}t._supportsEufemiaSpacingProps=!0,o.Z=t},63472:function(e,o,a){a.d(o,{N:function(){return i},p:function(){return n}});const n=e=>({space:null==e?void 0:e.space,top:null==e?void 0:e.top,bottom:null==e?void 0:e.bottom,left:null==e?void 0:e.left,right:null==e?void 0:e.right}),i=e=>{const{space:o,top:a,bottom:n,left:i,right:l,...s}=e;return s}}}]);
//# sourceMappingURL=30cf9ce46c479f4e0d678b6065e14240bf684e71-a923fc52e96b909cc52c.js.map