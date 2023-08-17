"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[70987],{71700:function(e,a,t){t.r(a);var n=t(52322),i=t(45392);function s(e){const a=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",h3:"h3"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{children:"Description"}),"\n",(0,n.jsxs)(a.p,{children:["If you don't want to repeat all the logic that drills down to values in the source data, and ensure that changes are sent to the right place, you can surround the components with a ",(0,n.jsx)(a.a,{href:"/uilib/extensions/forms/DataContext/Provider",children:"DataContext.Provider"})," component. This means that you feed the form with source data in one place, and give it only one ",(0,n.jsx)(a.code,{children:"onChange"})," callback. Then you only send the individual fields instructions about where in the data set the value that field is to process is located. The components then communicate internally and ensure that the values are retrieved and sent to the correct location."]}),"\n",(0,n.jsxs)(a.p,{children:["The reference to a specific field's value in the dataset is given with a prop called ",(0,n.jsx)(a.code,{children:"path"}),". Paths are defined in a syntax called JSON Pointer, which is basically a slash-separated string that can go several levels, and consist of both object-properties and array indexes. Examples of paths are: ",(0,n.jsx)(a.code,{children:"/firstName"}),", ",(0,n.jsx)(a.code,{children:"/nested/path/to/value"})," and ",(0,n.jsx)(a.code,{children:"/list/2/keyInThirdObject"}),". More information about JSON Pointers can be found on ",(0,n.jsx)(a.a,{href:"https://json-schema.org/draft/2020-12/relative-json-pointer.html",children:"the website of JSON Schema"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"In practice, this means that you can go from:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"const handleChange = useCallback((path, value) => {\n  // Update external state\n})\n\nreturn (\n  <div id=\"my-form\">\n    <Field.FirstName\n      value={data.firstName}\n      onChange={(value) => handleChange('firstName', value)}\n    />\n    <Field.LastName\n      value={data.lastName}\n      onChange={(value) => handleChange('lastName', value)}\n    />\n    <Field.Email\n      value={data.email}\n      onChange={(value) => handleChange('email', value)}\n    />\n    <Field.String\n      label=\"Special non-standardized value\"\n      value={data.specialValue}\n      onChange={(value) => handleChange('specialValue', value)}\n    />\n  </div>\n)\n"})}),"\n",(0,n.jsx)(a.p,{children:"to:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:'const handleChange = useCallback((path, value) => {\n  // Update external state\n})\n\nreturn (\n  <DataContext.Provider data={data} onChange={handleChange}>\n    <Field.FirstName path="/firstName" />\n    <Field.LastName path="/lastName" />\n    <Field.Email path="/email" />\n    <Field.String\n      path="/specialValue"\n      label="Special non-standardized value"\n    />\n  </DataContext.Provider>\n)\n'})}),"\n",(0,n.jsx)(a.p,{children:"This abstracts away some logic that many are used to having available for debugging and adjustments, which can be unfamiliar and difficult to get used to. The goal of the way this is designed is for it to be well tested and predictable, so that you don't need to have this boilerplate logic available. In addition, props from the individual components make them flexible in use, and this can be continuously expanded to cover recurring needs from implementations."}),"\n",(0,n.jsx)(a.h3,{children:"Error handling"}),"\n",(0,n.jsxs)(a.p,{children:["Besides how the forms are built up and the link to the surrounding data flow, these form components must ensure that the user experience is as much as possible in line with the way we have defined that it should work in practice. An example of this is when the error messages appear on the screen. Both the individual input component and any surrounding ",(0,n.jsx)(a.code,{children:"DataContext.Provider"})," component hold an internal state that says whether the value in the field has an error or not. In addition, it has a separate state that states whether error messages should be displayed or not."]}),"\n",(0,n.jsxs)(a.p,{children:["An example of what this leads to is when a field has an invalid value, for example because the field starts empty but is required. Or if the field requires a given syntax (such as national identity number), then the error message is not displayed before or at the same time as the user fills in the field in question. However, when the user jumps out of the field, the error message will appear if the value is still not valid based on the validation props the component has received. When the user then starts to adjust the field in question, the error message is hidden again until they jump out of the field. In addition, a surrounding ",(0,n.jsx)(a.code,{children:"DataContext.Provider"})," will check all the fields for errors, so that you do not get to the next step in a step-divided form, or can send the form and trigger ",(0,n.jsx)(a.code,{children:"onSubmit"})," if there are still fields on the screen that have errors."]}),"\n",(0,n.jsxs)(a.p,{children:["In the case of forms divided into several steps, the combination of the components ",(0,n.jsx)(a.code,{children:"DataContext.Provider"})," and ",(0,n.jsx)(a.code,{children:"StepsLayout.Steps"})," will also ensure that only the fields that are visible on the screen (for the relevant step, or based on what is hidden or shown via the Visibility component) provide a basis for whether one can proceed in the process or not."]}),"\n",(0,n.jsx)(a.h3,{children:"Hierarchically overridable properties"}),"\n",(0,n.jsxs)(a.p,{children:["Configuration of the form functionality through props for all components can be hierarchically overridden. This means that the further into the component structure you get, the higher priority props have. For example, a component that is given a ",(0,n.jsx)(a.code,{children:"path"})," to retrieve data from the ",(0,n.jsx)(a.code,{children:"DataContext.Provider"})," will rather prioritize a ",(0,n.jsx)(a.code,{children:"value"})," prop that the component receives directly if both parts are available:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"<DataContext.Provider data={{ foo: 'I am the chosen one!' }}>\n  <Value.String path=\"/foo\" />\n</DataContext.Provider>\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:'<DataContext.Provider data={{ foo: \'I am not chosen :-(\' }}>\n  <Value.String path="/foo" value="I am the one!" />\n</DataContext.Provider>\n'})}),"\n",(0,n.jsxs)(a.p,{children:["In the same way, components that have text properties built in, such as field label and error message for required field on ",(0,n.jsx)(a.code,{children:"Field.Email"}),", will choose what it receives instead of the default values if both are available:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"<Field.Email />\n// Gets the default label, and the email-pattern validation.\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:'<Field.Email label="Send me e-mail on this address" />\n// Gets the custom label, but still the default email-pattern validation.\n'})})]})}a.default=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,i.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-data-context-info-mdx-73dd7a7795a5535908db.js.map