"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[46738],{62661:function(n,e,l){l.r(e),l.d(e,{default:function(){return D}});var a={};l.r(a),l.d(a,{AsynchronousExternalBlurValidator:function(){return A},AsynchronousExternalValidator:function(){return w},CharacterCounter1:function(){return m},CharacterCounter2:function(){return p},CharacterCounter3:function(){return C},Clear:function(){return j},Disabled:function(){return f},Empty:function(){return u},Error:function(){return E},HorizontalLayout:function(){return g},Icons:function(){return v},Info:function(){return F},Label:function(){return h},LabelAndValue:function(){return d},MultipleEmpty:function(){return I},MultipleLabelAndValue:function(){return k},MultiplePlaceholder:function(){return P},Placeholder:function(){return c},SynchronousExternalBlurValidator:function(){return M},SynchronousExternalValidator:function(){return V},ValidateMaximumLengthCustomError:function(){return S},ValidateMinimumLength:function(){return L},ValidatePattern:function(){return y},ValidateRequired:function(){return Z},Warning:function(){return b},Widths:function(){return x}});var o=l(52322),r=l(45392),t=l(82058),i=l(16240),s=l(27439);const u=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:"<Field.String onChange={(value) => console.log('onChange', value)} />\n"}),c=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:"<Field.String\n  placeholder=\"Enter a text...\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),h=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:"<Field.String\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),d=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'<Field.String\n  label="Label text"\n  value="foo"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),g=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'<Field.String\n  label="Label text"\n  value="foo"\n  layout="horizontal"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),x=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'\n<Field.String\n  label="Default width (property omitted)"\n  value="foo"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.String\n  label="False (for browser default)"\n  value="foo"\n  width={false}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.String\n  label="Medium"\n  value="foo"\n  width="medium"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.String\n  label="Large"\n  value="foo"\n  width="large"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.String\n  label="Stretch"\n  value="foo"\n  width="stretch"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n\n'}),v=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'\n<Field.String\n  label="Icon left"\n  value="foo"\n  leftIcon="check"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.String\n  label="Icon right"\n  value="foo"\n  rightIcon="loupe"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n\n'}),m=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:"<Field.String\n  onChange={(value) => console.log('onChange', value)}\n  characterCounter\n/>\n"}),p=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'<Field.String\n  label="Label text"\n  value="foo"\n  onChange={(value) => console.log(\'onChange\', value)}\n  characterCounter\n/>\n'}),C=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'<Field.String\n  label="Label text"\n  value="foo"\n  onChange={(value) => console.log(\'onChange\', value)}\n  maxLength={16}\n  characterCounter\n/>\n'}),j=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:"<Field.String\n  value=\"foo\"\n  onChange={(value) => console.log('onChange', value)}\n  clear\n/>\n"}),f=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  disabled\n/>\n'}),F=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  info="Useful information (?)"\n/>\n'}),b=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z,FormError:s.X},children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  warning={new FormError("I\'m warning you...")}\n/>\n'}),E=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z,FormError:s.X},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  error={new FormError('This is what is wrong...')}\n/>\n"}),Z=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  required\n/>\n'}),L=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'<Field.String\n  value="foo"\n  label="Label text (minimum 8 characters)"\n  onChange={(value) => console.log(\'onChange\', value)}\n  minLength={8}\n/>\n'}),S=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'<Field.String\n  value="foo"\n  label="Label text (maximum 8 characters)"\n  onChange={(value) => console.log(\'onChange\', value)}\n  maxLength={8}\n  errorMessages={{\n    maxLength: "You can\'t write THAT long.. Max 8 chars!",\n  }}\n/>\n'}),y=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  pattern="^foo123"\n/>\n'}),V=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z,FormError:s.X},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  validator={(value) =>\n    value.length < 4 ? new FormError('At least 4 characters') : undefined\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),w=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z,FormError:s.X},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  validator={(value) =>\n    new Promise((resolve) =>\n      setTimeout(\n        () =>\n          resolve(\n            value.length < 5\n              ? new FormError('At least 5 characters')\n              : undefined\n          ),\n        1500\n      )\n    )\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),M=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z,FormError:s.X},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  onBlurValidator={(value) =>\n    value.length < 4 ? new FormError('At least 4 characters') : undefined\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),A=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z,FormError:s.X},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  onBlurValidator={(value) =>\n    new Promise((resolve) =>\n      setTimeout(\n        () =>\n          resolve(\n            value.length < 5\n              ? new FormError('At least 5 characters')\n              : undefined\n          ),\n        1500\n      )\n    )\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),I=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:"<Field.String\n  onChange={(value) => console.log('onChange', value)}\n  multiline\n/>\n"}),P=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:"<Field.String\n  placeholder=\"Enter text here\"\n  onChange={(value) => console.log('onChange', value)}\n  multiline\n/>\n"}),k=()=>(0,o.jsx)(t.Z,{scope:{Field:i.Z},children:'<Field.String\n  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tempus odio, nec interdum orci. Integer vehicula ipsum et risus finibus, vitae commodo ex luctus. Nam viverra sollicitudin dictum. Vivamus maximus dignissim lorem, vitae viverra erat dapibus a."\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  multiline\n/>\n'});function B(n){const e=Object.assign({h2:"h2",h3:"h3"},(0,r.ah)(),n.components);return a||W("Examples",!1),A||W("Examples.AsynchronousExternalBlurValidator",!0),w||W("Examples.AsynchronousExternalValidator",!0),m||W("Examples.CharacterCounter1",!0),p||W("Examples.CharacterCounter2",!0),C||W("Examples.CharacterCounter3",!0),j||W("Examples.Clear",!0),f||W("Examples.Disabled",!0),u||W("Examples.Empty",!0),E||W("Examples.Error",!0),g||W("Examples.HorizontalLayout",!0),v||W("Examples.Icons",!0),F||W("Examples.Info",!0),h||W("Examples.Label",!0),d||W("Examples.LabelAndValue",!0),I||W("Examples.MultipleEmpty",!0),k||W("Examples.MultipleLabelAndValue",!0),P||W("Examples.MultiplePlaceholder",!0),c||W("Examples.Placeholder",!0),M||W("Examples.SynchronousExternalBlurValidator",!0),V||W("Examples.SynchronousExternalValidator",!0),S||W("Examples.ValidateMaximumLengthCustomError",!0),L||W("Examples.ValidateMinimumLength",!0),y||W("Examples.ValidatePattern",!0),Z||W("Examples.ValidateRequired",!0),b||W("Examples.Warning",!0),x||W("Examples.Widths",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{children:"Demos"}),"\n",(0,o.jsx)(e.h3,{children:"Empty"}),"\n",(0,o.jsx)(u,{}),"\n",(0,o.jsx)(e.h3,{children:"Placeholder"}),"\n",(0,o.jsx)(c,{}),"\n",(0,o.jsx)(e.h3,{children:"Label"}),"\n",(0,o.jsx)(h,{}),"\n",(0,o.jsx)(e.h3,{children:"Label and value"}),"\n",(0,o.jsx)(d,{}),"\n",(0,o.jsx)(e.h3,{children:"Horizontal layout"}),"\n",(0,o.jsx)(g,{}),"\n",(0,o.jsx)(e.h3,{children:"Widths"}),"\n",(0,o.jsx)(x,{}),"\n",(0,o.jsx)(e.h3,{children:"Icons"}),"\n",(0,o.jsx)(v,{}),"\n",(0,o.jsx)(e.h3,{children:"Character counter"}),"\n",(0,o.jsx)(m,{}),"\n",(0,o.jsx)(p,{}),"\n",(0,o.jsx)(C,{}),"\n",(0,o.jsx)(e.h3,{children:"Clear"}),"\n",(0,o.jsx)(j,{}),"\n",(0,o.jsx)(e.h3,{children:"Disabled"}),"\n",(0,o.jsx)(f,{}),"\n",(0,o.jsx)(e.h3,{children:"Info"}),"\n",(0,o.jsx)(F,{}),"\n",(0,o.jsx)(e.h3,{children:"Warning"}),"\n",(0,o.jsx)(b,{}),"\n",(0,o.jsx)(e.h3,{children:"Error"}),"\n",(0,o.jsx)(E,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Required"}),"\n",(0,o.jsx)(Z,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Minimum length"}),"\n",(0,o.jsx)(L,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Maximum length and custom error message"}),"\n",(0,o.jsx)(S,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Pattern"}),"\n",(0,o.jsx)(y,{}),"\n",(0,o.jsx)(e.h3,{children:"Synchronous external validator (called on every change)"}),"\n",(0,o.jsx)(V,{}),"\n",(0,o.jsx)(e.h3,{children:"Asynchronous external validator (called on every change)"}),"\n",(0,o.jsx)(w,{}),"\n",(0,o.jsx)(e.h3,{children:"Synchronous external validator (called on blur)"}),"\n",(0,o.jsx)(M,{}),"\n",(0,o.jsx)(e.h3,{children:"Asynchronous external validator (called on blur)"}),"\n",(0,o.jsx)(A,{}),"\n",(0,o.jsx)(e.h3,{children:"Multiline, empty"}),"\n",(0,o.jsx)(I,{}),"\n",(0,o.jsx)(e.h3,{children:"Multiline, placeholder"}),"\n",(0,o.jsx)(P,{}),"\n",(0,o.jsx)(e.h3,{children:"Multiline, label & value"}),"\n",(0,o.jsx)(k,{})]})}var D=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(B,n)})):B(n)};function W(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-field-base-input-components-string-demos-mdx-d9616352ed26ff01f689.js.map