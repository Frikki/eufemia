"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[15650],{55400:function(e,n,s){s.r(n),s.d(n,{default:function(){return c}});var a=s(52322),i=s(45392),t=s(6700),o=s.p+"static/naming-space-e014a499cde2217a620cc573c8f7500b.svg",r=s.p+"static/tables-space-1a635edba0c8f9e68edbfa8b7ced7034.svg";function l(e){const n=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",h2:"h2",a:"a",strong:"strong",h3:"h3"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Naming conventions (Designers)"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Persist the same component name throughout the design, code, and conversation ",(0,a.jsx)("cite",{children:"Nathan Curtis"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{children:"Naming space"}),"\n",(0,a.jsx)(n.p,{children:"Eufemia makes use of a very simple 8px unit grid. Margins, paddings, and distances consist of multiples of 8 (mostly - sometimes half and quarter units are required). If we were to combine multiples of this 8px 'space block', we could end up with something like this:"}),"\n",(0,a.jsx)(t.Z,{src:o,caption:"Naming space units",alt:"Naming space units"}),"\n",(0,a.jsx)(n.p,{children:"These titles can then be transferred to components, for example, tables. A 'medium' table would refer to the amount of padding in the cells."}),"\n",(0,a.jsx)(t.Z,{src:r,caption:"Applying space to tables",alt:"Applying space to tables"}),"\n",(0,a.jsx)(n.p,{children:"The same can apply to components such as cards, form rows, etc. Responsive breakpoints can switch between these spacing units to expand or contract the overall size of an object."}),"\n",(0,a.jsx)(n.h2,{children:"Naming Colors"}),"\n",(0,a.jsx)(n.p,{children:"Eufemia for the web uses a simple naming system:"}),"\n",(0,a.jsx)("div",{className:"typography-box",children:"Color name + percentage"}),"\n",(0,a.jsx)(n.p,{children:"Depending on where the color will be used, its name formation will be different. For example, in Figma (and other design tools), the name is constructed thus:"}),"\n",(0,a.jsx)(n.p,{children:"The color name is written with spaces between words. The first word starts with capital. Some color names have a percentage sign denoting the tint value."}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)("div",{className:"typography-box",children:"Fire red 8%"}),"\n",(0,a.jsx)(n.p,{children:"Whereas in CSS as a custom property this is written:"}),"\n",(0,a.jsx)("div",{className:"typography-box",children:"--color-fire-red-8"}),"\n",(0,a.jsxs)(n.p,{children:["Colors have a naming convention across all platforms and formats. Please refer to the table in ",(0,a.jsx)(n.a,{href:"/quickguide-designer/colors",children:"colors section"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"NB!"})," Android and iOS will have a different format for the same names. This guide is for application in ",(0,a.jsx)(n.strong,{children:"web"})," products."]}),"\n",(0,a.jsx)(n.h3,{children:"Naming conventions in design applications"}),"\n",(0,a.jsx)(n.p,{children:"We don't have a naming convention for design files in Figma. However, it is encouraged to name your design file frames and interface designs with clear logical names in English."}),"\n",(0,a.jsx)(n.p,{children:"However, to maintain consistency, in Figma we name Pages and Frames (canvases) with the first letter capitalized."}),"\n",(0,a.jsx)(n.p,{children:"Example of a Figma Page name:"}),"\n",(0,a.jsx)("div",{className:"typography-box",children:"04 Spacing & Common components"}),"\n",(0,a.jsx)(n.p,{children:"Example of a Figma Frame name:"}),"\n",(0,a.jsx)("div",{className:"typography-box",children:"02 Spacing components - horizontal"}),"\n",(0,a.jsx)(n.p,{children:"Actual components are written with all small letters."}),"\n",(0,a.jsx)(n.p,{children:"Example of a Figma component name:"}),"\n",(0,a.jsx)("div",{className:"typography-box",children:"date picker"}),"\n",(0,a.jsxs)(n.p,{children:["If in doubt, look at the main Eufemia file - ",(0,a.jsx)(n.a,{href:"https://www.figma.com/file/cdtwQD8IJ7pTeE45U148r1/Eufemia-Web?node-id=530%3A49",children:"Eufemia - Web"}),"."]})]})}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},95084:function(e,n,s){var a=s(66606);n.Z=a.Z},66606:function(e,n,s){var a=s(2784),i=s(19999),t=s(2045),o=s(72779),r=s.n(o),l=s(52322);n.Z=e=>{let{caption:n,alt:s,element:o="figure",skeleton:c,imgClass:h,className:d,...p}=e;const[m,g]=a.useState(!1);return(0,l.jsxs)(i.Z,{as:o,internalClass:"dnb-img",className:r()(d,(0,t.HU)(p,p.is)),skeleton:c,skeletonMethod:"shape",children:[(0,l.jsx)(i.Z,{as:"img",alt:s,internalClass:r()("dnb-img",m&&"dnb-img--error"),className:h,skeleton:c,onError:()=>g(!0),...(0,t.du)(p)}),n&&(0,l.jsx)("figcaption",{children:n})]})}},6700:function(e,n,s){var a=s(2784),i=s(72779),t=s.n(i),o=s(95084),r=s(52322);const l=e=>{let{className:n,alt:s,src:i,children:l,size:c,width:h,height:d,caption:p}=e;"auto"===c&&(h="100%",d="100%");const m={width:h,height:d};if(a.isValidElement(i)){const e=i;i=(0,r.jsx)(e,{alt:s||p,...m})}return(0,r.jsx)(o.Z,{className:t()("image-box",n),alt:s||p,caption:p,src:i||l,...m})};l.defaultProps={className:null,caption:null,alt:null,src:null,size:null,height:null,width:null,children:null},n.Z=l}}]);
//# sourceMappingURL=component---src-docs-quickguide-designer-naming-conventions-mdx-2328ed85428fecbca4ac.js.map