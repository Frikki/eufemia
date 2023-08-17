"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[36790],{31870:function(n,a,e){e.r(a),e.d(a,{default:function(){return f}});var t={};e.r(t),e.d(t,{BaseFieldComponents:function(){return p},FeatureFields:function(){return y},LayoutComponents:function(){return c},UsingDataContextProvider:function(){return g},Validation:function(){return b},VisibilityBasedOnData:function(){return L},WithSteps:function(){return x}});var o=e(52322),i=e(45392),l=e(82058),s=e(72210),u=e(21759),d=e(27197),r=e(16240),h=e(75482),m=e(10223);const p=()=>(0,o.jsx)(l.Z,{scope:{DataContext:s.Z,Layout:u.Z,StepsLayout:d.Z,Field:r.Z,Value:h.Z,Visibility:m.Z},children:'\n<Field.String\n  label="Text field"\n  value="Lorem Ipsum"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  label="Number Field"\n  value={789}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Boolean\n  label="Boolean Field"\n  value={true}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n\n'}),y=()=>(0,o.jsx)(l.Z,{scope:{DataContext:s.Z,Layout:u.Z,StepsLayout:d.Z,Field:r.Z,Value:h.Z,Visibility:m.Z},children:'\n<Field.FirstName value="John" />\n<Field.LastName value="Smith" />\n<Field.NationalIdentityNumber value="20058512345" />\n<Field.Email value="john@smith.email" />\n<Field.PhoneNumber value="+47 98765432" />\n\n'}),c=()=>(0,o.jsx)(l.Z,{scope:{DataContext:s.Z,Layout:u.Z,StepsLayout:d.Z,Field:r.Z,Value:h.Z,Visibility:m.Z},children:'<Layout.Section>\n  <Layout.MainHeading>Profile</Layout.MainHeading>\n\n  <Layout.Card stack>\n    <Layout.SubHeading>Name</Layout.SubHeading>\n\n    <Field.FirstName value="John" />\n    <Field.LastName value="Smith" />\n  </Layout.Card>\n\n  <Layout.Card stack>\n    <Layout.SubHeading>More information</Layout.SubHeading>\n\n    <Field.NationalIdentityNumber value="20058512345" />\n    <Field.Email value="john@smith.email" />\n    <Field.PhoneNumber value="+47 98765432" />\n  </Layout.Card>\n</Layout.Section>\n'}),L=()=>(0,o.jsx)(l.Z,{scope:{DataContext:s.Z,Layout:u.Z,StepsLayout:d.Z,Field:r.Z,Value:h.Z,Visibility:m.Z},children:'<DataContext.Provider\n  data={{\n    firstName: undefined,\n    lastName: \'Smith\',\n    advanced: false,\n    ssn: \'123\',\n    email: \'@smith.email\',\n    phone: \'+47 98765432\',\n  }}\n  onChange={(data) => console.log(\'onChange\', data)}\n  onPathChange={(path, value) => console.log(\'onPathChange\', path, value)}\n  onSubmit={(data) => console.log(\'onSubmit\', data)}\n>\n  <Layout.Section>\n    <Layout.MainHeading>Profile</Layout.MainHeading>\n\n    <Layout.Card stack>\n      <Layout.SubHeading>Name</Layout.SubHeading>\n\n      <Field.FirstName path="/firstName" />\n      <Field.LastName path="/lastName" />\n    </Layout.Card>\n  </Layout.Section>\n  <Field.Boolean\n    path="/advanced"\n    variant="checkbox-button"\n    label="More fields"\n  />\n  <Visibility pathTrue="/advanced">\n    <Layout.Section>\n      <Layout.Card stack>\n        <Layout.SubHeading>More information</Layout.SubHeading>\n\n        <Field.NationalIdentityNumber value="20058512345" />\n        <Field.Email value="john@smith.email" />\n        <Field.PhoneNumber value="+47 98765432" />\n      </Layout.Card>\n    </Layout.Section>\n  </Visibility>\n</DataContext.Provider>\n'}),g=()=>(0,o.jsx)(l.Z,{scope:{DataContext:s.Z,Layout:u.Z,StepsLayout:d.Z,Field:r.Z,Value:h.Z,Visibility:m.Z},children:"<DataContext.Provider\n  data={{\n    firstName: 'John',\n    lastName: 'Smith',\n    ssn: '20058512345',\n    email: 'john@smith.email',\n    phone: '+47 98765432',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n  onSubmit={(data) => console.log('onSubmit', data)}\n>\n  <Layout.MainHeading>Profile</Layout.MainHeading>\n\n  <Layout.Card stack>\n    <Field.FirstName path=\"/firstName\" />\n    <Field.LastName path=\"/lastName\" />\n    <Field.NationalIdentityNumber path=\"/ssn\" />\n    <Field.Email path=\"/email\" />\n    <Field.PhoneNumber path=\"/phone\" />\n\n    <Layout.ButtonRow>\n      <DataContext.SubmitButton />\n    </Layout.ButtonRow>\n  </Layout.Card>\n</DataContext.Provider>\n"}),b=()=>(0,o.jsx)(l.Z,{scope:{DataContext:s.Z,Layout:u.Z,StepsLayout:d.Z,Field:r.Z,Value:h.Z,Visibility:m.Z},children:"<DataContext.Provider\n  data={{\n    firstName: undefined,\n    lastName: 'Smith',\n    ssn: '123',\n    email: '@smith.email',\n    phone: '+47 98765432',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n  onSubmit={(data) => console.log('onSubmit', data)}\n>\n  <Layout.MainHeading>Profile</Layout.MainHeading>\n\n  <Layout.Card stack>\n    <Field.FirstName path=\"/firstName\" required />\n    <Field.LastName path=\"/lastName\" required />\n    <Field.NationalIdentityNumber path=\"/ssn\" validateInitially />\n    <Field.Email path=\"/email\" validateInitially />\n    <Field.PhoneNumber path=\"/phone\" validateInitially />\n  </Layout.Card>\n</DataContext.Provider>\n"}),x=()=>(0,o.jsx)(l.Z,{scope:{DataContext:s.Z,Layout:u.Z,StepsLayout:d.Z,Field:r.Z,Value:h.Z,Visibility:m.Z},children:'<DataContext.Provider\n  data={{\n    firstName: undefined,\n    lastName: \'Smith\',\n    advanced: false,\n    ssn: \'123\',\n    email: \'@smith.email\',\n    phone: \'+47 98765432\',\n  }}\n  onChange={(data) => console.log(\'onChange\', data)}\n  onPathChange={(path, value) => console.log(\'onPathChange\', path, value)}\n  onSubmit={(data) => console.log(\'onSubmit\', data)}\n>\n  <StepsLayout>\n    <StepsLayout.Step title="Name">\n      <Layout.MainHeading>Profile</Layout.MainHeading>\n\n      <Layout.Card stack>\n        <Layout.SubHeading>Name</Layout.SubHeading>\n\n        <Field.FirstName path="/firstName" required />\n        <Field.LastName path="/lastName" required />\n      </Layout.Card>\n\n      <Layout.ButtonRow>\n        <StepsLayout.NextButton />\n      </Layout.ButtonRow>\n    </StepsLayout.Step>\n\n    <StepsLayout.Step title="More information">\n      <Layout.MainHeading>Profile</Layout.MainHeading>\n\n      <Layout.Card stack>\n        <Layout.SubHeading>More information</Layout.SubHeading>\n\n        <Field.NationalIdentityNumber path="/ssn" />\n        <Field.Email path="/email" />\n        <Field.PhoneNumber path="/phone" />\n      </Layout.Card>\n\n      <Layout.ButtonRow>\n        <StepsLayout.PreviousButton />\n        <StepsLayout.NextButton />\n      </Layout.ButtonRow>\n    </StepsLayout.Step>\n\n    <StepsLayout.Step title="Summary">\n      <Layout.MainHeading>Profile</Layout.MainHeading>\n\n      <Layout.Card stack>\n        <Layout.FlexContainer direction="row">\n          <Value.FirstName path="/firstName" />\n          <Value.LastName path="/lastName" />\n        </Layout.FlexContainer>\n\n        <Value.NationalIdentityNumber path="/ssn" />\n        <Value.Email path="/email" />\n        <Value.PhoneNumber path="/phone" />\n      </Layout.Card>\n\n      <Layout.ButtonRow>\n        <StepsLayout.PreviousButton />\n        <DataContext.SubmitButton />\n      </Layout.ButtonRow>\n    </StepsLayout.Step>\n  </StepsLayout>\n</DataContext.Provider>\n'});function C(n){const a=Object.assign({h2:"h2",h3:"h3",p:"p"},(0,i.ah)(),n.components);return t||S("Examples",!1),p||S("Examples.BaseFieldComponents",!0),y||S("Examples.FeatureFields",!0),c||S("Examples.LayoutComponents",!0),g||S("Examples.UsingDataContextProvider",!0),b||S("Examples.Validation",!0),L||S("Examples.VisibilityBasedOnData",!0),x||S("Examples.WithSteps",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{children:"Demos"}),"\n",(0,o.jsx)(a.h3,{children:"Base field components"}),"\n",(0,o.jsx)(a.p,{children:"Base field components are targeting the data type they produce. They can\nreceive values and change handlers directly by props."}),"\n",(0,o.jsx)(p,{}),"\n",(0,o.jsx)(a.h3,{children:"Feature fields"}),"\n",(0,o.jsx)(a.p,{children:"Feature fields build on top of base field components and provide standard\nprops for simplified form implementations."}),"\n",(0,o.jsx)(y,{}),"\n",(0,o.jsx)(a.h3,{children:"Layout components"}),"\n",(0,o.jsx)(a.p,{children:"Wrapping inputs in layout components provide the standard design without\nthe need for local styles."}),"\n",(0,o.jsx)(c,{}),"\n",(0,o.jsx)(a.h3,{children:"Using DataContextProvider"}),"\n",(0,o.jsx)(a.p,{children:"Wrapping fields with a DataContextProvider component lets them read and\nwrite data to one common data set, and have input and output of data in\none place instead of connecting to every single field component."}),"\n",(0,o.jsx)(g,{}),"\n",(0,o.jsx)(a.h3,{children:"Visibility based on data"}),"\n",(0,o.jsx)(a.p,{children:"Some fields are displayed when data fill specific requirements."}),"\n",(0,o.jsx)(L,{}),"\n",(0,o.jsx)(a.h3,{children:"Validation"}),"\n",(0,o.jsx)(a.p,{children:"Here are some examples of validation properties of field components."}),"\n",(0,o.jsx)(b,{}),"\n",(0,o.jsx)(a.h3,{children:"With steps"}),"\n",(0,o.jsx)(a.p,{children:"Some fields are displayed when data fill specific requirements."}),"\n",(0,o.jsx)(x,{})]})}var f=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,i.ah)(),n.components);return a?(0,o.jsx)(a,Object.assign({},n,{children:(0,o.jsx)(C,n)})):C(n)};function S(n,a){throw new Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-demos-mdx-0c7357b2b9ba422ab6f8.js.map