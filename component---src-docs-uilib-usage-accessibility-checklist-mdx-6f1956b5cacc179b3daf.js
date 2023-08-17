"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[47223],{50192:function(e,s,i){i.r(s);var a=i(52322),n=i(45392);function l(e){const s=Object.assign({h1:"h1",ul:"ul",li:"li",input:"input",strong:"strong",a:"a",code:"code",h2:"h2",p:"p",pre:"pre"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{children:"Accessibility Checklist"}),"\n",(0,a.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Follow ",(0,a.jsx)(s.strong,{children:"semantics"})," properly, use ",(0,a.jsx)(s.strong,{children:"landmarks"})," (",(0,a.jsx)(s.a,{href:"/uilib/usage/accessibility/checklist#landmark--and-semantics-example",children:"landmark and semantic example"}),")."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Ensure correct ",(0,a.jsx)(s.a,{href:"/uilib/usage/best-practices/for-typography#headings-and-styling",children:"heading levels"}),"."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Use different ",(0,a.jsx)(s.strong,{children:"screen readers"})," and test ",(0,a.jsx)(s.a,{href:"/uilib/usage/accessibility/screenreader",children:"regularly"}),"."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Make sure, ",(0,a.jsx)(s.a,{href:"/uilib/usage/layout#web-applications",children:"everything is responsive"})," - use mostly the ",(0,a.jsx)(s.code,{children:"rem"})," ",(0,a.jsx)(s.a,{href:"/uilib/usage/best-practices/for-styling#units",children:"unit"}),"."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Make everything accessible for ",(0,a.jsx)(s.a,{href:"/uilib/usage/accessibility#keyboard-users",children:"keyboard navigation only"})," and handle ",(0,a.jsx)(s.a,{href:"/uilib/usage/accessibility/focus#managing-the-focus-state",children:"focus management"})," properly."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Group form elements inside ",(0,a.jsx)(s.code,{children:"<fieldset />"})," and ",(0,a.jsx)(s.code,{children:"<legend />"}),". The ",(0,a.jsx)(s.a,{href:"/uilib/components/form-row",children:"FormRow"})," is doing this by default."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Do never expose a form element as ",(0,a.jsx)(s.code,{children:"disabled"})," to the user. Use good UX instead."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Have a ",(0,a.jsx)(s.a,{href:"/uilib/usage/accessibility/focus#skip-link",children:"Skip Link"})," in place if the user has to tab many times to reach the main content."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Use the ",(0,a.jsx)(s.a,{href:"/uilib/components/skip-content/",children:"SkipContent"})," helper to let the user skip large parts of content, while using keyboard navigation."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Make good use of ",(0,a.jsx)(s.a,{href:"/uilib/usage/accessibility/screenreader#usage-of-aria-label-aria-labelledby-and-aria-describedby",children:(0,a.jsx)(s.code,{children:"aria-label"})})," and ",(0,a.jsx)(s.code,{children:"aria-hidden"}),", e.g. of ",(0,a.jsx)(s.a,{href:"/uilib/usage/accessibility/icons#decorative-icons",children:"decorative content"}),"."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Make ",(0,a.jsx)(s.a,{href:"/uilib/usage/accessibility/screenreader#images-and-illustrations",children:"images and illustrations"})," accessible."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Have ",(0,a.jsx)(s.code,{children:"aria-live"})," in place for dynamic content, like updates coming from the server."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Hide ",(0,a.jsx)(s.strong,{children:"invisible content"})," with ",(0,a.jsx)(s.code,{children:"display: none;"})," or with the ",(0,a.jsx)(s.code,{children:"hidden"})," attribute, or remove the markup entirely (with React States)."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Properly use the ",(0,a.jsx)(s.code,{children:'for="#id"'})," attribute on ",(0,a.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#Attributes",children:"labels"}),". Every ",(0,a.jsx)(s.a,{href:"/uilib/components",children:"form component"})," is supporting internal label usage, like ",(0,a.jsx)(s.code,{children:'<Input label="Input label:" />'}),"."]}),"\n",(0,a.jsxs)(s.li,{className:"task-list-item",children:[(0,a.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Allow viewport zooming in web pages. Example below."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{children:"Viewport"}),"\n",(0,a.jsx)(s.p,{children:"Allow zooming in web pages, especially important on touch devices."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-html",children:'<meta\n  name="viewport"\n  content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=yes"\n/>\n'})}),"\n",(0,a.jsx)(s.h2,{children:"Landmark- and semantics example"}),"\n",(0,a.jsxs)(s.p,{children:["Example usage of HTML5 ",(0,a.jsx)(s.code,{children:"landmarks"})," (e.g. ",(0,a.jsx)(s.code,{children:"<nav>"})," or ",(0,a.jsx)(s.code,{children:"<section>"})," etc.):"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-html",children:'<body>\n  <header>Header</header>\n  <nav>Main navigation landmark</nav>\n\n  <main>\n\n    <section aria-label="I need a label to be a region landmark">\n      <h1 class="dnb-h--large">h1 styled as h2</h1>\n      <p class="dnb-o">text</p>\n    </section>\n\n    <article aria-labelledby="article-1">\n      <h2 id="article-1" class="dnb-h--xx-large">h2 styled as h1</h2>\n      <h3 class="dnb-h--medium">h3</h2>\n      <h4 class="dnb-h--basis">h4</h2>\n      ...\n    </article>\n\n    <article aria-labelledby="article-2">\n      <header>I\'m not a landmark anymore, because I\'m inside article</header>\n      <h2 id="article-2" class="dnb-h--large">Another article h2</h2>\n      ...\n      <footer>I\'m not a landmark anymore, because I\'m inside article</footer>\n    </article>\n\n  </main>\n\n  <aside>Aside the main landmark</aside>\n\n  <footer>Footer landmark</footer>\n</body>\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Read more about ",(0,a.jsx)(s.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html",children:"HTML landmarks and sectioning elements"}),"."]}),"\n",(0,a.jsx)(s.h2,{children:"Practical Support of ARIA labels"}),"\n",(0,a.jsxs)(s.p,{children:["You may be interested to read more about aria labels in the ",(0,a.jsx)(s.a,{href:"/uilib/usage/accessibility/screenreader#usage-of-aria-label-aria-labelledby-and-aria-describedby",children:"Screen readers section"}),"."]})]})}s.default=function(e){void 0===e&&(e={});const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-usage-accessibility-checklist-mdx-6f1956b5cacc179b3daf.js.map