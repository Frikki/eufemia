"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[58473],{12036:function(e,n,i){i.r(n);var s=i(52322),l=i(45392);function r(e){const n=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",em:"em",ol:"ol",code:"code",strong:"strong",pre:"pre",h3:"h3"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"v7"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#migration",children:"Migration"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#new-components",children:"New components"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#new-icons",children:"New icons"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#new-features",children:"New features"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#font-fixes",children:"Font fixes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#install",children:"How to Install"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"Migration"}),"\n",(0,s.jsxs)(n.p,{children:["v7 contains a couple of ",(0,s.jsx)(n.em,{children:"breaking changes"}),". As a migration process, you can simply search and replace:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"sea-green-alt-30"})," and replace it with ",(0,s.jsx)(n.code,{children:"sea-green-30"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"sea-green-alt"})," and replace it with ",(0,s.jsx)(n.code,{children:"sea-green"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"#B3DADA"})," and replace it with ",(0,s.jsx)(n.code,{children:"#B3D5D5"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"#008484"})," and replace it with ",(0,s.jsx)(n.code,{children:"#007272"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"['data-is-touch']"})," and replace it with ",(0,s.jsx)(n.code,{children:"[data-whatintent='touch']"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"isIE11"})," and replace it with ",(0,s.jsx)(n.code,{children:"IS_IE11"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"isEdge"})," and replace it with ",(0,s.jsx)(n.code,{children:"IS_EDGE"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"dnb-h1--small"})," and replace it with ",(0,s.jsx)(n.code,{children:"dnb-h--x-large"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"dnb-h1"})," and replace it with ",(0,s.jsx)(n.code,{children:"dnb-h--xx-large"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"dnb-h2"})," and replace it with ",(0,s.jsx)(n.code,{children:"dnb-h--large"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"dnb-h3"})," and replace it with ",(0,s.jsx)(n.code,{children:"dnb-h--medium"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"dnb-h4"})," and replace it with ",(0,s.jsx)(n.code,{children:"dnb-h--basis"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"dnb-h5"})," and replace it with ",(0,s.jsx)(n.code,{children:"dnb-h--small"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"dnb-h6"})," and replace it with ",(0,s.jsx)(n.code,{children:"dnb-h--x-small"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.code,{children:"prevent_selection"})," and replace it with ",(0,s.jsx)(n.code,{children:"more_menu"})," (you may have to define a different icon as well)"]}),"\n",(0,s.jsxs)(n.li,{children:["If you used ",(0,s.jsx)(n.code,{children:"style_type"}),", like ",(0,s.jsx)(n.code,{children:'<H1 style_type="small">'})," before, use rather ",(0,s.jsx)(n.code,{children:'<H1 size="x-large">'})," and the same applies to ",(0,s.jsx)(n.code,{children:'<P style_type="small">'}),", so use the ",(0,s.jsx)(n.code,{children:"modifier"})," prop here ",(0,s.jsx)(n.code,{children:'<P modifier="small">'})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"For UMD usage only"})," find ",(0,s.jsx)(n.code,{children:"dnb-ui-lib.min.js"})," replace it with ",(0,s.jsx)(n.code,{children:"dnb-ui-web-components.min.js"})]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/uilib/components/anchor",children:"Anchor (Text link)"})," has now also the default font-size of 18px (basis) - this means, you may have places where you would rather inherit the font-size by: ",(0,s.jsx)(n.code,{children:".dnb-anchor { font-size: inherit; }"})]}),"\n",(0,s.jsxs)(n.li,{children:["New strings where added to the ",(0,s.jsx)(n.a,{href:"/uilib/usage/customisation/localization",children:"language files"})," ",(0,s.jsx)(n.code,{children:"nb-NO.js"})," and ",(0,s.jsx)(n.code,{children:"en-US.js"}),". If you have a customized localization (",(0,s.jsx)(n.a,{href:"https://gist.github.com/tujoworker/f754da1137507fdd5d4bb61949a92259/revisions",children:"changes or addition"}),"), then make sure you maintain these new groups of strings:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Autocomplete"}),"\n",(0,s.jsx)(n.li,{children:"Pagination"}),"\n",(0,s.jsx)(n.li,{children:"ProgressIndicator"}),"\n",(0,s.jsx)(n.li,{children:"StepIndicator"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/uilib/components/dropdown",children:"Dropdown"})," uses now by default React Portal. This can have negative effects on scrollable views. Therefore, use the new ",(0,s.jsx)(n.a,{href:"/uilib/components/fragments/scroll-view",children:"ScrollView"})," fragment as the scrollable element."]}),"\n",(0,s.jsxs)(n.li,{children:["For a custom ",(0,s.jsx)(n.a,{href:"/uilib/components/dropdown",children:"Dropdown"})," list width ",(0,s.jsx)(n.code,{children:".dnb-dropdown__list"}),", use ",(0,s.jsx)(n.code,{children:".dnb-dropdown .dnb-drawer-list__root"})," instead."]}),"\n",(0,s.jsxs)(n.li,{children:["All events called ",(0,s.jsx)(n.code,{children:"on_state_update"})," are now deprecated and will be removed in a future major version."]}),"\n",(0,s.jsxs)(n.li,{children:["The property ",(0,s.jsx)(n.code,{children:"default_state"})," in ",(0,s.jsx)(n.a,{href:"/uilib/components/checkbox",children:"Checkbox"})," and ",(0,s.jsx)(n.a,{href:"/uilib/components/switch",children:"Switch"})," is now deprecated and will be removed in a future major version."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"Heading changes"}),"\n",(0,s.jsxs)(n.p,{children:["The new naming of h1, h2, etc. is to make it more clear that ",(0,s.jsx)(n.a,{href:"/uilib/usage/best-practices/for-typography#headings-and-styling",children:"semantic use of headings"})," don't have to do anything the actual styling. Developers still too often don't care about the correct ",(0,s.jsx)(n.a,{href:"/uilib/usage/best-practices/for-typography#think-semantics-first",children:"leveling of headings"}),", because of the visual prioritization."]}),"\n",(0,s.jsxs)(n.p,{children:["We hope with that change we embrace ",(0,s.jsx)(n.a,{href:"/uilib/usage/accessibility/checklist",children:"better accessibility"}),"."]}),"\n",(0,s.jsx)(n.h2,{children:"New components"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/uilib/components/heading",children:"Heading"})," component to automated semantic headings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/uilib/components/autocomplete",children:"Autocomplete"})," component."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/uilib/components/pagination",children:"Pagination"})," component including ",(0,s.jsx)(n.strong,{children:"infinity scroller"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["New element ",(0,s.jsx)(n.a,{href:"/uilib/elements/horizontal-rule",children:"Horizontal Rule (Hr)"}),", called ",(0,s.jsx)(n.code,{children:"hr-line"})," in Figma."]}),"\n",(0,s.jsxs)(n.li,{children:["New fragment ",(0,s.jsx)(n.a,{href:"/uilib/components/fragments/scroll-view",children:"ScrollView"}),", used in ",(0,s.jsx)(n.a,{href:"/uilib/components/modal",children:"Modal"})," to fulfill the new Portal mode in the DrawerList scroll dependency inside of a Modal / Drawer."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"New features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Icons inside of ",(0,s.jsx)(n.a,{href:"/uilib/components/input#input-icon",children:"Input"})," fields."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/uilib/components/number",children:"Number"})," got more useful properties, like ",(0,s.jsx)(n.code,{children:'decimals="0"'})," and ",(0,s.jsx)(n.code,{children:'currency_position="after"'})," and also a neat ",(0,s.jsx)(n.a,{href:"/uilib/components/number#accessibility",children:"copy & paste"})," feature, where a unformatted number gets copied, instead of the visual number. Also, Norwegian organization numbers (",(0,s.jsx)(n.code,{children:"org"}),") are now supported."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/uilib/components/button",children:"Buttons"})," now supports overflow text to wrap (break-word) by using ",(0,s.jsx)(n.code,{children:'wrap="true"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/uilib/components/modal#drawer-mode",children:"Modal"})," has now a ",(0,s.jsx)(n.strong,{children:"Drawer"})," mode inside the Modal component ",(0,s.jsx)(n.code,{children:'mode="drawer"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Also, the ",(0,s.jsx)(n.a,{href:"/uilib/components/modal#drawer-mode",children:"Modal"})," has now a dark background color and both open and close animation"]}),"\n",(0,s.jsxs)(n.li,{children:["Expose ",(0,s.jsx)(n.a,{href:"/uilib/helpers/functions#general-helpers",children:"new helper functions"})," like, ",(0,s.jsx)(n.code,{children:"isSafari"}),", ",(0,s.jsx)(n.code,{children:"isiOS"}),", ",(0,s.jsx)(n.code,{children:"isMac"}),", ",(0,s.jsx)(n.code,{children:"isWin"})," and ",(0,s.jsx)(n.code,{children:"isLinux"})," (beside ",(0,s.jsx)(n.code,{children:"isIE11"}),",",(0,s.jsx)(n.code,{children:"isEdge"}),") in the shared helpers file: ",(0,s.jsx)(n.code,{children:"import { isLinux } from 'dnb-ui-lib/shared/helpers'"}),". They are available as constants as well: ",(0,s.jsx)(n.code,{children:"IS_IE11"}),", ",(0,s.jsx)(n.code,{children:"IS_EDGE"}),", ",(0,s.jsx)(n.code,{children:"IS_IOS"}),", ",(0,s.jsx)(n.code,{children:"IS_MAC"}),", ",(0,s.jsx)(n.code,{children:"IS_WIN"})," and ",(0,s.jsx)(n.code,{children:"IS_LINUX"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<Dropdown\n  data={{\n    a: 'AA',\n    b: 'BB',\n  }}\n/>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/uilib/components/dropdown",children:"Dropdown"})," now also works fine inside of a ",(0,s.jsx)(n.a,{href:"/uilib/components/modal#drawer-mode",children:"Modal"}),", taking the height of the Modal as the viewport reference."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ESM"})," (mjs) ",(0,s.jsx)(n.a,{href:"/uilib/usage/first-steps/bundles",children:"bundles"})," to load directly in to modern browsers."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{children:"Table (new features)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Sticky ",(0,s.jsx)(n.a,{href:"/uilib/elements/tables#table-with-sticky-header",children:"Table"})," header."]}),"\n",(0,s.jsxs)(n.li,{children:["Sortable ",(0,s.jsx)(n.a,{href:"/uilib/elements/tables",children:"table"})," header buttons supports now word-wrap by using ",(0,s.jsx)(n.code,{children:'wrap="true"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/uilib/elements/tables",children:"Table"})," headers supports now ",(0,s.jsx)(n.code,{children:"small"})," font-size (",(0,s.jsx)(n.code,{children:".dnb-table--small"}),") as well as ",(0,s.jsx)(n.code,{children:"right"})," and ",(0,s.jsx)(n.code,{children:"center"})," aligned headers."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"New icons"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["New ",(0,s.jsx)(n.a,{href:"/icons/secondary",children:"secondary icons"}),": ",(0,s.jsx)(n.code,{children:"pay_from"}),", ",(0,s.jsx)(n.code,{children:"transfer_to"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"Font fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"DNB"})," Font got updates on the bold weight. The changes affect these characters: ",(0,s.jsx)(n.code,{children:"i?!"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"Install"}),"\n",(0,s.jsx)(n.p,{children:"To upgrade to v7 with NPM, use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npm i dnb-ui-lib@7\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"June, 4. 2020"})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(r,e)})):r(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-about-the-lib-releases-dnb-ui-lib-v-7-info-mdx-e1b22d6e5ddf9b998361.js.map