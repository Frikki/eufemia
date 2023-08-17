"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[4244,51648],{22722:function(e,n,s){s.r(n),s.d(n,{default:function(){return a}});var i=s(52322),t=s(45392),o=s(6700),r=s.p+"static/icon-nearest-neighbour-dbf3abeb4522fa36d2a2e47e9d330e81.svg",c=s(94320);function l(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Icon Details"}),"\n",(0,i.jsx)(n.p,{children:"At DNB we are currently using Streamline icons as our source for off-the-shelf vector icons."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.streamlineicons.com/",children:"Link to streamlineicons.com"})}),"\n",(0,i.jsx)(n.h2,{children:"Using Icons"}),"\n",(0,i.jsx)(n.p,{children:"The icons are in SVG format and are optimized for performance and to have the smallest footprint possible in the package build process."}),"\n",(0,i.jsxs)(n.p,{children:["The sources are located in the ",(0,i.jsx)(n.a,{href:"https://unpkg.com/@dnb/eufemia@latest/assets/icons/",children:"assets folder"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["They also exist as ",(0,i.jsx)(n.a,{href:"/uilib/components/icon",children:"React Components"})," to be easily integrated, without the need of an additional SVG file loader."]}),"\n",(0,i.jsx)(n.h2,{children:"Icon color"}),"\n",(0,i.jsxs)(n.p,{children:["Eufemia SVG icons do simply inherit the used color. In case you don't use the ",(0,i.jsx)(n.a,{href:"/uilib/components/icon",children:"Icon component"}),", you have to handle colors by yourself."]}),"\n",(0,i.jsx)(n.h3,{children:"Change SVG border color"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".selector svg {\n  color: var(--custom-color);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{children:"Example color usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"color: var(--custom-color);\n.selector svg {\n  color: inherit;\n  fill: currentColor;\n  stroke: currentColor;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Sizing"}),"\n",(0,i.jsxs)(n.p,{children:["Eufemia icons come in ",(0,i.jsx)(n.strong,{children:"two"})," sizes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default Size"})," 1.0rem with 1.5px stroke weight"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Medium Size"})," 1.5rem with 1.5px stroke weight"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The reason why there are two sizes, is mainly due to the SVG artifact, that the Icons, alongside the strokes, will scale up, once we use them with a larger width and height."}),"\n",(0,i.jsx)(n.h3,{children:"Scalability in web"}),"\n",(0,i.jsx)(n.p,{children:"To ensure that the relative size of the SVG icons is scalable by the inherited CSS font size, do not explicitly specify the SVG."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example size definition by CSS"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"font-size: 1.5rem;\nsvg {\n  width: 1em;\n  height: 1em;\n\n  font-size: inherit;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Spacing"}),"\n",(0,i.jsx)(n.p,{children:"Icons should have a minimum area of 8px between them and their nearest neighbor."}),"\n",(0,i.jsx)("div",{className:"image-box",children:(0,i.jsx)(o.Z,{src:r,caption:"Icons with nearest neighbour 8px (0.5rem) distance",alt:"Icon's nearest neighbour",height:"136"})}),"\n",(0,i.jsx)(n.h2,{children:"Custom Icons"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.streamlineicons.com/",children:"Streamline"})," caters to pretty much all of Eufemia's icon needs. However, sometimes there is a need for a custom icon. In these cases please contact one of Eufemia's ",(0,i.jsx)(n.a,{href:"/design-system/contact",children:"design leads"}),"."]}),"\n",(0,i.jsx)(c.default,{})]})}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},94320:function(e,n,s){s.r(n);var i=s(52322),t=s(45392),o=s(79583);function r(e){const n=Object.assign({h2:"h2",a:"a",strong:"strong",ul:"ul",li:"li",code:"code",pre:"pre",p:"p"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{children:["Use the ",(0,i.jsx)(n.a,{href:"/uilib/components/form-status",children:(0,i.jsx)(n.strong,{children:"FormStatus"})})," icons only"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"InfoIcon"}),"   ",(0,i.jsx)(o.sz,{})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WarnIcon"}),"   ",(0,i.jsx)(o.e6,{})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ErrorIcon"})," ",(0,i.jsx)(o.Pz,{})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MarketingIcon"})," ",(0,i.jsx)(o.gJ,{})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { InfoIcon } from '@dnb/eufemia/components/FormStatus\n\nrender(<InfoIcon />)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["... or in combination with the ",(0,i.jsx)(n.a,{href:"/uilib/components/form-status?fullscreen#form-status-icons",children:"Icon"})," component. Have a look ",(0,i.jsx)(n.a,{href:"/uilib/components/form-status#form-status-icons",children:"at this example"}),"."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(r,e)})):r(e)}},95084:function(e,n,s){var i=s(66606);n.Z=i.Z},66606:function(e,n,s){var i=s(2784),t=s(19999),o=s(2045),r=s(72779),c=s.n(r),l=s(52322);n.Z=e=>{let{caption:n,alt:s,element:r="figure",skeleton:a,imgClass:h,className:d,...u}=e;const[m,x]=i.useState(!1);return(0,l.jsxs)(t.Z,{as:r,internalClass:"dnb-img",className:c()(d,(0,o.HU)(u,u.is)),skeleton:a,skeletonMethod:"shape",children:[(0,l.jsx)(t.Z,{as:"img",alt:s,internalClass:c()("dnb-img",m&&"dnb-img--error"),className:h,skeleton:a,onError:()=>x(!0),...(0,o.du)(u)}),n&&(0,l.jsx)("figcaption",{children:n})]})}},6700:function(e,n,s){var i=s(2784),t=s(72779),o=s.n(t),r=s(95084),c=s(52322);const l=e=>{let{className:n,alt:s,src:t,children:l,size:a,width:h,height:d,caption:u}=e;"auto"===a&&(h="100%",d="100%");const m={width:h,height:d};if(i.isValidElement(t)){const e=t;t=(0,c.jsx)(e,{alt:s||u,...m})}return(0,c.jsx)(r.Z,{className:o()("image-box",n),alt:s||u,caption:u,src:t||l,...m})};l.defaultProps={className:null,caption:null,alt:null,src:null,size:null,height:null,width:null,children:null},n.Z=l}}]);
//# sourceMappingURL=component---src-docs-icons-details-mdx-a8745fa87107f31f3a11.js.map