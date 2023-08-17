"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[55540],{65946:function(n,e,s){s.r(e);var a=s(52322),r=s(45392),i=s(84384);function l(n){const e=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3",code:"code",h4:"h4",ul:"ul",li:"li"},(0,r.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Description"}),"\n",(0,a.jsxs)(e.p,{children:["The InputMasked component uses the basic ",(0,a.jsx)(e.a,{href:"/uilib/components/input",children:"Input"})," component, but with some additional masking functionality."]}),"\n",(0,a.jsx)(e.h3,{children:"How it works"}),"\n",(0,a.jsxs)(e.p,{children:["This component uses the basic ",(0,a.jsx)(e.a,{href:"/uilib/components/input",children:"Input"})," but with a set of options and features."]}),"\n",(0,a.jsxs)(e.p,{children:["You will either create your own mask, or use one of the provided once. There are also masks which change based on different ",(0,a.jsx)(e.a,{href:"/uilib/components/input-masked/info?fullscreen#mask-based-on-locale",children:"locales"})," (",(0,a.jsx)(e.code,{children:"as_currency"})," or ",(0,a.jsx)(e.code,{children:"as_number"}),")."]}),"\n",(0,a.jsx)(e.h3,{children:"Accessibility"}),"\n",(0,a.jsx)(e.p,{children:"Screen readers will read also the mask before the user is entering the content. Also, the user will hear the mask during typing. This behavior can both have positive and negative side effects on the user. But overall, it works ok."}),"\n",(0,a.jsxs)(e.p,{children:["Both entering a comma or a dot will act as a decimal separator if ",(0,a.jsx)(e.a,{href:"/uilib/components/input-masked/#decimals",children:"decimals are enabled"})," and one of the internal masks for numbers is used."]}),"\n",(0,a.jsx)(e.h4,{children:"InputMode"}),"\n",(0,a.jsxs)(e.p,{children:["For mobile devices and soft keyboards, the HTML input element does support a numeric-only keyboard. But sadly it does not support negative values at the time of writing this. So it is only enabled if ",(0,a.jsx)(e.code,{children:"allowNegative"})," is set to false."]}),"\n",(0,a.jsx)(i.u4,{}),"\n",(0,a.jsx)(e.h3,{children:"Mask based on locale"}),"\n",(0,a.jsxs)(e.p,{children:["The InputMasked component supports masks based on a given locale. The locale will be inherited from the ",(0,a.jsx)(e.a,{href:"/uilib/usage/customisation/provider",children:"Eufemia Provider"})," if not given."]}),"\n",(0,a.jsx)(e.p,{children:"As of now, you can enable these masks by giving:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:'as_currency="EUR"'})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"as_number={true}"})}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["You can still send in custom mask parameters to ",(0,a.jsx)(e.code,{children:"currency_mask={{ ... }}"})," or ",(0,a.jsx)(e.code,{children:"number_mask={{ ... }}"}),". But you can also make use of ",(0,a.jsx)(e.code,{children:"mask_options={{ ... }}"})," and just send in your extra options in there."]}),"\n",(0,a.jsxs)(e.p,{children:["More details in the ",(0,a.jsx)(e.a,{href:"/uilib/components/input-masked/demos",children:"examples above"}),"."]}),"\n",(0,a.jsx)(e.h4,{children:"Clean number values"}),"\n",(0,a.jsxs)(e.p,{children:["If you use ",(0,a.jsx)(e.code,{children:"as_currency"})," or ",(0,a.jsx)(e.code,{children:"as_number"})," you have to always send in in a clean number without any mask (",(0,a.jsx)(e.code,{children:'value="1234.50"'}),"):"]}),"\n",(0,a.jsx)(i.Ed,{}),"\n",(0,a.jsx)(e.p,{children:"You can also receive a clean number value you can use and send back in again:"}),"\n",(0,a.jsx)(i.lB,{}),"\n",(0,a.jsx)(e.h4,{children:"Decimals"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"number_mask"})," will default to no decimals"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"currency_mask"})," will default to no decimals"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"as_number"})," will default to no decimals"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"as_currency"})," will default to 2 decimals"]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["You can change the number of decimals by sending in options to the ",(0,a.jsx)(e.code,{children:"currency_mask"}),", ",(0,a.jsx)(e.code,{children:"number_mask"}),", or ",(0,a.jsx)(e.code,{children:"mask_options"})," (see example above)."]}),"\n",(0,a.jsxs)(e.p,{children:["This example here also shows how to affect every InputMasked component in your application, by setting these options on the ",(0,a.jsx)(e.a,{href:"/uilib/usage/customisation/provider",children:"Eufemia Provider"}),"."]}),"\n",(0,a.jsx)(i.HO,{}),"\n",(0,a.jsx)(i.C5,{}),"\n",(0,a.jsxs)(e.p,{children:["To remove a decimal limit, you can send in ",(0,a.jsx)(e.code,{children:"null"})," and allow decimals with ",(0,a.jsx)(e.code,{children:"allowDecimal"}),":"]}),"\n",(0,a.jsx)(i.EM,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(l,n)})):l(n)}},84384:function(n,e,s){s.d(e,{C5:function(){return f},EM:function(){return v},Ed:function(){return x},HO:function(){return k},Il:function(){return t},Mq:function(){return c},Q8:function(){return o},YT:function(){return u},lB:function(){return j},nI:function(){return h},ob:function(){return m},u4:function(){return b},wj:function(){return d}});var a=s(70894),r=(s(2784),s(82058)),i=s(60131),l=s(52322);const o=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{"data-visual-test":"input-masked-number",children:'<FormRow vertical>\n  <InputMasked\n    label="Number:"\n    as_number\n    mask_options={{\n      allowNegative: false,\n    }}\n    value="1234.50"\n    right\n    bottom\n    on_change={({ numberValue }) => {\n      console.log(numberValue)\n    }}\n  />\n  <InputMasked\n    label="Number (decimal limit):"\n    as_number\n    number_mask={{\n      decimalLimit: 2,\n    }}\n    value="1234.016"\n    right\n    bottom\n    on_change={({ numberValue }) => {\n      console.log(numberValue)\n    }}\n  />\n  <InputMasked\n    label="Percentage:"\n    as_percent\n    number_mask={{\n      decimalLimit: 1,\n    }}\n    value="1234.016"\n    right\n    bottom\n    on_change={({ numberValue }) => {\n      console.log(numberValue)\n    }}\n  />\n</FormRow>\n'})}),c=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{"data-visual-test":"input-masked-currency",scope:{Provider:i.Z},children:'<FormRow vertical>\n  <InputMasked\n    label="Currency:"\n    as_currency="EUR"\n    value="1234.50"\n    on_change={({ numberValue }) => {\n      console.log(numberValue)\n    }}\n    right\n    bottom\n  />\n  <Provider\n    locale="en-GB"\n    InputMasked={{\n      currency_mask: {\n        decimalLimit: 3,\n      },\n    }}\n  >\n    <InputMasked\n      label="Currency:"\n      as_currency="USD"\n      value="1234.567"\n      on_change={({ numberValue }) => {\n        console.log(numberValue)\n      }}\n      right\n      bottom\n    />\n  </Provider>\n</FormRow>\n'})}),t=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{"data-visual-test":"input-masked-currency_mask",children:'<FormRow vertical>\n  <InputMasked\n    label="Left aligned (default):"\n    show_mask\n    currency_mask="kr"\n    on_change={({ numberValue }) => {\n      console.log(numberValue)\n    }}\n    right\n    bottom\n  />\n  <InputMasked\n    label="Right aligned:"\n    show_mask\n    currency_mask={{\n      currency: \'NOK\',\n    }}\n    align="right"\n    on_change={({ numberValue }) => {\n      console.log(numberValue)\n    }}\n  />\n</FormRow>\n'})}),u=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{children:"<InputMasked\n  label=\"Masked amount:\"\n  show_mask\n  number_mask={{\n    suffix: ' kr',\n    allowDecimal: true,\n  }}\n  placeholder_char={null}\n  on_change={({ numberValue }) => {\n    console.log(numberValue)\n  }}\n/>\n"})}),d=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{"data-visual-test":"input-masked-number_mask",children:'<InputMasked\n  label="Masked input:"\n  value="1000000"\n  number_mask={{\n    suffix: \',-\',\n    allowDecimal: false,\n  }}\n  suffix="kr"\n  on_change={({ numberValue }) => {\n    console.log(parseInt(numberValue || 0, 10))\n  }}\n/>\n'})}),h=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{children:'<InputMasked\n  label="Masked input:"\n  number_mask={{\n    prefix: \'NOK \',\n  }}\n  stretch={true}\n  placeholder="Enter a number"\n  on_change={({ numberValue }) => {\n    console.log(numberValue)\n  }}\n/>\n'})}),m=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{"data-visual-test":"input-masked-phone",children:"<InputMasked\n  label=\"Masked input:\"\n  mask={[\n    '0',\n    '0',\n    /[4]/,\n    // have to start with 4\n    /[5-7]/,\n    // can be 5,6 or 7\n    ' ',\n    /[49]/,\n    // have to start with 4 or 9\n    /\\d/,\n    ' ',\n    /\\d/,\n    /\\d/,\n    ' ',\n    /\\d/,\n    /\\d/,\n    ' ',\n    /\\d/,\n    /\\d/,\n  ]}\n  show_mask\n  placeholder_char=\"_\"\n  keep_char_positions\n  on_change={({ numberValue }) => {\n    console.log(numberValue)\n  }}\n/>\n"})}),p=(0,a.Z)("div",{target:"e8zk24e0"})({name:"ed8mmh",styles:"display:block;width:100%;.dnb-masked-input{margin:1rem 0;}.dnb-form-label+.dnb-masked-input{margin-top:0;}"}),b=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{hidePreview:!0,hideToolbar:!0,children:"<InputMasked\n  mask_options={{\n    allowNegative: false,\n  }}\n/>\n"})}),x=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{hidePreview:!0,children:'<InputMasked as_currency="EUR" value="1234.50" />\n'})}),j=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{hidePreview:!0,children:'<InputMasked\n  as_currency="EUR"\n  value="1234.50"\n  on_change={({ numberValue }) => {\n    console.log(numberValue) // type of float\n  }}\n/>\n'})}),k=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{hidePreview:!0,scope:{Provider:i.Z},children:'<Provider\n  locale="en-GB"\n  InputMasked={{\n    currency_mask: {\n      decimalLimit: 1, // defaults to 2\n    },\n  }}\n>\n  <InputMasked as_currency="USD" value="1234.567" />\n</Provider>\n'})}),f=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{hidePreview:!0,scope:{Provider:i.Z},children:'<Provider\n  locale="en-GB"\n  InputMasked={{\n    number_mask: {\n      decimalLimit: 2, // defaults to no decimals\n    },\n  }}\n>\n  <InputMasked as_number value="1234.567" />\n</Provider>\n'})}),v=()=>(0,l.jsx)(p,{children:(0,l.jsx)(r.Z,{hidePreview:!0,children:'<InputMasked\n  as_number\n  mask_options={{\n    allowDecimal: true,\n    decimalLimit: null,\n  }}\n  value="1234.567"\n/>\n'})})}}]);
//# sourceMappingURL=17fe4e05ac0d988cc6fb1ce1189c53d37d35016d-f85f23c64ed6b46d76cb.js.map