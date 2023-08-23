"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[46626],{31870:function(n,e,a){a.r(e),a.d(e,{default:function(){return Z}});var t={};a.r(t),a.d(t,{BaseFieldComponents:function(){return m},FeatureFields:function(){return h},LayoutComponents:function(){return f},UsingDataContextProvider:function(){return b},Validation:function(){return x},VisibilityBasedOnData:function(){return v},WithSteps:function(){return y}});var o=a(52322),i=a(45392),r=a(82058),l=a(72210),s=a(21759),u=a(27197),d=a(16240),c=a(75482),p=a(10223);const m=()=>(0,o.jsx)(r.Z,{scope:{DataContext:l.Z,Layout:s.Z,StepsLayout:u.Z,Field:d.Z,Value:c.Z,Visibility:p.Z},children:'\n<Field.String\n  label="Text field"\n  value="Lorem Ipsum"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  label="Number Field"\n  value={789}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Boolean\n  label="Boolean Field"\n  value={true}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n\n'}),h=()=>(0,o.jsx)(r.Z,{scope:{DataContext:l.Z,Layout:s.Z,StepsLayout:u.Z,Field:d.Z,Value:c.Z,Visibility:p.Z},children:'\n<Field.FirstName value="John" />\n<Field.LastName value="Smith" />\n<Field.NationalIdentityNumber value="20058512345" />\n<Field.Email value="john@smith.email" />\n<Field.PhoneNumber value="+47 98765432" />\n\n'}),f=()=>(0,o.jsx)(r.Z,{scope:{DataContext:l.Z,Layout:s.Z,StepsLayout:u.Z,Field:d.Z,Value:c.Z,Visibility:p.Z},children:'<Layout.Section>\n  <Layout.MainHeading>Profile</Layout.MainHeading>\n\n  <Layout.Card stack>\n    <Layout.SubHeading>Name</Layout.SubHeading>\n\n    <Field.FirstName value="John" />\n    <Field.LastName value="Smith" />\n  </Layout.Card>\n\n  <Layout.Card stack>\n    <Layout.SubHeading>More information</Layout.SubHeading>\n\n    <Field.NationalIdentityNumber value="20058512345" />\n    <Field.Email value="john@smith.email" />\n    <Field.PhoneNumber value="+47 98765432" />\n  </Layout.Card>\n</Layout.Section>\n'}),v=()=>(0,o.jsx)(r.Z,{scope:{DataContext:l.Z,Layout:s.Z,StepsLayout:u.Z,Field:d.Z,Value:c.Z,Visibility:p.Z},children:'<DataContext.Provider\n  data={{\n    firstName: undefined,\n    lastName: \'Smith\',\n    advanced: false,\n    ssn: \'123\',\n    email: \'@smith.email\',\n    phone: \'+47 98765432\',\n  }}\n  onChange={(data) => console.log(\'onChange\', data)}\n  onPathChange={(path, value) => console.log(\'onPathChange\', path, value)}\n  onSubmit={(data) => console.log(\'onSubmit\', data)}\n>\n  <Layout.Section>\n    <Layout.MainHeading>Profile</Layout.MainHeading>\n\n    <Layout.Card stack>\n      <Layout.SubHeading>Name</Layout.SubHeading>\n\n      <Field.FirstName path="/firstName" />\n      <Field.LastName path="/lastName" />\n    </Layout.Card>\n  </Layout.Section>\n  <Field.Boolean\n    path="/advanced"\n    variant="checkbox-button"\n    label="More fields"\n  />\n  <Visibility pathTrue="/advanced">\n    <Layout.Section>\n      <Layout.Card stack>\n        <Layout.SubHeading>More information</Layout.SubHeading>\n\n        <Field.NationalIdentityNumber value="20058512345" />\n        <Field.Email value="john@smith.email" />\n        <Field.PhoneNumber value="+47 98765432" />\n      </Layout.Card>\n    </Layout.Section>\n  </Visibility>\n</DataContext.Provider>\n'}),b=()=>(0,o.jsx)(r.Z,{scope:{DataContext:l.Z,Layout:s.Z,StepsLayout:u.Z,Field:d.Z,Value:c.Z,Visibility:p.Z},children:"<DataContext.Provider\n  data={{\n    firstName: 'John',\n    lastName: 'Smith',\n    ssn: '20058512345',\n    email: 'john@smith.email',\n    phone: '+47 98765432',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n  onSubmit={(data) => console.log('onSubmit', data)}\n>\n  <Layout.MainHeading>Profile</Layout.MainHeading>\n\n  <Layout.Card stack>\n    <Field.FirstName path=\"/firstName\" />\n    <Field.LastName path=\"/lastName\" />\n    <Field.NationalIdentityNumber path=\"/ssn\" />\n    <Field.Email path=\"/email\" />\n    <Field.PhoneNumber path=\"/phone\" />\n\n    <Layout.ButtonRow>\n      <DataContext.SubmitButton />\n    </Layout.ButtonRow>\n  </Layout.Card>\n</DataContext.Provider>\n"}),x=()=>(0,o.jsx)(r.Z,{scope:{DataContext:l.Z,Layout:s.Z,StepsLayout:u.Z,Field:d.Z,Value:c.Z,Visibility:p.Z},children:"<DataContext.Provider\n  data={{\n    firstName: undefined,\n    lastName: 'Smith',\n    ssn: '123',\n    email: '@smith.email',\n    phone: '+47 98765432',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n  onSubmit={(data) => console.log('onSubmit', data)}\n>\n  <Layout.MainHeading>Profile</Layout.MainHeading>\n\n  <Layout.Card stack>\n    <Field.FirstName path=\"/firstName\" required />\n    <Field.LastName path=\"/lastName\" required />\n    <Field.NationalIdentityNumber path=\"/ssn\" validateInitially />\n    <Field.Email path=\"/email\" validateInitially />\n    <Field.PhoneNumber path=\"/phone\" validateInitially />\n  </Layout.Card>\n</DataContext.Provider>\n"}),y=()=>(0,o.jsx)(r.Z,{scope:{DataContext:l.Z,Layout:s.Z,StepsLayout:u.Z,Field:d.Z,Value:c.Z,Visibility:p.Z},children:'<DataContext.Provider\n  data={{\n    firstName: undefined,\n    lastName: \'Smith\',\n    advanced: false,\n    ssn: \'123\',\n    email: \'@smith.email\',\n    phone: \'+47 98765432\',\n  }}\n  onChange={(data) => console.log(\'onChange\', data)}\n  onPathChange={(path, value) => console.log(\'onPathChange\', path, value)}\n  onSubmit={(data) => console.log(\'onSubmit\', data)}\n>\n  <StepsLayout>\n    <StepsLayout.Step title="Name">\n      <Layout.MainHeading>Profile</Layout.MainHeading>\n\n      <Layout.Card stack>\n        <Layout.SubHeading>Name</Layout.SubHeading>\n\n        <Field.FirstName path="/firstName" required />\n        <Field.LastName path="/lastName" required />\n      </Layout.Card>\n\n      <Layout.ButtonRow>\n        <StepsLayout.NextButton />\n      </Layout.ButtonRow>\n    </StepsLayout.Step>\n\n    <StepsLayout.Step title="More information">\n      <Layout.MainHeading>Profile</Layout.MainHeading>\n\n      <Layout.Card stack>\n        <Layout.SubHeading>More information</Layout.SubHeading>\n\n        <Field.NationalIdentityNumber path="/ssn" />\n        <Field.Email path="/email" />\n        <Field.PhoneNumber path="/phone" />\n      </Layout.Card>\n\n      <Layout.ButtonRow>\n        <StepsLayout.PreviousButton />\n        <StepsLayout.NextButton />\n      </Layout.ButtonRow>\n    </StepsLayout.Step>\n\n    <StepsLayout.Step title="Summary">\n      <Layout.MainHeading>Profile</Layout.MainHeading>\n\n      <Layout.Card stack>\n        <Layout.FlexContainer direction="row">\n          <Value.FirstName path="/firstName" />\n          <Value.LastName path="/lastName" />\n        </Layout.FlexContainer>\n\n        <Value.NationalIdentityNumber path="/ssn" />\n        <Value.Email path="/email" />\n        <Value.PhoneNumber path="/phone" />\n      </Layout.Card>\n\n      <Layout.ButtonRow>\n        <StepsLayout.PreviousButton />\n        <DataContext.SubmitButton />\n      </Layout.ButtonRow>\n    </StepsLayout.Step>\n  </StepsLayout>\n</DataContext.Provider>\n'});function g(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p"},(0,i.ah)(),n.components);return t||S("Examples",!1),m||S("Examples.BaseFieldComponents",!0),h||S("Examples.FeatureFields",!0),f||S("Examples.LayoutComponents",!0),b||S("Examples.UsingDataContextProvider",!0),x||S("Examples.Validation",!0),v||S("Examples.VisibilityBasedOnData",!0),y||S("Examples.WithSteps",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{children:"Demos"}),"\n",(0,o.jsx)(e.h3,{children:"Base field components"}),"\n",(0,o.jsx)(e.p,{children:"Base field components are targeting the data type they produce. They can\nreceive values and change handlers directly by props."}),"\n",(0,o.jsx)(m,{}),"\n",(0,o.jsx)(e.h3,{children:"Feature fields"}),"\n",(0,o.jsx)(e.p,{children:"Feature fields build on top of base field components and provide standard\nprops for simplified form implementations."}),"\n",(0,o.jsx)(h,{}),"\n",(0,o.jsx)(e.h3,{children:"Layout components"}),"\n",(0,o.jsx)(e.p,{children:"Wrapping inputs in layout components provide the standard design without\nthe need for local styles."}),"\n",(0,o.jsx)(f,{}),"\n",(0,o.jsx)(e.h3,{children:"Using DataContextProvider"}),"\n",(0,o.jsx)(e.p,{children:"Wrapping fields with a DataContextProvider component lets them read and\nwrite data to one common data set, and have input and output of data in\none place instead of connecting to every single field component."}),"\n",(0,o.jsx)(b,{}),"\n",(0,o.jsx)(e.h3,{children:"Visibility based on data"}),"\n",(0,o.jsx)(e.p,{children:"Some fields are displayed when data fill specific requirements."}),"\n",(0,o.jsx)(v,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation"}),"\n",(0,o.jsx)(e.p,{children:"Here are some examples of validation properties of field components."}),"\n",(0,o.jsx)(x,{}),"\n",(0,o.jsx)(e.h3,{children:"With steps"}),"\n",(0,o.jsx)(e.p,{children:"Some fields are displayed when data fill specific requirements."}),"\n",(0,o.jsx)(y,{})]})}var Z=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(g,n)})):g(n)};function S(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},32351:function(n,e,a){a.d(e,{ZP:function(){return $}});var t={};a.r(t),a.d(t,{Blockquote:function(){return u.Z},Code:function(){return d.Z},Dd:function(){return c.Z},Div:function(){return s.Z},Dl:function(){return p.Z},Dt:function(){return m.Z},H:function(){return h.Z},H1:function(){return f.Z},H2:function(){return v.Z},H3:function(){return b.Z},H4:function(){return x.Z},H5:function(){return y.Z},H6:function(){return g.Z},Hr:function(){return Z.Z},Img:function(){return S.Z},Ingress:function(){return N.Z},Lead:function(){return L.Z},Li:function(){return C.Z},Link:function(){return j.Z},Ol:function(){return P.Z},P:function(){return F.Z},Paragraph:function(){return E.Z},Span:function(){return _.Z},Td:function(){return w.Z},Th:function(){return H.Z},Tr:function(){return k.Z},Ul:function(){return B.Z}});var o=a(2784),i=a(72779),r=a.n(i),l=a(80215),s=a(34107),u=a(71704),d=a(30730),c=a(5988),p=a(80737),m=a(45268),h=a(60575),f=a(81989),v=a(63577),b=a(80247),x=a(46705),y=a(50739),g=a(65285),Z=a(85192),S=a(95084),N=a(20354),L=a(58984),C=a(65359),j=a(37983),P=a(76987),F=a(88268),E=a(7591),_=a(65731),w=a(6210),H=a(64223),k=a(41676),B=a(42351),D=a(63472),V=a(64492),M=a(36105),I=a(52322);function R(n){return n.type===V.Z||n.type===M.Z}const T=n=>{var e,a,t;if(o.isValidElement(n))return null!==(e=null===(a=n.props)||void 0===a?void 0:a.top)&&void 0!==e?e:"object"==typeof(null===(t=n.props)||void 0===t?void 0:t.space)?n.props.space.top:void 0},O=n=>{var e,a,t;if(o.isValidElement(n))return null!==(e=null===(a=n.props)||void 0===a?void 0:a.bottom)&&void 0!==e?e:"object"==typeof(null===(t=n.props)||void 0===t?void 0:t.space)?n.props.space.bottom:void 0},U=n=>{var e;return o.isValidElement(n)&&!0===(null==n||null===(e=n.type)||void 0===e?void 0:e._supportsEufemiaSpacingProps)||(n=>Object.values(t).some((e=>(null==n?void 0:n.type)===e)))(n)},W=(n,e)=>U(n)?o.cloneElement(n,e):(0,I.jsx)(s.Z,{...e,children:n});function q(n){const{className:e,children:a,direction:t="column",wrap:i=!1,justify:u="flex-start",align:d="stretch",divider:c="space",spacing:p="small"}=n,m=r()("dnb-forms-flex-container",t&&`dnb-forms-flex-container--direction-${t}`,u&&`dnb-forms-flex-container--justify-${u}`,d&&`dnb-forms-flex-container--align-${d}`,i&&"dnb-forms-flex-container--wrap",c&&`dnb-forms-flex-container--divider-${c}`,p&&`dnb-forms-flex-container--spacing-${p}`,e),h=o.Children.toArray(a);return(0,I.jsx)(s.Z,{className:m,...(0,D.p)(n),children:"column"===t?h.map(((n,e)=>{var a,t;const i=0===e,r=null==h?void 0:h[e-1],s=R(n),u=e>0&&R(r);if("line"===c&&!i&&!u&&!s){var d,m;const a=null!==(d=O(r))&&void 0!==d?d:p,t=null!==(m=T(n))&&void 0!==m?m:p;return(0,I.jsxs)(o.Fragment,{children:[(0,I.jsx)(l.Z,{top:a}),(0,I.jsx)("hr",{className:"dnb-forms-flex-container__hr"}),W(n,{space:{top:t,bottom:0},top:t,bottom:0})]},`element-${e}`)}const f=i?0:null!==(a=null!==(t=T(n))&&void 0!==t?t:O(r))&&void 0!==a?a:p;return W(n,{key:`element-${e}`,space:{top:f,bottom:0},top:f,bottom:0})})):a})}q._supportsEufemiaSpacingProps=!0;var $=q},64492:function(n,e,a){var t=a(72779),o=a.n(t),i=a(86),r=a(63472),l=a(52322);function s(n){const{className:e,children:a}=n;return(0,l.jsx)(i.ZP,{className:o()("dnb-forms-main-heading",e),level:"2",size:"large",...(0,r.p)(n),children:a})}s._supportsEufemiaSpacingProps=!0,e.Z=s},36105:function(n,e,a){var t=a(72779),o=a.n(t),i=a(86),r=a(63472),l=a(52322);function s(n){const{className:e,children:a}=n;return(0,l.jsx)(i.ZP,{className:o()("dnb-forms-sub-heading",e),level:"3",size:"medium",...(0,r.p)(n),children:a})}s._supportsEufemiaSpacingProps=!0,e.Z=s},21759:function(n,e,a){a.d(e,{Z:function(){return C}});var t=a(66151),o=a(72779),i=a.n(o),r=a(63472),l=a(32351),s=a(34107),u=a(52322);function d(n){const{className:e,grow:a,shrink:t,children:o}=n,l=i()("dnb-forms-flex-item",a&&"dnb-forms-flex-item--grow",t&&"dnb-forms-flex-item--shrink",e);return(0,u.jsx)(s.Z,{className:l,...(0,r.p)(n),children:o})}d._supportsEufemiaSpacingProps=!0;var c=d;function p(n){const{className:e,stack:a,direction:t,spacing:o,children:s}=n;return a?(0,u.jsx)(l.ZP,{className:i()("dnb-forms-card",e),direction:"column",divider:"line",spacing:null!=o?o:"medium",...(0,r.p)(n),children:s}):t||o?(0,u.jsx)(l.ZP,{className:i()("dnb-forms-card",e),direction:null!=t?t:"column",divider:"space",spacing:null!=o?o:"small",...(0,r.p)(n),children:s}):(0,u.jsx)(c,{className:i()("dnb-forms-card",e),children:s})}p._supportsEufemiaSpacingProps=!0;var m=p;function h(n){const{className:e,direction:a,spacing:t,children:o}=n;return(0,u.jsx)(l.ZP,{className:i()("dnb-forms-section",e),direction:null!=a?a:"column",spacing:null!=t?t:"small",...(0,r.p)(n),children:o})}h._supportsEufemiaSpacingProps=!0;var f=h,v=a(64492),b=a(36105);function x(n){let{children:e,...a}=n;return(0,u.jsx)(l.ZP,{direction:"row",...a,children:e})}x._supportsEufemiaSpacingProps=!0;var y=x;function g(n){let{children:e,...a}=n;return(0,u.jsx)(l.ZP,{direction:"column",...a,children:e})}g._supportsEufemiaSpacingProps=!0;var Z=g,S=a(66654);function N(n){const{className:e}=n;return(0,u.jsx)(f,{className:i()("dnb-forms-info-card-section",e),...(0,r.p)(n),children:(0,u.jsx)(S.Z,{...(0,r.N)(n)})})}N._supportsEufemiaSpacingProps=!0;var L=N;var C={ButtonRow:t.Z,Card:m,FlexContainer:l.ZP,FlexItem:c,Section:f,MainHeading:v.Z,SubHeading:b.Z,Row:y,Column:Z,InfoCardSection:L}},59626:function(n,e,a){const t=a(2784).createContext(void 0);e.Z=t},27197:function(n,e,a){a.d(e,{Z:function(){return j}});var t=a(2784),o=a(72779),i=a.n(o),r=a(34107),l=a(5824),s=a(66485),u=a(63472),d=a(21068),c=a(32351),p=a(59626),m=a(52322);function h(n){const{className:e,index:a,direction:o="column",spacing:r="medium",children:l}=n,s=(0,t.useContext)(p.Z);return(null==s?void 0:s.activeIndex)!==a?null:(0,m.jsx)(c.ZP,{className:i()("dnb-forms-step",e),direction:o,spacing:r,...(0,u.p)(n),children:l})}h._supportsEufemiaSpacingProps=!0;var f=h,v=a(96844),b=a(32831);function x(n){const e=(0,t.useContext)(b.Z),{className:a,variant:o="primary",icon_position:r="right",icon:l="chevron_right",children:s=(null==e?void 0:e.translation.Forms.stepNext)}=n,u=(0,t.useContext)(p.Z);return(0,m.jsx)(v.Z,{...n,className:i()("dnb-forms-next-button",a),onClick:null==u?void 0:u.handleNext,variant:o,icon_position:r,icon:l,children:s})}x._supportsEufemiaSpacingProps=!0;var y=x;function g(n){const e=(0,t.useContext)(b.Z),{className:a,variant:o="tertiary",icon_position:r="left",icon:l="chevron_left",children:s=(null==e?void 0:e.translation.Forms.stepPrevious)}=n,u=(0,t.useContext)(p.Z);return(0,m.jsx)(v.Z,{...n,className:i()("dnb-forms-previous-button",a),onClick:null==u?void 0:u.handlePrevious,variant:o,icon_position:r,icon:l,children:s})}g._supportsEufemiaSpacingProps=!0;var Z=g,S=a(66151);function N(n){const{className:e}=n;return(0,m.jsxs)(S.Z,{className:i()("dnb-forms-buttons",e),...(0,u.p)(n),children:[(0,m.jsx)(Z,{}),(0,m.jsx)(y,{})]})}N._supportsEufemiaSpacingProps=!0;var L=N;function C(n){const{className:e,id:a=(0,s.Xo)(),mode:o="loose",scrollTopOnStepChange:c,initialActiveIndex:h=0,onStepChange:v,children:b}=n,x=(0,t.useContext)(d.Z),{0:y,1:g}=(0,t.useState)(h),Z=(0,t.useCallback)((()=>{var n;(g((n=>(null==v||v(n-1),n-1))),c)&&(null===(n=window)||void 0===n||n.scrollTo({top:0,behavior:"smooth"}))}),[c,v]),S=(0,t.useCallback)((()=>{var n;x.hasErrors()?x.setShowAllErrors(!0):(g((n=>(null==v||v(n+1),n+1))),c&&(null===(n=window)||void 0===n||n.scrollTo({top:0,behavior:"smooth"})))}),[x,c,v]),N=t.Children.map(b,(n=>{var e;if(!t.isValidElement(n)||n.type!==f)throw new Error("Only Step can be children of Steps");return null!==(e=n.props.title)&&void 0!==e?e:"Title missing"})),L=(0,t.useCallback)((n=>{let{current_step:e}=n;g(e)}),[]);return(0,m.jsx)(p.Z.Provider,{value:{activeIndex:y,handlePrevious:Z,handleNext:S},children:(0,m.jsxs)(r.Z,{className:i()("dnb-forms-steps-layout",e),...(0,u.p)(n),children:[(0,m.jsxs)("aside",{className:"dnb-forms-steps-layout__sidebar",children:[(0,m.jsx)(l.Z.Sidebar,{sidebar_id:a}),(0,m.jsx)(l.Z,{bottom:!0,current_step:y,data:N,mode:o,no_animation:!0,on_change:L,sidebar_id:a,title:""})]}),(0,m.jsx)("div",{className:"dnb-forms-steps-layout__contents",children:t.Children.map(b,((n,e)=>t.isValidElement(n)&&n.type===f?t.cloneElement(n,{index:e}):n))})]})})}C._supportsEufemiaSpacingProps=!0,C.Step=f,C.NextButton=y,C.PreviousButton=Z,C.Buttons=L;var j=C},75482:function(n,e,a){a.d(e,{Z:function(){return D}});var t=a(49406),o=a(63472),i=a(2784),r=a(95955),l=a.n(r),s=a(72210);function u(n){const{path:e}=n,a=(0,i.useContext)(s.Z.Context);if(e&&"/"!==e.substring(0,1))throw new Error("Invalid path. Input path JSON Pointers  must be from root (starting with a /).");const t=(0,i.useMemo)((()=>{var t;return null!==(t=n.value)&&void 0!==t?t:a.data&&void 0!==e&&l().has(a.data,e)?l().get(a.data,e):void 0}),[e,n.value,a.data]);return{...n,value:t}}var d=a(52322);function c(n){const{className:e,label:a,placeholder:i,value:r,inline:l,showEmpty:s,prepare:c=(n=>n)}=u(n);return(0,d.jsx)(t.Z,{className:e,label:a,showEmpty:s,placeholder:i,inline:l,...(0,o.p)(n),children:c(r)})}c._supportsEufemiaSpacingProps=!0;var p=c;function m(n,e){const{thousandSeparator:a,decimalLimit:t,fixedDecimals:o,decimalSymbol:i=",",magnitude:r,prefix:l,suffix:s}=null!=e?e:{},u=void 0!==r?n/Math.pow(10,r):n,d=void 0!==o?u.toFixed(o):t?(Math.round(u*Math.pow(10,t))/Math.pow(10,t)).toString():u.toString(),c=void 0!==i?d.replace(".",i):d,p=void 0!==a?c.replace(/\B(?=(\d{3})+(?!\d))/g,a):c,m=void 0!==l?l+p:p;return void 0!==s?m+s:m}function h(n){const{className:e,label:a,placeholder:i,value:r,inline:l,showEmpty:s,thousandSeparator:c,decimalSymbol:p,decimalLimit:h,prefix:f,suffix:v}=u(n);return(0,d.jsx)(t.Z,{className:e,label:a,showEmpty:s,placeholder:i,inline:l,...(0,o.p)(n),children:void 0!==r?m(r,{thousandSeparator:!0===c?" ":c,decimalSymbol:p,decimalLimit:h,prefix:f,suffix:v}):null})}h._supportsEufemiaSpacingProps=!0;var f=h,v=a(32831);function b(n){const e=(0,i.useContext)(v.Z),{className:a,label:r,placeholder:l,showEmpty:s,value:c,inline:p}=u(n);return(0,d.jsx)(t.Z,{className:a,label:r,showEmpty:s,placeholder:l,inline:p,...(0,o.p)(n),children:!0===c||!1===c?!0===c?null==e?void 0:e.translation.Forms.booleanYes:null==e?void 0:e.translation.Forms.booleanNo:null})}b._supportsEufemiaSpacingProps=!0;var x=b;function y(n){var e,a;const t={...n,label:n.label,thousandSeparator:null!==(e=n.thousandSeparator)&&void 0!==e?e:" ",suffix:null!==(a=n.suffix)&&void 0!==a?a:" kr"};return(0,d.jsx)(f,{...t})}y._supportsEufemiaSpacingProps=!0;var g=y;function Z(n){var e;const a=(0,i.useContext)(v.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:null==a?void 0:a.translation.Forms.dateLabel};return(0,d.jsx)(p,{...t})}Z._supportsEufemiaSpacingProps=!0;var S=Z;function N(n){var e;const a=(0,i.useContext)(v.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:null==a?void 0:a.translation.Forms.emailLabel};return(0,d.jsx)(p,{...t})}N._supportsEufemiaSpacingProps=!0;var L=N;function C(n){var e;const a=(0,i.useContext)(v.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:null==a?void 0:a.translation.Forms.firstNameLabel};return(0,d.jsx)(p,{...t})}C._supportsEufemiaSpacingProps=!0;var j=C;function P(n){var e;const a=(0,i.useContext)(v.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:null==a?void 0:a.translation.Forms.lastNameLabel};return(0,d.jsx)(p,{...t})}P._supportsEufemiaSpacingProps=!0;var F=P,E=a(41672);function _(n){var e;const a=(0,i.useContext)(v.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:n.inline||null==a?void 0:a.translation.Forms.nationalIdentityNumberLabel,prepare:n=>(0,E.WU)((0,E.bR)(n),{nin:!0}).toString()};return(0,d.jsx)(p,{...t})}_._supportsEufemiaSpacingProps=!0;var w=_;function H(n){var e;const a=(0,i.useContext)(v.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:n.inline||null==a?void 0:a.translation.Forms.phoneNumberLabel,prepare:n=>(0,E.WU)((0,E.bR)(n),{phone:!0}).toString()};return(0,d.jsx)(p,{...t})}H._supportsEufemiaSpacingProps=!0;var k=H;function B(n){var e;const a=(0,i.useContext)(v.Z),t={...n,label:null!==(e=n.label)&&void 0!==e?e:n.inline||null==a?void 0:a.translation.Forms.bankAccountNumberLabel,prepare:n=>(0,E.WU)((0,E.bR)(n),{ban:!0}).toString()};return(0,d.jsx)(p,{...t})}B._supportsEufemiaSpacingProps=!0;var D={String:p,Number:f,Boolean:x,Currency:g,Date:S,Email:L,FirstName:j,LastName:F,NationalIdentityNumber:w,PhoneNumber:k,BankAccountNumber:B}},49406:function(n,e,a){var t=a(65731),o=a(94799),i=a(63472),r=a(72779),l=a.n(r),s=a(52322);function u(n){const{className:e,label:a,inline:r,placeholder:u,showEmpty:d,children:c}=n;return null!=c&&!1!==c||d||u?(0,s.jsxs)(t.Z,{className:l()("dnb-forms-value",r&&"dnb-forms-value-block--inline",e),...(0,i.p)(n),children:[a&&(0,s.jsx)(o.Z,{className:"dnb-forms-value-block__label",label_direction:r?"horizontal":"vertical",children:a}),null!=c?c:(0,s.jsx)("span",{className:"dnb-forms-value-block__placeholder",children:u})]}):null}u._supportsEufemiaSpacingProps=!0,e.Z=u},10223:function(n,e,a){var t=a(2784),o=a(95955),i=a.n(o),r=a(72210),l=a(52322);function s(n){let{visible:e,pathDefined:a,pathUndefined:o,pathTruthy:s,pathFalsy:u,pathTrue:d,pathFalse:c,inferData:p,children:m}=n;const h=(0,t.useContext)(r.Z.Context);return!1===e||a&&!i().has(h.data,a)||o&&i().has(h.data,o)?null:!s||i().has(h.data,s)&&i().get(h.data,s)?u&&i().has(h.data,u)&&Boolean(i().get(h.data,u))?null:(!d||i().has(h.data,d)&&!0===i().get(h.data,d))&&(!c||i().has(h.data,c)&&!1===i().get(h.data,c))?p&&!p(h.data)?null:(0,l.jsx)(l.Fragment,{children:m}):null:null}s._supportsEufemiaSpacingProps=!0,e.Z=s}}]);
//# sourceMappingURL=d2fe9759ecc663cc452d31b9fc61d90b9eb63dd3-728b7d1a34751eecca2c.js.map