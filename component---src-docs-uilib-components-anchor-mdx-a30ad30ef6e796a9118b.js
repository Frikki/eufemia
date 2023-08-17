"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[82605,14419],{15198:function(e,n,s){s.r(n);var a=s(52322),c=s(45392),t=s(65677),i=s(21786);function r(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.default,{}),"\n",(0,a.jsx)(i.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(r,e)})):r()}},65677:function(e,n,s){s.r(n);var a=s(52322),c=s(45392);function t(e){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",strong:"strong",a:"a"},(0,c.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The Anchor, also knows as ",(0,a.jsx)(n.code,{children:"Link"})," is used to navigate from one page to the next HTML page."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import { Link, Anchor } from '@dnb/eufemia'\nrender(<Anchor href=\"/uilib/components/anchor\">Accessible text</Anchor>)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"NB:"})," If you only use a vanilla HTML anchor element including ",(0,a.jsx)(n.code,{children:'target="_blank"'})," then you have to ensure you add a ",(0,a.jsx)(n.code,{children:"title"})," attribute that includes ",(0,a.jsx)(n.code,{children:"Opens a new Window"})," or as a part of the text:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<a\n  title="Opens a new Window"\n  target="_blank"\n  href="https://"\n  class="dnb-anchor"\n>\n  text (opens in new window)\n</a>\n'})}),"\n",(0,a.jsx)(n.h2,{children:"Customize blank target graphic"}),"\n",(0,a.jsxs)(n.p,{children:["You may use a ",(0,a.jsx)(n.a,{href:"https://yoksel.github.io/url-encoder/",children:"tool like this url-encoder"})," to ",(0,a.jsx)(n.strong,{children:"url-encode"})," your SVG."]}),"\n",(0,a.jsxs)(n.p,{children:["If you only want to change the colors, you can swap out ",(0,a.jsx)(n.code,{children:"fill='%23007272'"})," with your custom color HEX code. Keep in mind that ",(0,a.jsx)(n.code,{children:"%23"})," stands for ",(0,a.jsx)(n.code,{children:"#"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-css",children:".dnb-anchor::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 0a.75.75 0 000 1.5V0zm4 .75h.75A.75.75 0 0015 0v.75zm-.75 4a.75.75 0 001.5 0h-1.5zm1.5 4a.75.75 0 00-1.5 0h1.5zm-.75 6.5V16c.41 0 .75-.34.75-.75H15zm-14 0H.25c0 .41.34.75.75.75v-.75zM1 .75V0a.75.75 0 00-.75.75H1zm5.75.75a.75.75 0 000-1.5v1.5zm2.72 3.72a.75.75 0 001.06 1.06L9.47 5.22zM14.25.75v4h1.5v-4h-1.5zm0 8v6.5h1.5v-6.5h-1.5zM15 14.5H1V16h14v-1.5zm-13.25.75V.75H.25v14.5h1.5zM1 1.5h5.75V0H1v1.5zm10 0h4V0h-4v1.5zm-.47 4.78l5-5L14.47.22l-5 5 1.06 1.06z' fill='%23007272' /%3E%3C/svg%3E\");\n}\n.dnb-anchor:active::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 0a.75.75 0 000 1.5V0zm4 .75h.75A.75.75 0 0015 0v.75zm-.75 4a.75.75 0 001.5 0h-1.5zm1.5 4a.75.75 0 00-1.5 0h1.5zm-.75 6.5V16c.41 0 .75-.34.75-.75H15zm-14 0H.25c0 .41.34.75.75.75v-.75zM1 .75V0a.75.75 0 00-.75.75H1zm5.75.75a.75.75 0 000-1.5v1.5zm2.72 3.72a.75.75 0 001.06 1.06L9.47 5.22zM14.25.75v4h1.5v-4h-1.5zm0 8v6.5h1.5v-6.5h-1.5zM15 14.5H1V16h14v-1.5zm-13.25.75V.75H.25v14.5h1.5zM1 1.5h5.75V0H1v1.5zm10 0h4V0h-4v1.5zm-.47 4.78l5-5L14.47.22l-5 5 1.06 1.06z' fill='%23a5e1d2' /%3E%3C/svg%3E\");\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To ensure compatibility for older Edge versions, you may still use ",(0,a.jsx)(n.strong,{children:"base64"}),". Use e.g. ",(0,a.jsx)(n.a,{href:"https://www.base64encode.org",children:"this base64 converter"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-css",children:".dnb-anchor::after {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgMGEuNzUuNzUgMCAwMDAgMS41VjB6bTQgLjc1aC43NUEuNzUuNzUgMCAwMDE1IDB2Ljc1em0tLjc1IDRhLjc1Ljc1IDAgMDAxLjUgMGgtMS41em0xLjUgNGEuNzUuNzUgMCAwMC0xLjUgMGgxLjV6bS0uNzUgNi41VjE2Yy40MSAwIC43NS0uMzQuNzUtLjc1SDE1em0tMTQgMEguMjVjMCAuNDEuMzQuNzUuNzUuNzV2LS43NXpNMSAuNzVWMGEuNzUuNzUgMCAwMC0uNzUuNzVIMXptNS43NS43NWEuNzUuNzUgMCAwMDAtMS41djEuNXptMi43MiAzLjcyYS43NS43NSAwIDAwMS4wNiAxLjA2TDkuNDcgNS4yMnpNMTQuMjUuNzV2NGgxLjV2LTRoLTEuNXptMCA4djYuNWgxLjV2LTYuNWgtMS41ek0xNSAxNC41SDFWMTZoMTR2LTEuNXptLTEzLjI1Ljc1Vi43NUguMjV2MTQuNWgxLjV6TTEgMS41aDUuNzVWMEgxdjEuNXptMTAgMGg0VjBoLTR2MS41em0tLjQ3IDQuNzhsNS01TDE0LjQ3LjIybC01IDUgMS4wNiAxLjA2eiIgZmlsbD0iIzAwNzI3MiIgLz48L3N2Zz4=);\n}\n.dnb-anchor:active::after {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aAogICAgZD0iTTExIDBhLjc1Ljc1IDAgMDAwIDEuNVYwem00IC43NWguNzVBLjc1Ljc1IDAgMDAxNSAwdi43NXptLS43NSA0YS43NS43NSAwIDAwMS41IDBoLTEuNXptMS41IDRhLjc1Ljc1IDAgMDAtMS41IDBoMS41em0tLjc1IDYuNVYxNmMuNDEgMCAuNzUtLjM0Ljc1LS43NUgxNXptLTE0IDBILjI1YzAgLjQxLjM0Ljc1Ljc1Ljc1di0uNzV6TTEgLjc1VjBhLjc1Ljc1IDAgMDAtLjc1Ljc1SDF6bTUuNzUuNzVhLjc1Ljc1IDAgMDAwLTEuNXYxLjV6bTIuNzIgMy43MmEuNzUuNzUgMCAwMDEuMDYgMS4wNkw5LjQ3IDUuMjJ6TTE0LjI1Ljc1djRoMS41di00aC0xLjV6bTAgOHY2LjVoMS41di02LjVoLTEuNXpNMTUgMTQuNUgxVjE2aDE0di0xLjV6bS0xMy4yNS43NVYuNzVILjI1djE0LjVoMS41ek0xIDEuNWg1Ljc1VjBIMXYxLjV6bTEwIDBoNFYwaC00djEuNXptLS40NyA0Ljc4bDUtNUwxNC40Ny4yMmwtNSA1IDEuMDYgMS4wNnoiCiAgICBmaWxsPSIjYTVlMWQyIgogIC8+Cjwvc3ZnPg==);\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can also make the ",(0,a.jsx)(n.strong,{children:"base64"})," conversion during runtime using ",(0,a.jsx)(n.code,{children:"btoa"}),", e.g.:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const svgAsString = ReactDOMServer.renderToString(<YourSVG />)\nconst base64 = window.btoa(svgAsString)\nAnchorElement.style = `background-image: url(data:image/svg+xml;base64,${base64})`\n\n// ... or using Node:\nBuffer.from(svgAsString, 'utf-8').toString('base64')\n"})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(t,e)})):t(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-components-anchor-mdx-a30ad30ef6e796a9118b.js.map